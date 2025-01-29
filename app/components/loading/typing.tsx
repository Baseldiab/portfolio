"use client";

import React from "react";
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
      className="!text-black dark:!text-white  font-bold font-playfair md:text-4xl sm:text-2xl text-lg"
      style={{ display: "inline-block" }}
    />
  );
}
