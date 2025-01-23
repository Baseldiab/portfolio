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
        className="flex gap-2 overflow-hidden whitespace-nowrap max-w-[100vw]"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Duplicate content to create seamless loop */}
        <div className="flex   items-center">
          <RotateName className="mx-3" />
          <SectionTitle className="mx-2 text-[6.4vw]" title={title} />
        </div>
      </motion.div>
    </div>
  );
}
