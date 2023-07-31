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
                },
                "skills": {
                    "Team work": "Team work",
                    "Problem-solving": "Problem-solving",
                    "Time management": "Time management",
                    "Emotional control": "Emotional control",
                    "Customer orientation": "Customer orientation"
                },
                "jobs": {
                    "CSPSiD": "CSPSiD",
                    "Online": "Online",
                    "North bridge": "North bridge"
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
                },
                "skills": {
                    "Team work": "Командная работа",
                    "Problem-solving": "Решение проблем",
                    "Time management": "Управление временем",
                    "Emotional control": "Эмоциональный контроль",
                    "Customer orientation": "Клиентоориентированность"
                },
                "jobs": {
                    "CSPSiD": "ЦСПСиД",
                    "Online": "Онлайн",
                    "North bridge": "Северный мост"
                }
            }
        }
    }
  });


export default i18n;


