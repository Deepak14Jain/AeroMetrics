"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceByUri = getSourceByUri;
exports.toggleCase = toggleCase;
const url_1 = require("url");
function getSourceByUri(uri, ast) {
    const parsedUri = (0, url_1.fileURLToPath)(uri);
    let source = ast?.sources[parsedUri];
    // for windows, some NodeJS methods will output uppercase drive letters, some in lowercase
    if (!source && process.platform === 'win32') {
        uri = toggleCase(parsedUri.charAt(0)) + parsedUri.slice(1);
        source = ast?.sources[uri];
    }
    return source;
}
function toggleCase(ch) {
    return ch.toLowerCase() === ch ? ch.toUpperCase() : ch.toLowerCase();
}
//# sourceMappingURL=cdsSource.js.map