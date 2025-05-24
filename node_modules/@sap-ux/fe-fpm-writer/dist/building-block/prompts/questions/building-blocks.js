"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getManifestPromptsGroup = void 0;
exports.getBuildingBlockTypePrompts = getBuildingBlockTypePrompts;
const i18n_1 = require("../../../i18n");
const types_1 = require("../../types");
/**
 * Returns the manifest prompts group, the same for all available building blocks.
 *
 * @returns The manifest prompts group.
 */
const getManifestPromptsGroup = () => {
    const t = (0, i18n_1.translate)(i18n_1.i18nNamespaces.buildingBlock, 'prompts.super.manifestGroup.');
    return {
        id: 'manifestLibraries',
        title: t('manifestLibrariesTitle'),
        description: t('manifestLibrariesDescription', { returnObjects: true })
    };
};
exports.getManifestPromptsGroup = getManifestPromptsGroup;
/**
 * Returns a list of prompts required to generate building blocks.
 *
 * @returns The list of prompts for building block types selection.
 */
async function getBuildingBlockTypePrompts() {
    const t = (0, i18n_1.translate)(i18n_1.i18nNamespaces.buildingBlock, 'prompts.super.');
    return {
        questions: [
            {
                type: 'list',
                name: 'buildingBlockType',
                message: t('buildingBlockType.message'),
                choices: [
                    { name: t('buildingBlockType.choices.chart'), value: types_1.BuildingBlockType.Chart },
                    { name: t('buildingBlockType.choices.filterBar'), value: types_1.BuildingBlockType.FilterBar },
                    { name: t('buildingBlockType.choices.table'), value: types_1.BuildingBlockType.Table }
                ]
            }
        ]
    };
}
//# sourceMappingURL=building-blocks.js.map