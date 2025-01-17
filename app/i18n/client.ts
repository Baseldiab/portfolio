'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEn from './locales/en/common.json';
import commonAr from './locales/ar/common.json';
import contactEn from './locales/en/contact.json';
import contactAr from './locales/ar/contact.json';
import errorEn from './locales/en/error.json';
import errorAr from './locales/ar/error.json';
import projectsEn from './locales/en/projects.json';
import projectsAr from './locales/ar/projects.json';
import skillsEn from './locales/en/skills.json';
import skillsAr from './locales/ar/skills.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    defaultNS: 'common',
    resources: {
      en: {
        common: commonEn,
        contact: contactEn,
        error: errorEn,
        projects: projectsEn,
        skills: skillsEn,
      },
      ar: {
        common: commonAr,
        contact: contactAr,
        error: errorAr,
        projects: projectsAr,
        skills: skillsAr,
      },
    },
  });

export default i18next;