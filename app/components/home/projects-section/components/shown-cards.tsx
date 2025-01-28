"use client";

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

export default function ShownCards() {
  return (
    <article dir="ltr" className={cn("flex flex-col gap-4 my-3", "w-full")}>
      <div className="container flex md:even:flex-row-reverse max-md:flex-col max-md:even:flex-col-reverse md:justify-start md:even:justify-end justify-center items-start max-h-[350px]  md:gap-10 gap-5">
        <ComeFromSidesAnimation className=" md:basis-1/2" direction="left">
          <ImageHover
            src={HomeProjects[0].image}
            alt={HomeProjects[0].title}
            width={1000}
            height={1000}
            className=" !max-h-[350px] overflow-hidden !flex-1"
          />
        </ComeFromSidesAnimation>
        <ComeFromSidesAnimation className="flex flex-col items-start md:basis-1/2">
          <ProjectHeader index={0} project={HomeProjects[0]} />
          <ProjectContent project={HomeProjects[0]} />
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
}
const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="flex justify-between items-start w-full">
      <h4 className="text-5xl font-karla  font-semibold text-white"></h4>
      <BreathAnimation>
        <Link href={project.href as string} target="_blank">
          <ExternalLink className="size-8 text-theme-text-main dark:text-theme-text-dark" />
        </Link>
      </BreathAnimation>
    </div>
  );
};
