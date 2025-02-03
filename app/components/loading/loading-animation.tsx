"use client";

import { useEffect, useState } from "react";

// React query

// Components loading
import Typing from "@/app/components/loading/typing";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show main content
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";
      }
    }, 2500);

    // Hide main content initially
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.style.opacity = "0";
      mainContent.style.visibility = "hidden";
    }

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Typing />
    </div>
  );
}
