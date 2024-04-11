"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = exports.hyphenate = void 0;
const node_fs_1 = require("node:fs");
/**
 * hyphenate will take any value that is dromedary case (camelCase with a initial lowercase letter)
 * and convert it to kebab case (kebab-case). For example `camelCase` becomes camel-case
 * @param variable the value to be "kebab'd"
 * @returns the value with in kebab case
 */
const hyphenate = (variable) => variable.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
exports.hyphenate = hyphenate;
/**
 * Determines if the file exists
 * @param file the path of the file to be tested.
 */
const fileExists = (file) => {
    return !!(0, node_fs_1.existsSync)(file);
};
exports.fileExists = fileExists;
