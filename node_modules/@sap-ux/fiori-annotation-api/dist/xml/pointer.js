"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeFromPointer = getNodeFromPointer;
/**
 *  Returns node matching the pointer.
 *
 * @param document - XML document.
 * @param pointer - Pointer identifying a specific node in the document.
 * @returns Node matching the pointer if it exists.
 */
function getNodeFromPointer(document, pointer) {
    const segments = pointer.slice(1).split('/');
    if (segments.length === 0) {
        return undefined;
    }
    let node = document;
    for (const segment of segments) {
        const next = node[segment];
        if (next) {
            node = next;
        }
        else {
            return undefined;
        }
    }
    return node;
}
//# sourceMappingURL=pointer.js.map