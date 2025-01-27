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
      <SectionTitle title={t("fields.projects.title")} />

      <ShownCards />
    </section>
  );
}
