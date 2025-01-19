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

  console.log("Current locale:", locale);
  console.log("Translation test:", t("navigation.home"));

  return (
    <nav className=" w-full max-h-fit  py-4 z-50">
      <ul className="flex justify-end gap-8 text-red-500">
        {navbarMenuArray.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              onClick={() => setActiveSection(item.id)}
              className={clsx(
                "hover:underline text-red-500",
                activeSection === item.id && "text-accent"
              )}
            >
              {t(item.text)}
            </Link>
          </li>
        ))}

        <li>
          <ThemeToggle />
        </li>
        <li>
          <LanguageToggle params={{ locale }} />
        </li>
        <li>
          <MenuNavbar />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
