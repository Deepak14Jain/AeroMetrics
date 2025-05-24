"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePath = resolvePath;
exports.resolveEnumMemberValue = resolveEnumMemberValue;
exports.getAliasedEnumMember = getAliasedEnumMember;
exports.isAnnotationList = isAnnotationList;
exports.isAnnotation = isAnnotation;
exports.isRecord = isRecord;
exports.isCollection = isCollection;
const odata_annotation_core_1 = require("@sap-ux/odata-annotation-core");
/**
 *  Converts path to fully qualified path.
 *
 * @param namespaceMap - Namespace or alias to namespace map.
 * @param currentNamespace - Current files namespace.
 * @param path - Path to be converted.
 * @returns Fully qualified path.
 */
function resolvePath(namespaceMap, currentNamespace, path) {
    const parsedPath = (0, odata_annotation_core_1.parsePath)(path);
    return (0, odata_annotation_core_1.toFullyQualifiedPath)(namespaceMap, currentNamespace, parsedPath);
}
/**
 * Converts enum member to fully qualified name.
 *
 * @param namespaceMap - Namespace or alias to namespace map.
 * @param currentNamespace - Current files namespace.
 * @param enumMemberString - Enum member name.
 * @returns Fully qualified enum member name.
 */
function resolveEnumMemberValue(namespaceMap, currentNamespace, enumMemberString) {
    return enumMemberString
        .split(' ')
        .map((enumMember) => resolvePath(namespaceMap, currentNamespace, enumMember))
        .join(' ');
}
/**
 * Converts enum member name to alias qualified name.
 *
 * @param aliasInfo - Alias information.
 * @param enumMember - Enum member name
 * @returns Alias qualified enum member name.
 */
function getAliasedEnumMember(aliasInfo, enumMember) {
    return enumMember
        .split(' ')
        .map((enumMember) => (0, odata_annotation_core_1.toAliasQualifiedName)(enumMember, aliasInfo))
        .join(' ');
}
/**
 * Checks if AVT node is an annotation list.
 *
 * @param node - AVT node.
 * @returns True if node is an annotation list.
 */
function isAnnotationList(node) {
    return typeof node.target !== 'undefined';
}
/**
 * Checks if AVT node is an annotation.
 *
 * @param node - AVT node.
 * @returns True if node is an annotation.
 */
function isAnnotation(node) {
    return typeof node.term !== 'undefined';
}
/**
 * Checks if AVT node is a record.
 *
 * @param node - AVT node.
 * @returns True if node is a record.
 */
function isRecord(node) {
    return Array.isArray(node.propertyValues);
}
/**
 * Checks if AVT node is a collection.
 *
 * @param node - AVT node.
 * @returns True if node is a collection.
 */
function isCollection(node) {
    return node.type === 'Collection';
}
//# sourceMappingURL=utils.js.map