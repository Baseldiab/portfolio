// next
import { ThemeProvider } from "next-themes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Styles
import "./globals.css";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Config
import i18nConfig from "@/i18nConfig";

// Components
import CustomCursor from "@/app/components/common/custom-cursor";

// fonts
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const InitialLoader = dynamic(
  () => import("@/app/components/loading/loading-animation"),
  { ssr: false }
);

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    ...(await generatePageMetadata(
      locale,
      "fields.app-name",
      "fields.app-description"
    )),
    icons: {
      icon: "/favicon.ico",
      // You can also add more sizes/types
      apple: "/apple-icon.png",
      shortcut: "/favicon.ico",
    },
  };
}

export default async function RootLayout({
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
    const path = headersList.get("x-invoke-path") || "";
    const pathWithoutLocale = path.replace(`/${locale}`, "") || "/";

    redirect(`/${defaultLocale}${pathWithoutLocale}`);
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body className={`${playfair.variable} min-h-fit`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <InitialLoader />
          <main
            className="flex flex-col gap-10 min-h-screen"
            id="main-content"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            {children}
          </main>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
