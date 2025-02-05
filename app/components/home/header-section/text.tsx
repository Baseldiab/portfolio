"use client";

// Next
import Link from "next/link";

//  components common
import RevealAnimation from "@/app/components/common/reveal-animation";
// import DragConstraints from "@/app/components/common/drag-constranints-animation";
import MainButton from "@/app/components/common/main-button";
import SecondaryButton from "@/app/components/common/secondary-button";
import SectionDescription from "@/app/components/common/section-description";

// Constants
import { resumeLink } from "@/app/components/constants/resume-link";

// React query
import React from "react";

interface TextProps {
  firstText: string;
  secondText: string;
  thirdText: string;
  description: string;
  contact: string;
  resume: string;
}

export default function Text({
  firstText,
  secondText,
  thirdText,
  description,
  contact,
  resume,
}: TextProps) {
  // const { data: isFirstLoading } = useQuery({
  //   queryKey: ["isFirstLoading"],
  //   queryFn: async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 2200)); // 2.2 second delay
  //     return false;
  //   },
  //   initialData: true, // Start with true
  // });

  return (
    <article className="relative z-[2] lg:py-20 md:py-12 pb-8 pt-6">
      <div className="container flex flex-col gap-2 items-start">
        <RevealAnimation delay={0.2}>
          <h6 className="sm:text-xl text-lg font-medium font-karla text-theme-text-second">
            {firstText}
          </h6>
        </RevealAnimation>

        <RevealAnimation className="h-fit my-2" delay={0.2}>
          <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold font-karla uppercase min-h-fit  leading-normal text-gradient my-1">
            {secondText}.
          </h1>
          <p className="lg:text-5xl md:text-4xl sm:text-2xl text-xl font-semibold leading-normal font-playfair uppercase sm:my-3 my-1 mix-blend-lighten dark:mix-blend-darken">
            {thirdText}
          </p>
        </RevealAnimation>

        <RevealAnimation className="max-w-[500px]" delay={0.2}>
          <SectionDescription text={description} />
        </RevealAnimation>

        <RevealAnimation className="md:mt-7 mt-4" delay={0.2}>
          <div className="flex justify-start items-center gap-4 max-sm:flex-wrap ">
            <MainButton>{contact}</MainButton>

            <SecondaryButton href={resumeLink} as={Link}>
              {resume}
            </SecondaryButton>
          </div>
        </RevealAnimation>
      </div>
    </article>
  );
}
