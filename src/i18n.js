import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const enTranslations = require('./locale/en.json');
const krTranslations = require('./locale/kr.json');

const resBundle = {
  en: {
    translations: enTranslations
  },
  kr: {
    translations: krTranslations
  }
};

i18n.use(initReactI18next).init({
  resources: resBundle,
  fallbackLng: 'en',
  lng: 'en',
  returnEmptyString: false,

  keySeparator: false,
  namespaceSeparator: false,

  ns: ['translations'],
  defaultNS: 'translations',

  debug: true,

  interpolation: {
    escapeValue: false
  },

  react: {
    bindI18n: 'languageChanged',
    wait: true
  }
});

export default i18n;
