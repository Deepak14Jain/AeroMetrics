"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementsWithName = getElementsWithName;
/**
 * Returns a subset of elements children based on their name.
 *
 * @param name Name of the element
 * @param element Element which sub-elements will be checked
 * @returns An array with matching elements
 */
function getElementsWithName(name, element) {
    return element.subElements ? element.subElements.filter((subElement) => subElement.name === name) : [];
}
//# sourceMappingURL=element-getters.js.map