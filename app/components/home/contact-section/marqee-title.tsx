"use client";

import React, { memo, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

//
import SectionTitle from "@/app/components/common/section-title";
import RotateName from "@/app/components/home/contact-section/rotateName";

const MarqueeTitle = memo(
  ({ title }: { title: string }) => {
    const [repeat, setRepeat] = useState(1);

    useEffect(() => {
      // Calculate how many items we need based on viewport width
      const calculateRepeat = () => {
        const viewportWidth = window.innerWidth;
        // Assuming each item is roughly 300px wide, add extra items for smooth scrolling
        const itemsNeeded = Math.ceil(viewportWidth / 300) + 2;
        setRepeat(itemsNeeded);
      };

      calculateRepeat();
      window.addEventListener("resize", calculateRepeat);

      return () => window.removeEventListener("resize", calculateRepeat);
    }, []);

    return (
      <Marquee speed={100} className="overflow-hidden" gradient={false}>
        {Array(repeat)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex items-center">
              <RotateName className="mx-3" />
              <SectionTitle className="mx-2 text-[6.4vw]" title={title} />
            </div>
          ))}
      </Marquee>
    );
  },
  (prevProps, nextProps) => prevProps.title === nextProps.title
);

MarqueeTitle.displayName = "MarqueeTitle";

export default MarqueeTitle;
