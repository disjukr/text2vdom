export declare const StartRules: string[];
export declare class SyntaxError extends Error {
  constructor(message: string, expected: any, found: any, location: any);
}
export declare function parse(input: string, options?: any): any;
