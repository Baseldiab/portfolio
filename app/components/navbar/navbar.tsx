"use client";

import { useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";

// components
import ThemeToggle from "@/app/components/theme/theme_toggle";
import LanguageToggle from "@/app/components/language/lang_toggle";
import MenuNavbar from "@/app/components/navbar/menu-navbar";

// types
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// framer motion
import { motion } from "framer-motion";

// constants
import { navbarMenuArray } from "@/app/components/constants/navbar-menu";
import { useTranslations } from "../hooks/useTranslation";

const Navbar = ({ params: { locale } }: LocalProps) => {
  const { t } = useTranslations(locale as string);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav className=" sticky sm:top-8 top-5 left-0 right-0  z-50 ">
      <div className="flex justify-between items-center container py-4 px-8 bg-theme-background-main dark:bg-theme-background-dark rounded-full shadow-2xl border border-grey-200 dark:border-grey-200">
        <Link href="/" className="text-base md:text-xl  uppercase">
          <motion.div
            whileHover={{
              scale: 1.3, // Scale the letter up
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <span className="!underline underline-offset-2 text-3xl font-extrabold text-gradient hover:!scale-150">
              {"b"}
            </span>
            <span className="font-bold">{"asel "}</span>
            <span className="font-bold">{"Diab"}</span>
            {/* <span className="font-bold">{"iab"}</span> */}
          </motion.div>
        </Link>
        <ul className="flex justify-end items-end gap-8 text-theme-text-main dark:text-theme-text-dark font-bold text-base md:text-xl max-lg:hidden">
          {navbarMenuArray.map((item) => (
            <li key={item.id} className="!p-0 !m-0 ">
              <Link
                href={item.link}
                onClick={() => setActiveSection(item.id)}
                className={clsx(
                  "hover:underline  uppercase",
                  activeSection === item.id &&
                    "text-accent text-gradient dark:text-gradient"
                )}
              >
                {t(item.text)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center gap-2">
          <ThemeToggle />

          <LanguageToggle params={{ locale }} />

          <MenuNavbar className="lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
