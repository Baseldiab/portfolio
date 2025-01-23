"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// components home
import SectionTitle from "@/app/components/common/section-title";
import RotateName from "@/app/components/home/contact-section/rotateName";

export default function MarqeeTitle({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-60 overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Duplicate content to create seamless loop */}
        <div className="flex min-w-full">
          <RotateName className="mx-3" />
          <SectionTitle className="mx-2 text-[6.4vw]" title={title} />
        </div>
      </motion.div>
    </div>
  );
}
