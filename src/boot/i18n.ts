import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';
import { TranslateableString } from 'src/components/models';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof messages['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $mt: (str?: TranslateableString) => string;
  }
}

export default boot(({ app }) => {
  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: 'en-US',
    legacy: false,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);

  app.config.globalProperties.$mt = function (this: any, str?: TranslateableString) {
    if (!str) {
      return "Can't translate";
    }

    let current = this as any;
    while (!current.$i18n.locale && current.$parent) {
      current = current.$parent;
    }

    const locale = current.$i18n.locale ?? (i18n.global.locale as any).value?.toString();

    if (locale in str) {
      return str[locale];
    }

    if ('en-US' in str) {
      return str['en-US'];
    }

    return "Can't translate";
  };
});
