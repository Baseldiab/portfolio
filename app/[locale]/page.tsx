// Next
import { Metadata } from "next";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// layout
import Navbar from "@/app/components/navbar/navbar";

// Components
import Footer from "@/app/components/footer/footer";

// components home
import HeaderSection from "@/app/components/home/header-section/header-section";
import ContactSection from "@/app/components/home/contact-section/contact-section";

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

export default async function HomePage({ params: { locale } }: LocalProps) {
  // Add artificial delay

  // const { t } = await getTranslations(locale as string);

  await new Promise((resolve) => setTimeout(resolve, 3500));

  return (
    <main className="flex flex-col gap-10 min-h-screen">
      <Navbar params={{ locale }} />

      <main className="flex-1 flex-grow flex flex-col gap-16 items-center sm:items-start lg:my-16 md:my-8 sm:my-4 h-full">
        <HeaderSection params={{ locale }} />
        <ContactSection params={{ locale }} />
      </main>

      <Footer params={{ locale }} />
    </main>
  );
}
