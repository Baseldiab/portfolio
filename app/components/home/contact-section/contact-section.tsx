// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components common
import SectionTitle from "@/app/components/common/section-title";
import SectionDescription from "@/app/components/common/section-description";
import RevealAnimation from "@/app/components/common/reveal-animation";

// components home

// common

export default async function ContactSection({
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
      <RevealAnimation className="container">
        <SectionTitle
          className="mb-2 max-sm:text-2xl"
          title={t("fields.contact.title")}
        />

        <SectionDescription
          text={t("fields.contact.description")}
          className="md:pb-10 pb-5 text-center lg:max-w-[55%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
        />
      </RevealAnimation>
    </section>
  );
}
