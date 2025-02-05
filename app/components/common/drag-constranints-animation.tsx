"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";

interface DragConstraintsProps {
  containerClassName?: string;
  boxClassName?: string;
  children?: React.ReactNode;
}

export default function DragConstraints({
  containerClassName,
  boxClassName,
  children,
}: DragConstraintsProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={constraintsRef} className={cn("", containerClassName)}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        className={cn("", boxClassName)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

// const constraints = {
//   width: 300,
//   height: 300,
//   backgroundColor: "var(--hue-1-transparent)",
//   borderRadius: 10,
// };

// const box = {
//   width: 100,
//   height: 100,
//   backgroundColor: "#ff0088",
//   borderRadius: 10,
// };
