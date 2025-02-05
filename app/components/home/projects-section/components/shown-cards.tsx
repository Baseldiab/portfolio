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
      className={cn(
        "flex flex-col lg:gap-14 md:gap-12 gap-6 mt-4",
        "md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
      )}
    >
      {HomeProjects.map((item, index) => (
        <div
          key={`home-project-${item.id}`}
          className=" flex md:even:flex-row-reverse max-md:flex-col justify-center items-start md:gap-10 gap-5 max-md:border border-theme-border-main p-4 rounded-xl"
        >
          <ComeFromSidesAnimation
            className=" max-md:mx-auto md:basis-2/3"
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
            className="flex flex-col items-start  md:basis-1/3"
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
      <div className="flex items-center p-1 justify-center size-fit bg-sky-300 ">
        <h3 className="text-5xl font-karla  font-normal text-gray-950">
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
      <p className="sm:text-base text-sm font-medium font-karla  dark:text-gray-400">
        {project.description[locale]}
      </p>

      <div className="flex justify-start items-center flex-wrap gap-2">
        {project.tech.map((item) => (
          <Badge
            key={`project-${item}-${project.id}`}
            className="min-w-fit text-theme-text-dark/90 dark:bg-theme-background-secondDark dark:text-white uppercase md:text-sm  text-xs font-normal"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};
