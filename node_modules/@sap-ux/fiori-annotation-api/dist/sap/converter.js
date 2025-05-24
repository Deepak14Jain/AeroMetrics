"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAPAnnotationConverter = void 0;
exports.convertTargets = convertTargets;
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
const types_1 = require("./types");
const collector_1 = require("./collector");
const builders_1 = require("./builders");
const logger_1 = require("../logger");
/**
 * Converts OData annotations to SAP annotations.
 */
class SAPAnnotationConverter {
    targets = new Map();
    labels = new Map();
    targetProperties = new Map();
    /**
     * Converts OData annotations to SAP annotations.
     *
     * @param annotations - A list of OData annotations.
     * @returns Targets with SAP annotations.
     */
    convertAnnotations(annotations) {
        this.targets.clear();
        this.targetProperties.clear();
        this.labels.clear();
        this.processLineItems(annotations);
        this.processFieldGroups(annotations);
        // Following functions expect that all the other annotations have been processed
        this.processFacets(annotations);
        this.processLabels();
        return [...this.targets.values()];
    }
    getTarget(name) {
        let target = this.targets.get(name);
        if (!target) {
            target = (0, odata_annotation_core_types_1.createTarget)(name);
            this.targets.set(name, target);
        }
        return target;
    }
    addLabel(target, term, value) {
        let labels = this.labels.get(target);
        if (!labels) {
            labels = [];
            this.labels.set(target, labels);
        }
        labels.push({
            source: term,
            value
        });
    }
    /**
     * Gets target node by name and collects annotated properties.
     *
     * @param targetName - Name of the target entity.
     * @param propertyName - Name of the property.
     * @returns Target node.
     */
    getPropertyTarget(targetName, propertyName) {
        const name = [targetName, propertyName].join('/');
        const target = this.getTarget(name);
        let targetProperties = this.targetProperties.get(targetName);
        if (!targetProperties) {
            targetProperties = new Set();
            this.targetProperties.set(targetName, targetProperties);
        }
        targetProperties.add(propertyName);
        return target;
    }
    processLineItems(annotations) {
        const definitions = annotations.filter((annotation) => annotation.term === types_1.UI_LINE_ITEM);
        for (const definition of definitions) {
            let position = 10;
            for (const dataField of definition.items) {
                const target = this.getPropertyTarget(definition.target.value, dataField.value.value);
                target.terms.push((0, builders_1.createComplexAnnotation)('UI.lineItem', (0, odata_annotation_core_types_1.createElementNode)({
                    name: "Collection" /* Edm.Collection */,
                    content: [
                        (0, builders_1.createRecord)([
                            (0, builders_1.createPrimitiveRecordProperty)('position', "Int" /* Edm.Int */, position.toString()),
                            (0, builders_1.createPrimitiveRecordProperty)('importance', "EnumMember" /* Edm.EnumMember */, 'HIGH')
                        ])
                    ]
                })));
                if (dataField.label) {
                    this.addLabel(target.name, types_1.UI_LINE_ITEM, dataField.label);
                }
                position += 10;
            }
        }
    }
    processFieldGroups(annotations) {
        const definitions = annotations.filter((annotation) => annotation.term === types_1.UI_FIELD_GROUP);
        for (const definition of definitions) {
            let position = 10;
            for (const dataField of definition.data) {
                const target = this.getPropertyTarget(definition.target.value, dataField.value.value);
                const additionalProperties = [];
                if (definition.qualifier) {
                    additionalProperties.push((0, builders_1.createPrimitiveRecordProperty)('qualifier', "String" /* Edm.String */, definition.qualifier.value));
                }
                target.terms.push((0, builders_1.createComplexAnnotation)('UI.fieldGroup', (0, odata_annotation_core_types_1.createElementNode)({
                    name: "Collection" /* Edm.Collection */,
                    content: [
                        (0, builders_1.createRecord)([
                            (0, builders_1.createPrimitiveRecordProperty)('position', "Int" /* Edm.Int */, position.toString()),
                            ...additionalProperties
                        ])
                    ]
                })));
                if (dataField.label) {
                    this.addLabel(target.name, types_1.UI_FIELD_GROUP, dataField.label);
                }
                position += 10;
            }
        }
    }
    /**
     * Adds facet annotations.
     * **Important** this needs to happen at the end of all annotation processing to correctly
     * attach facet annotation.
     *
     * @param annotations - OData annotations.
     */
    processFacets(annotations) {
        const definitions = annotations.filter((annotation) => annotation.term === types_1.UI_FACETS);
        for (const definition of definitions) {
            let position = 10;
            const entityName = definition.target.value;
            const propertyName = this.targetProperties.get(entityName)?.values()?.next()?.value;
            if (!propertyName) {
                logger_1.logger.warn(`Could not find a property to which attach Facets annotation for entity "${entityName}"`);
                return;
            }
            const targetName = [entityName, propertyName].join('/');
            const target = this.getTarget(targetName);
            const content = [];
            const annotation = (0, builders_1.createComplexAnnotation)('UI.facet', (0, odata_annotation_core_types_1.createElementNode)({
                name: "Collection" /* Edm.Collection */,
                content
            }));
            for (const facet of definition.facets) {
                if (facet.type === types_1.UI_REFERENCE_FACET) {
                    const node = (0, odata_annotation_core_types_1.createElementNode)({
                        name: "Record" /* Edm.Record */,
                        content: [
                            (0, builders_1.createPrimitiveRecordProperty)('id', "String" /* Edm.String */, facet.id.value),
                            (0, builders_1.createPrimitiveRecordProperty)('purpose', "EnumMember" /* Edm.EnumMember */, 'STANDARD'),
                            (0, builders_1.createPrimitiveRecordProperty)('type', "EnumMember" /* Edm.EnumMember */, 'FIELDGROUP_REFERENCE'),
                            (0, builders_1.createPrimitiveRecordProperty)('targetQualifier', "String" /* Edm.String */, facet.target.value),
                            (0, builders_1.createPrimitiveRecordProperty)('position', "Int" /* Edm.Int */, position.toString())
                        ]
                    });
                    if (facet.label) {
                        node.content.push((0, builders_1.createPrimitiveRecordProperty)('label', "String" /* Edm.String */, facet.label.value));
                    }
                    position += 10;
                    content.push(node);
                }
            }
            target.terms.push(annotation);
        }
    }
    /**
     * Adds labels from multiple sources.
     * Priority is in annotation processing order (LineItem > FieldGroup).
     */
    processLabels() {
        for (const [targetName, definitions] of this.labels.entries()) {
            const target = this.getTarget(targetName);
            const definition = definitions[0];
            if (definition) {
                target.terms.push((0, builders_1.createPrimitiveAnnotation)('EndUserText.label', "String" /* Edm.String */, definition.value.value));
            }
        }
    }
}
exports.SAPAnnotationConverter = SAPAnnotationConverter;
/**
 * Converts OData annotations to SAP annotations.
 *
 * @param input Targets grouped by files with OData annotations.
 * @returns Targets with SAP annotations.
 */
function convertTargets(input) {
    const converter = new SAPAnnotationConverter();
    const annotations = [];
    for (const [uri, targets] of Object.entries(input)) {
        const fileAnnotations = (0, collector_1.collectODataAnnotations)(uri, targets);
        for (const annotation of fileAnnotations) {
            annotations.push(annotation);
        }
    }
    return converter.convertAnnotations(annotations);
}
//# sourceMappingURL=converter.js.map