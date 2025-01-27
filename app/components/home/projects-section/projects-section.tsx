import React from "react";

// lib
import { cn } from "@/lib/utils";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components projects
import ShownCards from "@/app/components/home/projects-section/components/shown-cards";

export default function ProjectsSection({
  params: { locale },
  className,
}: LocalProps & {
  className?: string;
}) {
  return (
    <section
      id="projects"
      className={cn("w-screen !overflow-hidden", className)}
      style={{
        width: "calc(100vw - 10px)",
      }}
    >
      <ShownCards />
    </section>
  );
}
