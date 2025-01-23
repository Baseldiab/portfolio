// Next
import { Metadata } from "next";

// Translation
// import getTranslations from "@/app/i18n";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// layout
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";

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

export default async function OthersPage({ params: { locale } }: LocalProps) {
  // Add artificial delay

  // const { t } = await getTranslations(locale as string);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="flex flex-col gap-10 min-h-screen">
      <Navbar params={{ locale }} />

      <main className="flex-1 flex-grow flex flex-col gap-16 items-center sm:items-start lg:my-16 md:my-8 sm:my-4 h-full"></main>

      <Footer params={{ locale }} />
    </main>
  );
}
