import { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";
import { LocalProps } from "@/app/components/interfaces/local.props.interface";
import getTranslations from "@/app/i18n";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(
    locale,
    "messages.not-found",
    "messages.not-found-msg"
  );
}

export default async function NotFound({ params: { locale } }: LocalProps) {
  const { t } = await getTranslations(locale as string);

  return (
    <div className="relative text-center py-[6rem]">
      <h3 className="lg:text-7xl text-center md:text-5xl text-4xl w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase">
        {t("messages.not-found")}
      </h3>
      <h2 className="lg:text-[18rem] text-center w-full md:text-[14rem] text-[11rem] text-secondary">
        404
      </h2>
      <p className="text-center text-SecondaryText">
        {t("messages.not-found-msg")}
      </p>
    </div>
  );
}
