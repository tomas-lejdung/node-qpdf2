/// <reference types="node" />
export interface DecryptSettings {
    /** The path for the encrypted pdf */
    input: string;
    /** The path for the decrypted pdf */
    output?: string;
    /** The password required for decrypting the pdf */
    password?: string;
    customArguments?: string[];
}
/**
 * Decrypts a PDF
 * @param payload The settings for decryption
 * @returns The output of QPDF
 */
export declare const decrypt: (payload: DecryptSettings) => Promise<Buffer>;
