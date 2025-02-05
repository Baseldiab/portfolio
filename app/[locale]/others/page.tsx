// Next
import { Metadata } from "next";

// Translation
import getTranslations from "@/app/i18n";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

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

  const { t } = await getTranslations(locale as string);

  return (
    <>
      <main className="flex-1 flex-grow flex flex-col gap-16 items-center sm:items-start lg:my-16 md:my-8 sm:my-4 h-full">
        {t("fields.app-name")}
      </main>
    </>
  );
}
