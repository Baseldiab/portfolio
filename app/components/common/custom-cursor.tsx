"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={8}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      innerStyle={{
        cursor: "cursor-pointer",
        // backgroundColor: "var(--cursor-color)",
      }}
      outerStyle={{
        backgroundColor: "var(--cursor-color)",
        border: "3px solid var(--cursor-color)",
      }}
    />
  );
}
