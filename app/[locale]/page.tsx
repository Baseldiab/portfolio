// Next
import { Metadata } from "next";

// Translation
// import getTranslations from "@/app/i18n";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// Components
import HeroSection from "@/app/components/home/header-section/header-section";

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

export default async function Home({ params: { locale } }: LocalProps) {
  // Add artificial delay
  

  // const { t } = await getTranslations(locale as string);

  return (
    <>
      <HeroSection params={{ locale }} />
    </>
  );
}
