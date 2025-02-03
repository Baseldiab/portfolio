"use client";

import { useEffect, useState } from "react";

// React query
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Components loading
import Typing from "@/app/components/loading/typing";

export default function InitialLoader() {
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const {} = useQuery({
    queryKey: ["isFirstLoading"],
  });

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.style.visibility = "visible";
        mainContent.style.opacity = "1";
      }
      return;
    }

    queryClient.setQueryData(["isFirstLoading"], true);

    // Hide main content initially with smooth transition setup
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.style.opacity = "0";
      mainContent.style.transition = "opacity 0.5s ease-in-out";
      mainContent.style.visibility = "hidden";
    }

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setOpacity(0);

      setTimeout(() => {
        if (mainContent) {
          mainContent.style.visibility = "visible";
          mainContent.style.opacity = "1";
        }

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 300);
      }, 200);
    }, 1000);

    // Set visited flag
    sessionStorage.setItem("hasVisited", "true");

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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-theme-background-main dark:bg-theme-background-dark"
      style={{
        opacity,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Typing />
    </div>
  );
}
