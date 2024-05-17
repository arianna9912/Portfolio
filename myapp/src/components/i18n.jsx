import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones para cada idioma
import translationES from '../translations/es.json';
import translationEN from '../translations/en.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: translationES },
    en: { translation: translationEN },
  },
  lng: 'en', // Establece el idioma predeterminado
  fallbackLng: 'es', // Establece el idioma de respaldo
  interpolation: { escapeValue: false },
});

export default i18n;