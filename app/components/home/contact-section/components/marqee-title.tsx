"use client";

import React, { memo } from "react";
import Marquee from "react-fast-marquee";

//
import SectionTitle from "@/app/components/common/section-title";
import RotateName from "@/app/components/home/contact-section/components/rotateName";

const MarqueeTitle = memo(
  ({ title, locale }: { title: string; locale: string }) => {
    return (
      <Marquee
        speed={100}
        className="!p-0 !m-0"
        gradient={false}
        autoFill
        direction={locale === "ar" ? "left" : "right"}
      >
        <RotateName
          className={`mx-2 ${locale === "ar" ? "rotate-180" : ""}`}
          btnClassName="!bg-gradient-to-r to-[#00E5DA] from-[#1F7BF6] dark:to-[#00E5DA] dark:from-[#1F7BF6] hover:!bg-black dark:hover:!bg-white min-h-fit"
          btnCircleClassName="!text-[#1F7BF6]"
        />
        <SectionTitle
          className="mx-3 text-[4.4vw] max-sm:text-xl"
          title={title}
        />
      </Marquee>
    );
  },
  (prevProps, nextProps) => prevProps.title === nextProps.title
);

MarqueeTitle.displayName = "MarqueeTitle";

export default MarqueeTitle;
