// See: https://github.com/johannessimon/pal-server/blob/e70f5585a21fb23dc656d4930710ce8c4cfdaab6/src/main/webapp/js/prism.js
import * as Prism from 'prismjs';

Prism.languages.sparql= {
  'comment': {
    pattern: /(^#.*?(\r?\n|$))/g,
    lookbehind: true
  },
  'string' : {
    pattern: /<(\\?[\s\S])*?>/g,
    lookbehind: true
  },
  'variable': /\?[\w.$]+|@("|'|`)(\\?[\s\S])+?\1/g,
  'function': /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/ig, // Should we highlight user defined functions too?
  'keyword': /\b(?:SELECT|WHERE|FROM|UNION|DISTINCT|REDUCED|PREFIX)\b/gi,
  'boolean': /\b(?:TRUE|FALSE|NULL)\b/gi,
  'number': /\b-?(0x)?\d*\.?[\da-f]+\b/g,
  'operator': /\b(?:ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]{1}|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//gi,
  'punctuation': /[;[\]()`,.]/g
};
