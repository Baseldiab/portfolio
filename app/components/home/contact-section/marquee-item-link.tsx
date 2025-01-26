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
            "relative dark:bg-theme-bg-dark bg-theme-bg-main   overflow-hidden", // for hover change color
            className
          )}
        >
          {/* Top part of the hover effect */}
          <div className="absolute inset-0 dark:!bg-white/5 bg-transparent transform scale-y-50 origin-bottom group-hover:scale-y-0 transition-transform duration-500" />

          {/* Bottom part of the hover effect */}
          <div className="absolute inset-0 dark:!bg-white/5 bg-transparent transform scale-y-50 origin-top group-hover:scale-y-0 transition-transform duration-500" />

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
              "group-hover:!hidden !justify-start !text-start ps-8",
              "xl:ps-[5%] max-ps-[calc(100vw-1300px)/2] sm:ps-[7.5%] ps-[5%] mx-0"
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
        " !mx-3 flex justify-center items-center gap-2 lg:text-2xl md:xl sm:text-lg text-base text-theme-text-main dark:text-theme-text-dark",
        "relative z-10 h-full w-full",
        className
      )}
    >
      {title}

      <ArrowUpRight className="sm:size-5 size-4" />
    </a>
  );
};
