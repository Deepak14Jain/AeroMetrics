import type { Answers, Prompts, PromptsGroup, PromptsType } from '../../../prompts/types';
export interface BuildingBlockTypePromptsAnswer extends Answers {
    buildingBlockType: PromptsType;
}
/**
 * Returns the manifest prompts group, the same for all available building blocks.
 *
 * @returns The manifest prompts group.
 */
export declare const getManifestPromptsGroup: () => PromptsGroup;
/**
 * Returns a list of prompts required to generate building blocks.
 *
 * @returns The list of prompts for building block types selection.
 */
export declare function getBuildingBlockTypePrompts(): Promise<Prompts<BuildingBlockTypePromptsAnswer>>;
//# sourceMappingURL=building-blocks.d.ts.map