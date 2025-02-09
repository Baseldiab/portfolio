"use client";

import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" rounded-full  text-primary size-4 sm:size-5"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {theme === "dark" ? (
          <Sun className="!size-full text-gray-800 dark:text-gray-100" />
        ) : (
          <Moon className="!size-full text-gray-800 dark:text-gray-100" />
        )}
      </motion.div>
    </motion.button>
  );
}
