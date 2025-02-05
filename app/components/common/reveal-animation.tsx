"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealAnimation({
  children,
  className = "",
  delay = 0,
}: RevealAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3, // Triggers when 30% of the element is in view
  });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={"w-full"}
      >
        {children}
      </motion.div>
    </div>
  );
}
