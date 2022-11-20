import translations from './translationsGerman';

export default function customTranslate(template: string, replacements: { [x: string]: string | number; }) {
  replacements = replacements || {};

  // Translate
  template = translations[template] || template;

  // Replace
  return template.replace(/{([^}]+)}/g, (_, key) => {
    let str: any = replacements[key];
    if (translations[replacements[key]] != null && translations[replacements[key]] != 'undefined') {
      str = translations[replacements[key]];
    }
    return str || '{' + key + '}';
  });
}
