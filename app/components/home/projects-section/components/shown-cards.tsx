/* eslint-disable @typescript-eslint/no-explicit-any */

import getTranslations from "@/app/i18n";
import Link from "next/link";

// lib
import { cn } from "@/lib/utils";

// constants
import { HomeProjects } from "@/app/components/constants/home-projects";

// icons
import { ExternalLink } from "lucide-react";

// interfaces
import { Project } from "@/app/components/interfaces/project";

// components common
import BreathAnimation from "@/app/components/common/breath-animation";
import ImageHover from "@/app/components/common/image-hover";
import ComeFromSidesAnimation from "@/app/components/common/come-from-right-animation";
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

export default async function ShownCards({ params: { locale } }: LocalProps) {
  const { t } = await getTranslations(locale as string);

  return (
    <article dir="ltr" className={cn("flex flex-col gap-4 mt-4", "w-full")}>
      <div className="container flex md:even:flex-row-reverse max-md:flex-col max-md:even:flex-col-reverse md:justify-start md:even:justify-end justify-center items-start max-h-[350px]  md:gap-10 gap-5">
        <ComeFromSidesAnimation className=" md:max-w-[50%]" direction="left">
          <ImageHover
            src={HomeProjects[0].image}
            alt={HomeProjects[0].title}
            width={1000}
            height={1000}
            className=" !max-h-[350px] overflow-hidden !flex-1 w-full"
          />
        </ComeFromSidesAnimation>
        <ComeFromSidesAnimation className="flex flex-col items-start md:max-w-[50%] md:basis-1/2">
          <ProjectHeader index={0} project={HomeProjects[0]} />
          <ProjectContent t={t as any} project={HomeProjects[0]} />
        </ComeFromSidesAnimation>
      </div>
    </article>
  );
}

interface ProjectHeaderProps {
  index: number;
  project: Project;
}
const ProjectHeader = ({ index, project }: ProjectHeaderProps) => {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="flex items-center p-3 justify-center size-fit bg-gradient-to-r from-theme-gradient-mainFrom to-theme-gradient-mainTo">
        <h5 className="text-5xl font-karla  font-semibold text-white">
          0{index + 1}
        </h5>
      </div>
      <BreathAnimation>
        <Link href={project.href as string} target="_blank">
          <ExternalLink className="size-8 text-theme-text-main dark:text-theme-text-dark" />
        </Link>
      </BreathAnimation>
    </div>
  );
};

interface ProjectContentProps {
  project: Project;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}
const ProjectContent = ({ project, t }: ProjectContentProps) => {
  return (
    <div className="flex flex-col justify-between items-start w-full my-4">
      <h4 className="md:text-3xl sm:text-2xl text-xl font-karla  font-semibold text-theme-text-main dark:text-theme-text-dark my-2">
        {project.title}
      </h4>
      <p className="text-xl font-medium font-karla text-theme-text-second">
        {t("fields.header-details")}
      </p>
    </div>
  );
};
