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

// constants
import { navbarMenuArray } from "@/app/components/constants/navbar-menu";
import { useTranslations } from "../hooks/useTranslation";

const Navbar = ({ params: { locale } }: LocalProps) => {
  const { t } = useTranslations(locale as string);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav className=" w-full max-h-fit  py-4">
      <div className="flex justify-between items-center container">
        <Link
          href="/"
          className="text-3xl font-extrabold uppercase text-gradient"
        >
          <span className="underline underline-offset-1">{"b"}</span>
          <span className="">{"asel_"}</span>
          <span className="underline underline-offset-1">{"D"}</span>
          <span className="">{"iab"}</span>
        </Link>
        <ul className="flex justify-end gap-8 text-theme-text-main dark:text-theme-text-dark font-bold text-lg max-lg:hidden">
          {navbarMenuArray.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                onClick={() => setActiveSection(item.id)}
                className={clsx(
                  "hover:underline text-theme-text-main dark:text-theme-text-dark uppercase",
                  activeSection === item.id && "text-accent"
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
