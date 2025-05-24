"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVersion = validateVersion;
exports.validateDependenciesLibs = validateDependenciesLibs;
exports.validateBasePath = validateBasePath;
exports.getErrorMessage = getErrorMessage;
const mem_fs_1 = require("mem-fs");
const mem_fs_editor_1 = require("mem-fs-editor");
const semver_1 = require("semver");
const utils_1 = require("./utils");
/**
 * Validate that the UI5 version requirement is valid.
 *
 * @param ui5Version - optional minimum required UI5 version
 * @returns true if the version is supported otherwise throws an error
 */
function validateVersion(ui5Version) {
    const minVersion = (0, semver_1.coerce)(ui5Version);
    if (minVersion && (0, semver_1.lt)(minVersion, '1.84.0')) {
        throw new Error('SAP Fiori elements for OData v4 is only supported starting with SAPUI5 1.84.');
    }
    return true;
}
/**
 * Validates the library dependencies - at least one of expected dependencies is present.
 *
 * @param {string} manifest - the manifest content
 * @param {string[]} dependencies - expected dependencies
 * @returns true if at least one of expected dependencies is presented in manifest.
 */
function validateDependenciesLibs(manifest, dependencies) {
    const libs = manifest['sap.ui5']?.dependencies?.libs;
    return dependencies.length
        ? dependencies.some((dependency) => {
            return libs?.[dependency] !== undefined;
        })
        : true;
}
/**
 * Validates the provided base path, checks at least one of expected dependencies is present.
 *
 * @param {string} basePath - the base path
 * @param {Editor} fs - the memfs editor instance
 * @param {string[]} dependencies - expected dependencies
 * @returns true if the path is valid, otherwise, throws and error
 */
async function validateBasePath(basePath, fs, dependencies = ['sap.fe.templates']) {
    if (!fs) {
        fs = (0, mem_fs_editor_1.create)((0, mem_fs_1.create)());
    }
    const manifestPath = await (0, utils_1.getManifestPath)(basePath, fs);
    if (!fs.exists(manifestPath)) {
        throw new Error(`Invalid project folder. Cannot find required file ${manifestPath}`);
    }
    else {
        const manifest = fs.readJSON(manifestPath);
        if (!validateDependenciesLibs(manifest, dependencies)) {
            if (dependencies.length === 1) {
                throw new Error(`Dependency ${dependencies[0]} is missing in the manifest.json. Fiori elements FPM requires the SAP FE libraries.`);
            }
            else {
                throw new Error(`All of the dependencies ${dependencies.join(', ')} are missing in the manifest.json. Fiori elements FPM requires the SAP FE libraries.`);
            }
        }
    }
    return true;
}
/**
 * Returns the message property if the error is an instance of `Error` else a string representation of the error.
 *
 * @param error {Error | unknown} - the error instance
 * @returns {string} the error message
 */
function getErrorMessage(error) {
    return error instanceof Error ? error.message : String(error);
}
//# sourceMappingURL=validate.js.map