// next
import { ThemeProvider } from "next-themes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

// Styles
import CustomCursor from "@/app/components/common/custom-cursor";
import "./globals.css";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Config
import i18nConfig from "@/i18nConfig";

// Components

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(
    locale,
    "fields.app-name",
    "fields.app-description"
  );
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Validate that the incoming locale is supported
  if (!i18nConfig.locales.includes(locale)) {
    const headersList = headers();
    const defaultLocale = i18nConfig.defaultLocale;
    // Get the path without the locale
    const path = headersList.get("x-invoke-path") || "";
    const pathWithoutLocale = path.replace(`/${locale}`, "") || "/";

    redirect(`/${defaultLocale}${pathWithoutLocale}`);
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`flex flex-col gap-10  overflow-hidden `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
