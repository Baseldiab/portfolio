"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor";
export default function CustomCursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={8}
        color="var(--cursor-color)"
        outerAlpha={0.7}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}
