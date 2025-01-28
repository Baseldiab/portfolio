"use client";

import Image from "next/image";
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

export default function ShownCards() {
  return (
    <article className={cn("flex flex-col gap-4 my-3", "w-full")}>
      <div className="container flex justify-start items-start max-h-400px  gap-6">
        <Image
          src={HomeProjects[0].image}
          alt={HomeProjects[0].title}
          width={400}
          height={400}
          className="!max-w-2/3 !max-h-400px flex-1"
        />
        <div className="flex flex-col items-start w-full">
          <ProjectHeader index={0} project={HomeProjects[0]} />
        </div>
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
