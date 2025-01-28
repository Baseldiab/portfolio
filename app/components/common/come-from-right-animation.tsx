"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ComeFromRightAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "right" | "left";
}

export default function ComeFromRightAnimation({
  children,
  className = "",
  delay = 0,
  direction = "right",
}: ComeFromRightAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    right: {
      initial: {
        x: "100%",
        rotate: -5,
        scale: 0.95,
        opacity: 0,
        originX: 1,
        originY: 0.5,
      },
      animate: {
        x: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        originX: 1,
        originY: 0.5,
      },
    },
    left: {
      initial: {
        x: "-100%",
        rotate: 5,
        scale: 0.95,
        opacity: 0,
        originX: 0,
        originY: 0.5,
      },
      animate: {
        x: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        originX: 0,
        originY: 0.5,
      },
    },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={variants[direction].initial}
        animate={
          isInView ? variants[direction].animate : variants[direction].initial
        }
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
          scale: { duration: 1.4 },
        }}
        className={"w-full"}
      >
        {children}
      </motion.div>
    </div>
  );
}
