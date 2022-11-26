import { CustomStyle } from "../component/DiscordIconPreview";

const toKebabCase = (string: string) => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s]+/g, '-')
.replace(/\$l+/g, '(')
.replace(/\$r+/g, ')')
.replace(/_+/g, ':')
.toLowerCase();

const toImportant = (property: string, className: string): string => {
  console.log('toImportant', className, property);
  switch (true) {
    case className === 'messages' && property === 'backgroundColor':
    case className === 'messageText' && property === 'color':
      return ' !important';

    default:
      return '';
  }
}

export const getCssText = (styles: CustomStyle) => `body, #app-mount, #app-mount * {
  overflow-y: hidden !important;
}
${(Object.keys(styles) as (keyof CustomStyle)[])
// @ts-ignore
.map((className) => (Object.keys(styles[className]).length === 0)
? ''
: `
#app-mount .${toKebabCase(className)} {${Object
// @ts-ignore
.keys(styles[className])
// @ts-ignore
.map(k => `${toKebabCase(k)}: ${styles[className][k]}${toImportant(k, className)};`).join(` `)}
}`)
.join(` `).trim()
}`;
