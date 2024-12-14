import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// const resources = {
//     TM: {
//         translation: {
//             Download: "Yuklan!"
//         }
//     },
//     EN: {
//         translation: {
//             Download: "Download!"
//         }
//     }
// }



i18n
    .use(initReactI18next)
    // .use(Backend)
    .use(HttpBackend)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        supportedLngs: ["en", "ru", "tm", "tr"],
        ns: ['translation'],
        interpolation: {
            escapeValue: false
        },
        // backend: {
        //     loadPath: 'http://localhost:5000/backend/locales/{{lng}}/{{ns}}.json',
        // }
        // resources
    });

export default i18n;