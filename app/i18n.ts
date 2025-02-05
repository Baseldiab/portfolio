
import { createInstance, i18n, i18n as I18n, Resource } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";

// Interfaces
import { TLocale } from "@/app/components/interfaces/global.interfaces";

// Singleton instance for client-side
let clientInstance: i18n | null = null;

type GetTranslationsReturn = {
    i18n: I18n;
    resources: Record<string, unknown>;
    t: (key: string | string[], options?: Record<string, unknown>) => string;
    dir: (locale: TLocale) => "ltr" | "rtl";
};

async function initializeI18n(
    locale: string,
    i18nInstance: i18n,
    resources?: Resource,
): Promise<void> {
    if (!i18nInstance.isInitialized) {
        i18nInstance.use(initReactI18next);

        if (!resources) {
            i18nInstance.use(
                resourcesToBackend(
                    (language: string, namespace: string) =>
                        import(`./locales/${language}/${namespace}.json`)
                )
            );
        }

        await i18nInstance.init({
            lng: locale,
            resources,
            nsSeparator: ".",
            ns: ["fields", "placeholders", "navigation", "validations", "messages"],
            fallbackLng: i18nConfig.defaultLocale,
            supportedLngs: i18nConfig.locales,
            load: "all",
            preload: resources ? [] : i18nConfig.locales,
            react: {
                useSuspense: false,
                bindI18n: 'languageChanged loaded',
            },
            interpolation: {
                escapeValue: false,
            },
        });
    } else {
        await i18nInstance.changeLanguage(locale);
    }
}

export async function getClientTranslations(
    locale: string,
    resources?: Resource,
): Promise<GetTranslationsReturn> {
    if (!clientInstance) {
        clientInstance = createInstance();
    }

    await initializeI18n(locale, clientInstance, resources);

    return {
        i18n: clientInstance,
        resources: clientInstance.services.resourceStore.data,
        t: clientInstance.t.bind(clientInstance),
        dir: (locale: string) => clientInstance!.dir(locale) as "ltr" | "rtl",
    };
}

// For server-side translations
export async function getTranslations(
    locale: string,
    resources?: Resource,
): Promise<GetTranslationsReturn> {
    const i18nInstance = createInstance();
    await initializeI18n(locale, i18nInstance, resources);
    
    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t.bind(i18nInstance),
        dir: (locale: string) => i18nInstance.dir(locale) as "ltr" | "rtl",
    };
}

export default getTranslations;
