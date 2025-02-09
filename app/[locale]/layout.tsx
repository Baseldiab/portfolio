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
import { playfair } from "@/app/utils/fonts";

// Config
import i18nConfig from "@/i18nConfig";

// Components
const Navbar = dynamic(() => import("@/app/components/navbar/navbar"), {
  ssr: true,
  loading: () => <div className="h-16" />, // Placeholder height
});

const Footer = dynamic(() => import("@/app/components/footer/footer"), {
  ssr: true,
});

// assets
import WavesImage from "@/app/components/icons/wavesImage";

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

  // await new Promise((resolve) => setTimeout(resolve, 2500));

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${playfair.variable} bg-white dark:bg-gray-900 min-h-fit max-w-[100vw] overflew-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <InitialLoader />
          <main
            className="min-h-screen flex flex-col w-full"
            id="main-content"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <Navbar params={{ locale }} />
            {children}
            <Footer params={{ locale }} />
            <WavesImage className="z-[-5] fixed left-0 right-0 bottom-0 fill-sky-100 dark:fill-[#1F7BF6]/5" />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
