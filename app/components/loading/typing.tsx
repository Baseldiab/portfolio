"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "...", // Types 'One'
        500, // Waits 1s
        "Basel Diab", // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        "Basel Diab Frontend developer", // Types 'Three' without deleting 'Two'
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="!text-black dark:!text-white text-3xl font-bold font-playfair"
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
}
