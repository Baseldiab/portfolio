import { Metadata } from "next";
import getTranslations from "@/app/i18n";

export async function generateMetadata(
  locale: string,
  pageTitleKey: string,
  pageDescriptionKey?: string
): Promise<Metadata> {
  const { t } = await getTranslations(locale);

  // Get the title translation
  const title = t(pageTitleKey);
  
  // Get the description translation if provided, otherwise use the default app description
  const description = pageDescriptionKey 
    ? t(pageDescriptionKey)
    : t("fields.app-description");

  return {
    title,
    description,
    alternates: {
      languages: {
        'en': `/${locale === 'en' ? '' : 'en'}`,
        'ar': `/${locale === 'ar' ? '' : 'ar'}`,
      },
    },
  };
} 