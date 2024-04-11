"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ignore errors about unsafe-arguments, this is because data is unknown
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const node_child_process_1 = require("node:child_process");
exports.default = (callArguments) => {
    return new Promise((resolve, reject) => {
        const process = (0, node_child_process_1.spawn)("qpdf", callArguments);
        const stdout = [];
        const stderr = [];
        process.stdout.on("data", (data) => {
            stdout.push(data);
        });
        process.stderr.on("data", (data) => {
            /* c8 ignore next */
            stderr.push(data);
        });
        process.on("error", (error) => {
            /* c8 ignore next */
            reject(error);
        });
        process.on("close", (code) => {
            if (code !== 0) {
                // There is a problem from qpdf
                reject(Buffer.from(stderr.join("")).toLocaleString());
            }
            else {
                resolve(Buffer.from(stdout.join("")));
            }
        });
    });
};
