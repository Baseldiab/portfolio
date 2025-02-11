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

// components projects
import ShownCards from "@/app/components/home/projects-section/components/shown-cards";
import Link from "next/link";
import SecondaryButton from "./../../common/secondary-button";

export default async function ProjectsSection({
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
      <RevealAnimation className="container md:pb-10 pb-5">
        <SectionTitle
          className="mb-2 max-sm:text-2xl"
          title={t("fields.projects.title")}
        />

        <SectionDescription
          text={t("fields.projects.description")}
          className=" text-center lg:max-w-[55%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
        />

        {/* <div className="mt-6 h-1 w-14 md:w-16 bg-sky-950 dark:bg-sky-100  text-center mx-auto" /> */}
      </RevealAnimation>

      <ShownCards params={{ locale }} />

      <>
        <SecondaryButton
          className="text-center mx-auto"
          href={"https://github.com/Baseldiab"}
          as={Link}
        >
          {t("fields.button.show_more")}
        </SecondaryButton>
      </>
    </section>
  );
}
