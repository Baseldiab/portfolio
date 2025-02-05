"use client";
import React from "react";

// lib imports imports
import { cn } from "@/lib/utils";

// ui imports
import { Button } from "@/app/components/ui/button";

interface SecondaryButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  as?: React.ElementType;
}

export default function SecondaryButton({
  children,
  className,
  href,
  as: Component = Button,
}: SecondaryButtonProps) {
  return (
    // `[#00E5DA]` from-[#1F7BF6]
    /* From Uiverse.io by AKAspidey01 */
    <Component
      {...(href && { href })}
      className={cn(
        "cursor-pointer font-semibold overflow-hidden relative z-100 border border-theme-border-main dark:border-theme-border-dark group",
        "rounded-3xl",
        "w-32 p-2 h-12",
        "text-center flex justify-center items-center bg-white dark:bg-transparent",
        className
      )}
    >
      <span className="relative z-10 text-theme-text-second dark:text-gray-400 group-hover:text-white text-base font-bold duration-500 text-gradient">
        {children}
      </span>
      <span className="absolute w-full h-full bg-gradient-to-r to-[#00E5DA] from-[#1F7BF6] dark:to-[#00E5DA] dark:from-[#1F7BF6] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
      <span className="absolute w-full h-full bg-gradient-to-r to-[#00E5DA] from-[#1F7BF6] dark:to-[#00E5DA] dark:from-[#1F7BF6] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
    </Component>
  );
}
