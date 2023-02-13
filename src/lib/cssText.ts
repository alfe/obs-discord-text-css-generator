// @ts-nocheck
import { CustomStyle } from "../component/DiscordTextPreview";

const toKebabCase = (string: string) => string
.replaceAll(/([a-z])([A-Z])/g, "$1-$2")
.replaceAll(/[\s]+/g, '-')
.replaceAll("$l", '(')
.replaceAll("$r", ')')
.replaceAll("_", ':')
.toLowerCase();

const toCamelCase = (string: string) => {
  const strings = string.split(/[-_ ]+/), len = strings.length;
  let str = strings[0];
  for (let i = 1; i < len; i++) {
    str += strings[i].toLowerCase().replace(/^[a-z]/, (value) => value.toUpperCase());
  }
  return str.replaceAll("lastChild", 'last-child');
};

const toImportant = (property: string, className: string): string => {
  console.log('toImportant', className, property);
  switch (true) {
    case className === 'messages' && property === 'backgroundColor':
    case className === 'messages' && property === 'flexDirection':
    case className === 'message' && property === 'width':
    case className === 'messageText' && property === 'color':
    case className === 'messageText' && property === 'width':
      return ' !important';

    default:
      return '';
  }
}

const toClassName = (className: string): string => {
  let result = '[class*="Chat_' + toCamelCase(toKebabCase(className));
  const [classNameText, ...pseudoClassesText] = result.split(':');
  return classNameText + '__"]' + (pseudoClassesText.length === 0 ? '' : ':' + pseudoClassesText.join(':'));
}

export const getCssText = (styles: CustomStyle) => `body, #root, #root * {
  overflow-y: hidden !important;
}
${(Object.keys(styles) as (keyof CustomStyle)[])
.map((className) => (Object.keys(styles[className]).length === 0)
? ''
: `
${toClassName(className)} {${Object
  .keys(styles[className])
  .map(k => `
  ${toKebabCase(k)}: ${styles[className][k]}${toImportant(k, className)};`).join(` `)
}
}`)
.join(` `).trim()
}`;
