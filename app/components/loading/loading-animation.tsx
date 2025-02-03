"use client";

import { useEffect, useState } from "react";

// React query
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Components loading
import TypingLoader from "@/app/components/loading/typing";

export default function InitialLoader() {
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const {} = useQuery({
    queryKey: ["isFirstLoading"],
  });

  useEffect(() => {
    queryClient.setQueryData(["isFirstLoading"], true);

    // Hide main content initially with smooth transition setup
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.style.opacity = "0";
      mainContent.style.transition = "opacity 0.5s ease-in-out";
      mainContent.style.visibility = "hidden"; // Hide initially
    }

    document.body.style.overflow = "hidden";

    // Reduced timing from 2200ms to 1000ms
    const timer = setTimeout(() => {
      // Start fade out of loader
      setOpacity(0);

      // Show main content after loader starts fading
      setTimeout(() => {
        if (mainContent) {
          mainContent.style.visibility = "visible"; // Make visible before fade
          mainContent.style.opacity = "1";
        }

        // Additional delay before removing loader completely
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 300); // Reduced from 700ms
      }, 200); // Reduced from 500ms
    }, 1000); // Reduced from 2200ms

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      if (mainContent) {
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";
      }
    };
  }, [queryClient]);

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
