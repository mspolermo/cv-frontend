import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n.use(initReactI18next).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ru',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                "headers": {
                    "occupation": "Front-End Developer",
                    "contacts": "Contacts",
                    "skills": "Skills",
                    "hard-skills" : "Tech Skills",
                    "soft-skills" : "Soft Skills",
                    "projects": "Projects",
                    "work-experience": "Work experience",
                    "education": "Education",
                    "about": "About me"
                },
                "modal": {
                    "loading": "Loading...",
                    "error": "Unfortunately, an error occurred:",
                    "again": "Try refreshing the page",
                    "refresh": "Refresh"
                }
            }
        },
        ru: {
            translation: {
                "headers": {
                    "occupation": "Front-End Разработчик",
                    "contacts": "Контакты",
                    "skills": "Навыки",
                    "hard-skills" : "Хард-скиллы",
                    "soft-skills" : "Софт-скиллы",
                    "projects": "Проекты",
                    "work-experience": "Опыт работы",
                    "education": "Образование",
                    "about": "Обо мне"
                },
                "modal": {
                    "loading": "Идет загрузка...",
                    "error": "К сожалению, произошла ошибка:",
                    "again": "Попробуйте обновить страницу",
                    "refresh": "Обновить"
                }
            }
        }
    }
  });


export default i18n;


