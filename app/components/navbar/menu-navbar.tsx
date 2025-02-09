"use client";

// next imports
import Link from "next/link";

// hooks
import { useTranslations } from "@/app/components/hooks/useTranslation";
import { useEffect, useRef } from "react";

// framer-motion imports
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

// lib
import { cn } from "@/lib/utils";

// interfaces
import { NavbarMenu } from "@/app/components/interfaces/navbar";

// constants
import { navbarMenuArray } from "@/app/components/constants/navbar-menu";

// Components navbar
import { Menu, X } from "lucide-react";

interface MenuNavbarProps {
  className?: string;
  locale: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MenuNavbar({
  className,
  locale,
  isOpen,
  setIsOpen,
}: MenuNavbarProps) {
  return (
    <div className={cn("", className)}>
      {/* Mobile Menu Button */}
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <MobileNav
        locale={locale}
        navItems={navbarMenuArray}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </div>
  );
}

const MenuButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const iconVariants: Variants = {
    open: { rotate: 90, scale: 1 },
    closed: { rotate: 0, scale: 1 },
  };

  const transition = {
    duration: 0.2,
    ease: "easeInOut",
  };

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center justify-center p-1 rounded-md text-gray-800 dark:text-gray-100"
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={iconVariants}
        transition={transition}
      >
        {isOpen ? (
          <X className="block sm:size-6 size-4" aria-hidden="true" />
        ) : (
          <Menu className="block sm:size-6 size-4" aria-hidden="true" />
        )}
      </motion.div>
    </button>
  );
};

interface MobileNavigationProps {
  navItems: NavbarMenu[];
  isOpen: boolean;
  locale: string;
  setIsOpen: (isOpen: boolean) => void;
}
const MobileNav = ({
  navItems,
  isOpen,
  locale,
  setIsOpen,
}: MobileNavigationProps) => {
  const { t } = useTranslations(locale as string);
  const menuRef = useRef<HTMLUListElement>(null);

  const menuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <motion.ul
      ref={menuRef}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={cn(
        "container absolute top-full left-0 right-0 bg-gray-50 dark:bg-slate-950 shadow-xl",
        "border border-grey-200 dark:border-grey-200",
        "flex flex-col gap-0",
        !isOpen && "pointer-events-none"
      )}
    >
      {navItems.map((item) => (
        <li
          key={item.text}
          className=""
        >
          <Link
            href={item.link}
            className={`font-medium default-text py-3 sm:px-8 px-6 w-full h-full block`}
            onClick={() => setIsOpen(false)}
          >
            {t(item.text)}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};
