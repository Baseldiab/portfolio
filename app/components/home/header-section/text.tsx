"use client";

// Next
import Link from "next/link";

//  components common
// import DragConstraints from "@/app/components/common/drag-constranints-animation";
import MainButton from "@/app/components/common/main-button";
import SecondaryButton from "@/app/components/common/secondary-button";
import SectionDescription from "@/app/components/common/section-description";

// Constants
import { resumeLink } from "@/app/components/constants/resume-link";

// React query
import React from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  firstText: string;
  secondText: string;
  thirdText: string;
  description: string;
  contact: string;
  resume: string;
  className?: string;
}

export default function Text({
  firstText,
  secondText,
  thirdText,
  description,
  contact,
  resume,
  className,
}: TextProps) {
  return (
    <article
      className={cn("relative z-[2] ", className)}
    >
      <div className="container flex flex-col gap-2 items-start">
        <h6 className="sm:text-xl text-base font-medium font-karla secondary-text">
          {firstText}
        </h6>

        <div className="h-fit my-2">
          <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold font-karla uppercase min-h-fit  sm:leading-normal text-gradient my-1">
            {secondText}.
          </h1>
          <p className=" md:text-4xl sm:text-2xl text-xl font-semibold sm:leading-normal font-playfair uppercase sm:my-3 my-1 main-text">
            {thirdText}
          </p>
        </div>

        <div className="max-w-[500px]">
          <SectionDescription text={description} />
        </div>

        <div className="flex justify-start items-center gap-4 max-sm:flex-wrap md:mt-7 mt-4">
          <MainButton>{contact}</MainButton>

          <SecondaryButton href={resumeLink} as={Link}>
            {resume}
          </SecondaryButton>
        </div>
      </div>
    </article>
  );
}
