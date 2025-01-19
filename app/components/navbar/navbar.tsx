"use client";

import { useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import ThemeToggle from "@/app/components/theme/theme_toggle";
import LanguageToggle from "@/app/components/language/lang_toggle";
import { LocalProps } from "@/app/components/interfaces/local.props.interface";
import MenuNavbar from "./menu-navbar";

const Navbar = ({ params: { locale } }: LocalProps) => {
  const [activeSection, setActiveSection] = useState("home");

  const NavbarArray = ["home", "projects", "contact"];

  return (
    <nav className=" w-full max-h-fit  py-4 z-50">
      <ul className="flex justify-end gap-8 text-red-500">
        {NavbarArray.map((section) => (
          <li key={section}>
            <Link
              href={`/#${section}`}
              onClick={() => setActiveSection(section)}
              className={clsx(
                "hover:underline text-red-500",
                activeSection === section && "text-accent"
              )}
            >
              {section.toUpperCase()}
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
