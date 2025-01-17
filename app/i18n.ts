

import { createInstance, i18n, i18n as I18n, Resource } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";
import { TLocale } from "./components/interfaces/global.interfaces";



type GetTranslationsReturn = {
    i18n: I18n;
    resources: Record<string, unknown>; 
    t: (key: string, options?: unknown) => string; 
    dir: (locale: TLocale) => "ltr" | "rtl"; 
};

export default async function getTranslations(
    locale: string,
    i18nInstance?: i18n,
    resources?: Resource,
): Promise<GetTranslationsReturn> {
    i18nInstance = i18nInstance || createInstance();

    i18nInstance.use(initReactI18next);

    if (!resources) {
        i18nInstance.use(
            resourcesToBackend(
                (language: string, namespace: string)  =>
                    import(`./locales/${language}/${namespace}.json`)
            )
        );
    }

    // Initialize the i18n instance
    await i18nInstance.init({
        lng: locale,
        resources,
        nsSeparator: ".",
        ns: ["fields", "placeholders", "navigation", "validations", "messages"],
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        load: "all",
        preload: resources ? [] : i18nConfig.locales,
    });


    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t as (key: string, options?: unknown) => string,
        dir: (locale: string) => i18nInstance.dir(locale) as "ltr" | "rtl",
    };
}
