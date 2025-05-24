import type { ElementChild, Element, Range } from '@sap-ux/odata-annotation-core-types';
import { Edm } from '@sap-ux/odata-annotation-core-types';
import type { ValueWithOrigin } from './types';
/**
 * Factory function for PropertyValue node with a primitive (attribute) value.
 *
 * @param name - Name of the property.
 * @param valueType - Type of the property.
 * @param value - Value of the property.
 * @returns PropertyValue node.
 */
export declare function createPrimitiveRecordProperty(name: string, valueType: Edm, value: string): Element;
/**
 * Factory function for PropertyValue node with a complex (child element) value.
 *
 * @param name - Name of the property.
 * @param value - Value of the property.
 * @returns PropertyValue node.
 */
export declare function createComplexRecordProperty(name: string, value: Element): Element;
/**
 * Factory function for Annotation node with a primitive (attribute) value.
 *
 * @param termName - Annotation term.
 * @param valueType - Type of the annotation value.
 * @param value - Value of the annotation.
 * @returns Annotation node.
 */
export declare function createPrimitiveAnnotation(termName: string, valueType: Edm, value: string): Element;
/**
 * Factory function for Annotation node with a primitive (child element) value.
 *
 * @param termName - Annotation term.
 * @param value - Value of the annotation.
 * @returns Annotation node.
 */
export declare function createComplexAnnotation(termName: string, value: ElementChild): Element;
/**
 * Factory function for Record node.
 *
 * @param properties - Record properties.
 * @param type - Record type.
 * @returns Record node.
 */
export declare function createRecord(properties: Element[], type?: string): Element;
/**
 * Factory function for value with origin.
 *
 * @param value - Value.
 * @param uri - File URI where the value is defined.
 * @param range - Range of the value in the file.
 * @returns ValueWithOrigin node.
 */
export declare function createValue<T>(value: T, uri?: string, range?: Range): ValueWithOrigin<T>;
//# sourceMappingURL=builders.d.ts.map