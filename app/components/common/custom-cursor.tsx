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
    <div className="hidden md:block">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        innerScale={1}
        outerScale={3}
        outerAlpha={0.3}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "transparent",
          cursor: "default",
        }}
        outerStyle={{
          backgroundColor: "#ffffff",
          border: "5px solid #ffffff",
          mixBlendMode: "difference",
        }}
        clickables={[
          ".contact_marquee_link",
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          "input[type='submit']",
          "input[type='image']",
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            outerSize: 20,
            outerAlpha: 0.3,
            outerScale: 5,
          },
        ]}
      />
    </div>
  );
}
