"use client";

import { motion } from "framer-motion";

// Utils
import { cn } from "@/lib/utils";

interface BreathAnimationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BreathAnimation({
  className,
  children,
}: BreathAnimationProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={cn("w-full h-full bg-red-500", className)}
    >
      {children}
    </motion.div>
  );
}
