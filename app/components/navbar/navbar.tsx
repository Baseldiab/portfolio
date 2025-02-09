"use client";

import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

// utils
import ThemeToggle from "@/app/utils/theme_toggle";
import LanguageToggle from "@/app/utils/lang_toggle";

// components
import MenuNavbar from "@/app/components/navbar/menu-navbar";
import Logo from "@/app/components/common/logo";

// types
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// constants
import { navbarMenuArray } from "@/app/components/constants/navbar-menu";

// hooks
import { useTranslations } from "@/app/components/hooks/useTranslation";

const Navbar = ({ params: { locale } }: LocalProps) => {
  const { t } = useTranslations(locale as string);

  // state
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className=" sticky sm:top-8 top-5 left-0 right-0  z-50 ">
      <div
        className={cn(
          "flex justify-between items-center container md:py-4 py-2 sm:px-8 px-6 bg-white dark:bg-slate-950  shadow-lg border ",
          "border-grey-200 dark:border-grey-200",
          isOpen ? "rounded-t-3xl lg:rounded-full" : "rounded-full"
        )}
      >
        <Logo />

        {/* desktop menu */}
        <ul className="flex justify-end items-end gap-8 max-lg:hidden">
          {navbarMenuArray.map((item) => (
            <li key={item.id} className="!p-0 !m-0">
              <Link
                href={item.link}
                onClick={() => {
                  if (item.link === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={cn(
                  "hover:underline hover:underline-offset-2 capitalize font-normal",
                  "main-text"
                )}
              >
                {t(item.text)}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className="flex justify-end items-center gap-2">
          <ThemeToggle />

          <LanguageToggle params={{ locale }} />

          <MenuNavbar
            locale={locale as string}
            className={`lg:hidden`}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
