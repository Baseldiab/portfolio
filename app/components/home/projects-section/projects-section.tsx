import React from "react";

// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components common
import SectionTitle from "@/app/components/common/section-title";

// components projects
import ShownCards from "@/app/components/home/projects-section/components/shown-cards";
import SectionDescription from "@/app/components/common/section-description";

export default async function ProjectsSection({
  params: { locale },
  className,
}: LocalProps & {
  className?: string;
}) {
  const { t } = await getTranslations(locale as string);

  return (
    <section
      id="projects"
      className={cn("w-screen !overflow-hidden", className)}
      style={{
        width: "calc(100vw - 10px)",
      }}
    >
      <SectionTitle className="mb-2" title={t("fields.projects.title")} />

      <SectionDescription
        text={t("fields.projects.description")}
        className="md:pb-10 pb-5 text-center md:max-w-[70%] lg:max-w-[50%] mx-auto"
      />

      <ShownCards params={{ locale }} />
    </section>
  );
}
