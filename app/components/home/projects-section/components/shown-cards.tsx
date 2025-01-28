"use client";

import Image from "next/image";

// lib
import { cn } from "@/lib/utils";

// constants
import { HomeProjects } from "@/app/components/constants/home-projects";

// icons
import { ExternalLink } from "lucide-react";

// interfaces
// import { Project } from "@/app/components/interfaces/project";

export default function ShownCards() {
  return (
    <article className={cn("flex flex-col gap-4", "w-full")}>
      <div className="container">
        <Image
          src={HomeProjects[0].image}
          alt={HomeProjects[0].title}
          width={400}
          height={400}
          className="!max-w-2/3 !max-h-400px"
        />
        <div className="flex flex-col items-start w-full">
          <ProjectHeader index={0} />
        </div>
      </div>
    </article>
  );
}

interface ProjectHeaderProps {
  index: number;
}
const ProjectHeader = ({ index }: ProjectHeaderProps) => {
  return (
    <div className="flex justify-between items-start">
      <h5 className="text-2xl size-2 bg-red-500">{index + 1}</h5>
      <ExternalLink className="size-5 text-theme-text-main dark:text-theme-text-dark" />
    </div>
  );
};
