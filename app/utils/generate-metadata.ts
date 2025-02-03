import { Metadata } from "next";
import getTranslations from "@/app/i18n";
import { headers } from "next/headers";

export async function generateMetadata(
  locale: string,
  pageTitleKey: string,
  pageDescriptionKey?: string
): Promise<Metadata> {
  const { t } = await getTranslations(locale);
  const headersList = headers();
  const host = headersList.get("host") || "";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

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
        'en': `${baseUrl}${locale === 'en' ? '' : '/en'}`,
        'ar': `${baseUrl}${locale === 'ar' ? '' : '/ar'}`,
      },
    },
  };
} 