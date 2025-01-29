"use client";

import { useEffect, useState } from "react";
import TypingLoader from "./typing";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Hide main content initially with smooth transition setup
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.style.opacity = "0";
      mainContent.style.transition = "opacity 1s ease-in-out";
      mainContent.style.visibility = "hidden"; // Hide initially
    }

    document.body.style.overflow = "hidden";

    // Minimum loading time
    const timer = setTimeout(() => {
      // Start fade out of loader
      setOpacity(0);

      // Show main content after loader starts fading
      setTimeout(() => {
        if (mainContent) {
          mainContent.style.visibility = "visible"; // Make visible before fade
          // Small delay before starting fade in
          setTimeout(() => {
            mainContent.style.opacity = "1";
          }, 50);
        }

        // Additional delay before removing loader completely
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 700);
      }, 500);
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      if (mainContent) {
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
        opacity: opacity,
        transition: "opacity 1s ease-in-out",
      }}
      className="fixed inset-0 z-[9999] flex justify-center items-center bg-theme-background-main/90 dark:bg-theme-background-dark/90"
    >
      <div className="transform scale-110">
        <TypingLoader />
      </div>
    </div>
  );
}
