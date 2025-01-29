// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components common
import SectionTitle from "@/app/components/common/section-title";

// components tech

import SectionDescription from "@/app/components/common/section-description";

export default async function TechSection({
  params: { locale },
  className,
  id,
}: LocalProps & {
  className?: string;
  id: string;
}) {
  const { t } = await getTranslations(locale as string);

  return (
    <section
      id={id}
      className={cn("w-screen !overflow-hidden", className)}
      style={{
        width: "calc(100vw - 10px)",
      }}
    >
      <SectionTitle
        className="mb-2 max-sm:text-2xl"
        title={t("fields.projects.title")}
      />

      <SectionDescription
        text={t("fields.projects.description")}
        className="md:pb-10 pb-5 text-center lg:max-w-[50%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
      />
    </section>
  );
}
