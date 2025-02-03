import Link from "next/link";

// lib
import { cn } from "@/lib/utils";

// constants
import { HomeProjects } from "@/app/components/constants/home-projects";

// icons
import { ExternalLink } from "lucide-react";

// interfaces
import { Project } from "@/app/components/interfaces/project";
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components common
import BreathAnimation from "@/app/components/common/breath-animation";
import ImageHover from "@/app/components/common/image-hover";
import ComeFromSidesAnimation from "@/app/components/common/come-from-sides-animation";

// components ui
import { Badge } from "@/app/components/ui/badge";

export default async function ShownCards({ params: { locale } }: LocalProps) {
  return (
    <article
      // dir="ltr"
      className={cn("flex flex-col lg:gap-14 md:gap-12 gap-6 mt-4", "w-full")}
    >
      {HomeProjects.map((item, index) => (
        <div
          key={`home-project-${item.id}`}
          className="container flex md:even:flex-row-reverse max-md:flex-col justify-center items-start lg:max-h-[350px] md:gap-10 gap-5 max-md:border border-theme-border-main p-4 rounded-xl"
        >
          <ComeFromSidesAnimation
            className="md:max-w-[50%] max-md:mx-auto"
            direction={
              locale === "ar"
                ? index % 2 === 0
                  ? "right"
                  : "left"
                : index % 2 === 0
                ? "left"
                : "right"
            }
          >
            <ImageHover
              src={item.image}
              alt={item.title}
              width={600}
              height={440}
              className="!max-h-[calc(350px-2rem)] overflow-hidden !flex-1 w-full"
            />
          </ComeFromSidesAnimation>
          <ComeFromSidesAnimation
            className="flex flex-col items-start md:max-w-[50%] md:basis-1/2"
            direction={
              locale === "ar"
                ? index % 2 === 0
                  ? "left"
                  : "right"
                : index % 2 === 0
                ? "right"
                : "left"
            }
          >
            <ProjectHeader index={index} project={item} />
            <ProjectContent locale={locale as "ar" | "en"} project={item} />
          </ComeFromSidesAnimation>
        </div>
      ))}
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
        <h3 className="text-4xl font-karla  font-semibold text-white">
          0{index + 1}
        </h3>
      </div>
      <BreathAnimation>
        <Link
          href={project.href as string}
          target="_blank"
          aria-label={project.title}
        >
          <ExternalLink className="size-8 text-theme-text-main dark:text-theme-text-dark" />
        </Link>
      </BreathAnimation>
    </div>
  );
};

interface ProjectContentProps {
  project: Project;
  locale: "ar" | "en";
}
const ProjectContent = ({ project, locale }: ProjectContentProps) => {
  return (
    <div className="flex flex-col justify-between items-start w-full my-4 gap-4">
      <h4 className="md:text-2xl sm:text-xl text-base font-karla  font-semibold text-theme-text-main dark:text-theme-text-dark">
        {project.title}
      </h4>
      <p className="md:text-lg sm:text-base text-sm font-medium font-karla text-theme-text-second">
        {project.description[locale]}
      </p>

      <div className="flex justify-start items-center flex-wrap gap-2">
        {project.tech.map((item) => (
          <Badge
            key={`project-${item}-${project.id}`}
            className="min-w-fit text-theme-text-dark/90 dark:bg-theme-background-secondDark dark:text-white uppercase lg:text-sm text-xs font-normal"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};
