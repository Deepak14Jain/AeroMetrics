import type { Target } from '@sap-ux/odata-annotation-core-types';
import type { ODataAnnotations } from './types';
/**
 * Extracts supported OData annotation information from Target in preparation for conversion to SAP Annotations.
 *
 * @param uri - Document URI.
 * @param input - Targets with OData annotation for processing.
 * @returns A list of supported OData annotations found in targets.
 */
export declare function collectODataAnnotations(uri: string, input: Target[]): ODataAnnotations[];
//# sourceMappingURL=collector.d.ts.map