"use client";

import { useEffect, useState } from "react";

// React query

// Components loading
import Typing from "./typing";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document
        .getElementById("main-content")
        ?.style.setProperty("opacity", "1");
      document
        .getElementById("main-content")
        ?.style.setProperty("visibility", "visible");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Typing />
    </div>
  );
}
