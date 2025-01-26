"use client";

import React, { memo } from "react";
import Marquee from "react-fast-marquee";

// lib
import { cn } from "@/lib/utils";

// icons
import { ArrowUpRight } from "lucide-react";

interface MarqueeItemLinkProps {
  href: string;
  title: string;
  className?: string;
}
const MarqueeItemLink = memo(
  ({ href, title, className }: MarqueeItemLinkProps) => {
    return (
      <>
        <div
          className={cn(
            "contact_marquee_link",
            "!py-5 border-y border-theme-border-main dark:border-theme-border-dark group min-h-20 flex justify-center items-center",
            "relative hover:dark:bg-white/10 hover:bg-black    overflow-hidden", // for hover change color
            className
          )}
        >
          {/* Top part of the hover effect */}
          <div className="absolute inset-0 bg-white dark:bg-theme-background-dark transform scale-y-50 origin-bottom group-hover:scale-y-0 transition-transform duration-500" />

          {/* Bottom part of the hover effect */}
          <div className="absolute inset-0 bg-white dark:bg-theme-background-dark transform scale-y-50 origin-top group-hover:scale-y-0 transition-transform duration-500" />

          {/* the marquee happend on hover the parent div only shown on hover */}
          <Marquee
            speed={100}
            className="!p-0 !m-0 !hidden group-hover:!flex duration-150"
            gradient={false}
            autoFill
          >
            <MarqueeText href={href} title={title} />
          </Marquee>

          {/* text shown at first before hover  */}
          <MarqueeText
            href={href}
            title={title}
            className={cn(
              "group-hover:!hidden !justify-between !text-start ps-8",
              "xl:px-[5%] max-px-[calc(100vw-1300px)/2] sm:px-[7.5%] px-[5%] mx-0"
            )}
          />
        </div>
      </>
    );
  },
  (prevProps, nextProps) => prevProps.title === nextProps.title
);

MarqueeItemLink.displayName = "MarqueeItemLink";

export default MarqueeItemLink;

const MarqueeText = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        " !mx-3 flex justify-center items-center gap-2 lg:text-3xl md:xl sm:text-lg text-base text-theme-text-main dark:text-theme-text-dark",
        "relative z-10 h-full w-full group-hover:text-white",
        className
      )}
    >
      {title}

      <ArrowUpRight className="sm:size-7 lg:size-8 size-4" />
    </a>
  );
};
