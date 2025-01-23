"use client";

import React, { memo } from "react";
import Marquee from "react-fast-marquee";

//
import SectionTitle from "@/app/components/common/section-title";
import RotateName from "@/app/components/home/contact-section/rotateName";

const MarqueeTitle = memo(
  ({ title }: { title: string }) => {
    return (
      <Marquee speed={100} className="w-screen" gradient={false} autoFill>
        <RotateName
          className="mx-3"
          btnClassName="!bg-gradient-to-r to-[#00E5DA] from-[#1F7BF6] dark:to-[#00E5DA] dark:from-[#1F7BF6] hover:!bg-black dark:hover:!bg-white"
          btnCircleClassName="!text-[#1F7BF6]"
        />
        <SectionTitle className="mx-2 text-[6.4vw]" title={title} />
      </Marquee>
    );
  },
  (prevProps, nextProps) => prevProps.title === nextProps.title
);

MarqueeTitle.displayName = "MarqueeTitle";

export default MarqueeTitle;
