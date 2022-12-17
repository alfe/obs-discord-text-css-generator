// @ts-nocheck
import { CustomStyle } from "../component/DiscordTextPreview";

const toKebabCase = (string: string) => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s]+/g, '-')
.replace(/\$l+/g, '(')
.replace(/\$r+/g, ')')
.replace(/_+/g, ':')
.toLowerCase();

const toCamelCase = (string: string) => {
  const strings = string.split(/[-_ ]+/), len = strings.length;
  let str = strings[0];
  for (let i = 1; i < len; i++) {
    str += strings[i].toLowerCase().replace(/^[a-z]/, (value) => value.toUpperCase());
  }
  return str;
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
  const [classNameText, pseudoClassesText] = result.split(':');
  return classNameText + '"]' + (!pseudoClassesText ? '' : '::' + pseudoClassesText);
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
