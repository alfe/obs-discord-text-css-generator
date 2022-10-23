import { CustomStyle } from "../component/DiscordIconPreview";

const toKebabCase = (string: string) => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

const toImportant = (property: string, className: string): string => {
  console.log(property, className);
  switch (true) {
    case className === 'name' && property === 'backgroundColor':
      return ' !important';

    default:
      return '';
  }
}

export const getCssText = (styles: CustomStyle) =>
(Object.keys(styles) as (keyof CustomStyle)[])
.map((className) => (Object.keys(styles[className]).length === 0)
? ''
: `
#app-mount .${toKebabCase(className)} {${Object
.keys(styles[className])
.map(k => `
  ${toKebabCase(k)}: ${styles[className][k]}${toImportant(k, className)};`)
.join(` `)}
}`)
.join(` `).trim();
