import { BettererResultsSerialised } from './types';

// JS template string interpolation tokens
const JS_INTERP_ESCAPED = '$\\{';
const JS_INTERP_UNESCAPED_REGEXP = /\$\{/g;

const ESCAPE_REPLACERS: Record<string, string> = {
  "'": "\\'",
  '`': '\\`',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\r': '\\r',
  '\t': '\\t',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029'
};

const RESULTS_HEADER = `// BETTERER RESULTS V2.
//
// If this file contains merge conflicts, use \`betterer merge\` to automatically resolve them:
// https://phenomnomnominal.github.io/betterer/docs/results-file/#merge
//`;

/**
 * Prints a {@link BettererResultsSerialised | `BettererResultsSerialised`} object as a
 * `require()`-able string of JavaScript.
 */
export function printResults(results: BettererResultsSerialised): string {
  const printedResults = Object.keys(results).map((name) => printResult(name, results[name].value));
  return [RESULTS_HEADER, ...printedResults].join('');
}

function printResult(name: string, printedValue: string): string {
  return `\nexports[\`${escape(name)}\`] = {\n  value: \`${escape(printedValue)}\`\n};\n`;
}

function escape(printedValue: string): string {
  return printedValue
    .replace(/['`\\\b\f\r\t\u2028\u2029]/g, (char) => ESCAPE_REPLACERS[char])
    .replace(JS_INTERP_UNESCAPED_REGEXP, JS_INTERP_ESCAPED);
}
