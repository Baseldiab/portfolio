"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// lib
import { cn } from "@/lib/utils";

interface ImageHoverProps {
  className?: string;
  imageClassName?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImageHover({
  className,
  imageClassName,
  src,
  alt,
  width,
  height,
}: ImageHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.figure
      className={cn(
        "relative w-full max-w-xs overflow-hidden rounded-lg border border-theme-border-main dark:border-theme-border-dark",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      initial={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        style={{ y: "0%" }}
        animate={{
          y: isHovered ? "-55%" : "0%",
          filter: isHovered ? "brightness(1)" : "brightness(0.8)",
        }}
        transition={{
          y: {
            type: "spring",
            stiffness: 25,
            damping: 10,
            mass: 2,
            delay: 0.3,
          },
          filter: {
            duration: 0.2,
            ease: "easeOut",
            delay: 0,
          },
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={cn("w-full h-auto", imageClassName)}
        />
      </motion.div>
    </motion.figure>
  );
}
