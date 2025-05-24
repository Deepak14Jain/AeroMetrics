"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectODataAnnotations = collectODataAnnotations;
const odata_annotation_core_1 = require("@sap-ux/odata-annotation-core");
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
const types_1 = require("./types");
const logger_1 = require("../logger");
const builders_1 = require("./builders");
/**
 * Finds a property element based on property name.
 *
 * @param name - Property name to search for.
 * @param properties - A list of properties which will be checked.
 * @returns First matching element if one exists.
 */
function findProperty(name, properties) {
    return properties.find((property) => property.attributes["Property" /* Edm.Property */]?.value === name);
}
/**
 * Extracts supported OData annotation information from Target in preparation for conversion to SAP Annotations.
 */
class ODataAnnotationCollector {
    uri;
    annotations = [];
    constructor(uri) {
        this.uri = uri;
    }
    [types_1.UI_LINE_ITEM](target, term) {
        const collection = (0, odata_annotation_core_1.elementsWithName)("Collection" /* Edm.Collection */, term)[0];
        if (!collection) {
            logger_1.logger.warn('Invalid UI.LineItem structure, missing "Collection" element.');
            return;
        }
        const lineItems = {
            term: types_1.UI_LINE_ITEM,
            target: this.createValue(target.name, target.nameRange),
            items: []
        };
        const qualifier = this.createValueFromAttribute(term, "Qualifier" /* Edm.Qualifier */);
        if (qualifier) {
            lineItems.qualifier = qualifier;
        }
        if (term.range) {
            lineItems.location = odata_annotation_core_types_1.Location.create(this.uri, term.range);
        }
        for (const dataField of (0, odata_annotation_core_1.elementsWithName)("Record" /* Edm.Record */, collection)) {
            const item = this.processDataField(dataField);
            if (item) {
                lineItems.items.push(item);
            }
        }
        this.annotations.push(lineItems);
    }
    [types_1.UI_FIELD_GROUP](target, term) {
        const qualifier = term.attributes["Qualifier" /* Edm.Qualifier */]?.value;
        const record = (0, odata_annotation_core_1.elementsWithName)("Record" /* Edm.Record */, term)?.[0];
        if (!record) {
            logger_1.logger.warn('Invalid UI.FieldGroup structure, missing root "Record" element.');
            return;
        }
        const fieldGroupProperties = (0, odata_annotation_core_1.elementsWithName)("PropertyValue" /* Edm.PropertyValue */, record);
        const data = findProperty('Data', fieldGroupProperties);
        if (!data) {
            logger_1.logger.warn('Invalid UI.FieldGroup structure, missing "Data" property.');
            return;
        }
        const collection = (0, odata_annotation_core_1.elementsWithName)("Collection" /* Edm.Collection */, data)[0];
        if (!collection) {
            logger_1.logger.warn('Invalid UI.FieldGroup structure, missing "Collection" element in "Data" property.');
            return;
        }
        const annotation = {
            term: types_1.UI_FIELD_GROUP,
            target: this.createValue(target.name, target.nameRange),
            data: []
        };
        if (qualifier) {
            annotation.qualifier = this.createValue(qualifier, term.attributes["Qualifier" /* Edm.Qualifier */]?.valueRange);
        }
        if (term.range) {
            annotation.location = odata_annotation_core_types_1.Location.create(this.uri, term.range);
        }
        for (const dataField of (0, odata_annotation_core_1.elementsWithName)("Record" /* Edm.Record */, collection)) {
            const item = this.processDataField(dataField);
            if (item) {
                annotation.data.push(item);
            }
        }
        this.annotations.push(annotation);
    }
    [types_1.UI_FACETS](target, term) {
        const collection = (0, odata_annotation_core_1.elementsWithName)("Collection" /* Edm.Collection */, term)[0];
        if (!collection) {
            logger_1.logger.warn('Invalid UI.Facets structure, missing "Collection" element.');
            return;
        }
        const annotation = {
            term: types_1.UI_FACETS,
            target: this.createValue(target.name, target.nameRange),
            facets: []
        };
        if (term.range) {
            annotation.location = odata_annotation_core_types_1.Location.create(this.uri, term.range);
        }
        for (const facet of (0, odata_annotation_core_1.elementsWithName)("Record" /* Edm.Record */, collection)) {
            const recordType = facet.attributes["Type" /* Edm.Type */]?.value ?? '';
            if (recordType !== 'UI.ReferenceFacet') {
                logger_1.logger.warn(`Facet with type "${recordType}" is not supported!`);
                continue;
            }
            const properties = (0, odata_annotation_core_1.elementsWithName)("PropertyValue" /* Edm.PropertyValue */, facet);
            const id = this.createValueFromPrimitiveRecordProperty('ID', "String" /* Edm.String */, properties);
            if (!id) {
                logger_1.logger.warn(`ID for facet on "${target.name}" is required!`);
                continue;
            }
            const targetProperty = findProperty('Target', properties);
            const targetPropertyPathAttribute = targetProperty?.attributes?.["AnnotationPath" /* Edm.AnnotationPath */];
            // Currently we assume that target annotation will always be UI.FieldGroup
            const [targetAnnotation, fieldGroupQualifier] = targetPropertyPathAttribute?.value?.split('#') ?? [];
            if (!fieldGroupQualifier) {
                logger_1.logger.warn(`Could not find target qualifier for facet "${id.value}"!`);
                continue;
            }
            const targetQualifier = this.createValue(fieldGroupQualifier, targetPropertyPathAttribute?.valueRange);
            if (targetQualifier.location) {
                targetQualifier.location.range.start.character += targetAnnotation.length + 1; // do not include #
            }
            const item = {
                type: types_1.UI_REFERENCE_FACET,
                id,
                target: targetQualifier
            };
            const label = this.createValueFromPrimitiveRecordProperty('Label', "String" /* Edm.String */, properties);
            if (label) {
                item.label = label;
            }
            annotation.facets.push(item);
        }
        this.annotations.push(annotation);
    }
    createValue(value, range) {
        return (0, builders_1.createValue)(value, this.uri, range);
    }
    createValueFromPrimitiveRecordProperty(propertyName, valueType, properties) {
        const element = findProperty(propertyName, properties);
        return this.createValueFromAttribute(element, valueType);
    }
    createValueFromPrimitiveRecordPropertyWithFirstMatchingType(propertyName, valueTypes, properties) {
        const element = findProperty(propertyName, properties);
        for (const type of valueTypes) {
            const value = this.createValueFromAttribute(element, type);
            if (value) {
                return value;
            }
        }
        return undefined;
    }
    createValueFromAttribute(element, attributeName) {
        const attribute = element?.attributes?.[attributeName];
        const attributeValue = attribute?.value;
        if (attributeValue) {
            return (0, builders_1.createValue)(attributeValue, this.uri, attribute.valueRange);
        }
        return undefined;
    }
    processDataField(dataField) {
        const properties = (0, odata_annotation_core_1.elementsWithName)("PropertyValue" /* Edm.PropertyValue */, dataField);
        const value = this.createValueFromPrimitiveRecordPropertyWithFirstMatchingType('Value', ["Path" /* Edm.Path */, "PropertyPath" /* Edm.PropertyPath */], properties);
        if (!value) {
            logger_1.logger.warn('Invalid UI.DataField structure, missing "Value" property.');
            return undefined;
        }
        const result = {
            type: types_1.UI_DATA_FIELD,
            value
        };
        const label = this.createValueFromPrimitiveRecordProperty('Label', "String" /* Edm.String */, properties);
        if (label) {
            result.label = label;
        }
        return result;
    }
}
/**
 * Extracts supported OData annotation information from Target in preparation for conversion to SAP Annotations.
 *
 * @param uri - Document URI.
 * @param input - Targets with OData annotation for processing.
 * @returns A list of supported OData annotations found in targets.
 */
function collectODataAnnotations(uri, input) {
    const collector = new ODataAnnotationCollector(uri);
    for (const target of input) {
        for (const term of target.terms) {
            const termName = (0, odata_annotation_core_1.getElementAttributeValue)(term, "Term" /* Edm.Term */);
            const handler = collector[termName];
            if (typeof handler === 'function') {
                collector[termName](target, term);
            }
            else {
                logger_1.logger.warn(`No handler found for ${termName}`);
            }
        }
    }
    return collector.annotations;
}
//# sourceMappingURL=collector.js.map