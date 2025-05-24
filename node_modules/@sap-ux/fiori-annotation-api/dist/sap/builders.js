"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrimitiveRecordProperty = createPrimitiveRecordProperty;
exports.createComplexRecordProperty = createComplexRecordProperty;
exports.createPrimitiveAnnotation = createPrimitiveAnnotation;
exports.createComplexAnnotation = createComplexAnnotation;
exports.createRecord = createRecord;
exports.createValue = createValue;
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
function createComplexElement(elementName, nameAttribute, name, content) {
    return (0, odata_annotation_core_types_1.createElementNode)({
        name: elementName,
        attributes: {
            [nameAttribute]: (0, odata_annotation_core_types_1.createAttributeNode)(nameAttribute, name)
        },
        content
    });
}
function createPrimitiveElement(elementName, nameAttribute, name, valueType, value) {
    return (0, odata_annotation_core_types_1.createElementNode)({
        name: elementName,
        attributes: {
            [nameAttribute]: (0, odata_annotation_core_types_1.createAttributeNode)(nameAttribute, name),
            [valueType]: (0, odata_annotation_core_types_1.createAttributeNode)(valueType, value)
        }
    });
}
/**
 * Factory function for PropertyValue node with a primitive (attribute) value.
 *
 * @param name - Name of the property.
 * @param valueType - Type of the property.
 * @param value - Value of the property.
 * @returns PropertyValue node.
 */
function createPrimitiveRecordProperty(name, valueType, value) {
    return createPrimitiveElement("PropertyValue" /* Edm.PropertyValue */, "Property" /* Edm.Property */, name, valueType, value);
}
/**
 * Factory function for PropertyValue node with a complex (child element) value.
 *
 * @param name - Name of the property.
 * @param value - Value of the property.
 * @returns PropertyValue node.
 */
function createComplexRecordProperty(name, value) {
    return createComplexElement("PropertyValue" /* Edm.PropertyValue */, "Property" /* Edm.Property */, name, [value]);
}
/**
 * Factory function for Annotation node with a primitive (attribute) value.
 *
 * @param termName - Annotation term.
 * @param valueType - Type of the annotation value.
 * @param value - Value of the annotation.
 * @returns Annotation node.
 */
function createPrimitiveAnnotation(termName, valueType, value) {
    return createPrimitiveElement("Annotation" /* Edm.Annotation */, "Term" /* Edm.Term */, termName, valueType, value);
}
/**
 * Factory function for Annotation node with a primitive (child element) value.
 *
 * @param termName - Annotation term.
 * @param value - Value of the annotation.
 * @returns Annotation node.
 */
function createComplexAnnotation(termName, value) {
    return (0, odata_annotation_core_types_1.createElementNode)({
        name: "Annotation" /* Edm.Annotation */,
        attributes: {
            ["Term" /* Edm.Term */]: (0, odata_annotation_core_types_1.createAttributeNode)("Term" /* Edm.Term */, termName)
        },
        content: [value]
    });
}
/**
 * Factory function for Record node.
 *
 * @param properties - Record properties.
 * @param type - Record type.
 * @returns Record node.
 */
function createRecord(properties, type) {
    const node = (0, odata_annotation_core_types_1.createElementNode)({
        name: "Record" /* Edm.Record */,
        content: properties
    });
    if (type !== undefined) {
        node.attributes["Type" /* Edm.Type */] = (0, odata_annotation_core_types_1.createAttributeNode)("Type" /* Edm.Type */, type);
    }
    return node;
}
/**
 * Factory function for value with origin.
 *
 * @param value - Value.
 * @param uri - File URI where the value is defined.
 * @param range - Range of the value in the file.
 * @returns ValueWithOrigin node.
 */
function createValue(value, uri, range) {
    const result = {
        value
    };
    if (uri && range) {
        result.location = odata_annotation_core_types_1.Location.create(uri, range);
    }
    return result;
}
//# sourceMappingURL=builders.js.map