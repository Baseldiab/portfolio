"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function MenuNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  const menuItems = ["home", "about_me", "projects", "contact_me"];

  return (
    <div className="">
      {" "}
      {/* Only show on mobile */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="relative"
      >
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-theme-background-dark/50 dark:bg-theme-background-main/50 z-40"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
          />
        )}
        <motion.div
          className="fixed right-0 top-0 h-full w-[300px] bg-white dark:bg-black border-l z-50 shadow-xl"
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <Navigation items={menuItems} />
        </motion.div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </motion.nav>
    </div>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ items }: { items: string[] }) => {
  const { t } = useTranslation("navigation");

  return (
    <motion.ul className="pt-20 px-6" variants={navVariants}>
      {items.map((item) => (
        <MenuItem key={item} item={item} label={t(item)} />
      ))}
    </motion.ul>
  );
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ item, label }: { item: string; label: string }) => {
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-4"
    >
      <Link
        href={`/#${item}`}
        className="text-theme-text-main dark:text-theme-text-dark hover:text-foreground text-lg font-medium"
      >
        {label}
      </Link>
    </motion.li>
  );
};

const backdropVariants = {
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      delay: 2,
    },
  },
  closed: {
    opacity: 1,
    transition: {
      restDelta: 2,
      delay: 2,
      type: "spring",
      stiffness: 20,
      //   damping: 20,
    },
  },
};

const sidebarVariants = {
  open: {
    x: 0,
    y: "0",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 100,
    },
  },
  closed: {
    x: "100%",
    y: "-100%",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

/**
 * ==============   Styles   ================
 */

const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
};

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
