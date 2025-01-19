"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center bg-theme-background-main text-theme-text-main dark:bg-theme-background-dark dark:text-theme-text-dark"
    >
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {"  Ahmed's Portfolio"}
      </motion.h1>
      <motion.p
        className="text-lg mt-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Frontend Developer | React | Next.js | Tailwind CSS
      </motion.p>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="btn">View Projects</button>
        <button className="btn">Download Resume</button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
