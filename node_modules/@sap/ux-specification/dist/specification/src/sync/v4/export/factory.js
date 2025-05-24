"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataInstanceFactoryV4 = void 0;
const controls = __importStar(require("./controls"));
const pages = __importStar(require("./pages"));
const factory_1 = require("../../common/decoration/factory");
const ux_specification_types_1 = require("@sap/ux-specification-types");
/**
 * Note: If the key of the elements corresponds to the name of the definition in schema, you do not have to list it explicitly here.
 * The following tables only comprise entries for elements that do not follow the official pattern (yet)
 */
const alpElements = {
    ALPTableView: controls.ALPTable
};
const lrElements = {
    ALPTableView: controls.ALPTable
};
const opElements = {
    [ux_specification_types_1.DefinitionName.ObjectPageResponsiveTableV4]: controls.ObjectPageResponsiveTableV4,
    [ux_specification_types_1.DefinitionName.ObjectPageAnalyticalTableV4]: controls.ObjectPageAnalyticalTableV4,
    [ux_specification_types_1.DefinitionName.ObjectPageGridTableV4]: controls.ObjectPageGridTableV4,
    [ux_specification_types_1.DefinitionName.ObjectPageTreeTableV4]: controls.ObjectPageTreeTableV4,
    TableColumn: controls.ObjectPageTableColumn,
    ObjectPageCustomSectionView: controls.ObjectPageCustomSectionFragment,
    ActionAfterExecutionConfiguration: controls.ActionAfterExecutionConfigurationOP
};
const pageTypes = {
    [ux_specification_types_1.PageTypeV4.AnalyticalListPage]: alpElements,
    [ux_specification_types_1.PageTypeV4.ListReport]: lrElements,
    [ux_specification_types_1.PageTypeV4.ObjectPage]: opElements
};
/**
 * V4 specific factory class for creating instances of (reflect) metadata classes
 */
class MetadataInstanceFactoryV4 extends factory_1.MetadataFactory {
    constructor() {
        super(controls, pages, pageTypes);
    }
}
exports.MetadataInstanceFactoryV4 = MetadataInstanceFactoryV4;
//# sourceMappingURL=factory.js.map