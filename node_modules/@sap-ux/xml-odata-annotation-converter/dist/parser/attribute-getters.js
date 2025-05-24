"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementAttributeByName = getElementAttributeByName;
exports.getAttributeValue = getAttributeValue;
/**
 * Get attribute by its name.
 *
 * @param attributeName Name of the attribute
 * @param element Element containing attributes
 * @returns Attribute node if attribute with given name exists
 */
function getElementAttributeByName(attributeName, element) {
    return element.attributes.find((attribute) => attribute.key === attributeName);
}
/**
 * Get attribute value by its name.
 *
 * @param attributeName Name of the attribute
 * @param element Element containing attributes
 * @returns Value of the attribute
 */
function getAttributeValue(attributeName, element) {
    const attribute = getElementAttributeByName(attributeName, element);
    return attribute?.value ?? '';
}
//# sourceMappingURL=attribute-getters.js.map