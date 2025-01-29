"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// utils
import ThemeToggle from "@/app/utils/theme_toggle";
import LanguageToggle from "@/app/utils/lang_toggle";

// components
import MenuNavbar from "@/app/components/navbar/menu-navbar";
import Logo from "@/app/components/common/logo";
import BreathAnimation from "@/app/components/common/breath-animation";

// types
import { LocalProps } from "@/app/components/interfaces/local.props.interface";
import { NavbarMenu } from "@/app/components/interfaces/navbar";

// constants
import { navbarMenuArray } from "@/app/components/constants/navbar-menu";

// hooks
import { useTranslations } from "@/app/components/hooks/useTranslation";
import { cn } from "@/lib/utils";

const Navbar = ({ params: { locale } }: LocalProps) => {
  const { t } = useTranslations(locale as string);

  const pathname = usePathname();
  const router = useRouter();

  // Initialize state from localStorage if available, but use useEffect to avoid hydration mismatch
  const [activeSection, setActiveSection] = useState(() => {
    // Default to 'home' during SSR
    if (typeof window === "undefined") return "home";

    // Use stored value if available
    const stored = localStorage.getItem("activeSection");
    return stored || "home";
  });

  // Update active section from localStorage after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedSection = localStorage.getItem("activeSection");
      if (savedSection) {
        setActiveSection(savedSection);
      }
    }
  }, []);

  // Update localStorage when activeSection changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeSection", activeSection);
    }
  }, [activeSection]);

  useEffect(() => {
    if (!pathname.includes("#")) {
      const currentSection = navbarMenuArray.find(
        (item) => pathname === item.link || pathname.endsWith(item.id)
      );
      if (currentSection) {
        setActiveSection(currentSection.id);
        localStorage.setItem("activeSection", currentSection.id);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        const sections = navbarMenuArray
          .filter((item) => item.link.startsWith("#"))
          .map((item) => ({
            id: item.id,
            element: document.querySelector(item.link),
          }));

        const scrollPosition = window.scrollY + 100;

        let foundActiveSection = false;
        for (const section of sections) {
          if (section.element) {
            const element = section.element as HTMLElement;
            const { offsetTop, offsetHeight } = element;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section.id);
              foundActiveSection = true;
              break;
            }
          }
        }

        // Only set to home if we haven't found another active section
        if (!foundActiveSection && scrollPosition < 100) {
          setActiveSection("home");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavbarMenu
  ) => {
    e.preventDefault(); // Prevent default for all clicks

    // If we're not on the home page and trying to access a section
    if (pathname !== "/" && item.link.includes("#")) {
      // First navigate to home page, then scroll to section
      await router.push("/");
      // Wait a bit for the page to load
      setTimeout(() => {
        const element = document.querySelector(item.link.replace("/", ""));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setActiveSection(item.id);
        }
      }, 100);
      return;
    }

    // Handle section scrolling on home page
    if (item.link.includes("#")) {
      const element = document.querySelector(item.link.replace("/", ""));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection(item.id);
      }
      return;
    }

    // Handle home link
    if (item.link === "/") {
      if (pathname === "/") {
        // If already on home page, just scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Navigate to home page
        router.push(item.link);
      }
      setActiveSection(item.id);
      return;
    }

    // Handle other page navigations (like /others)
    router.push(item.link);
    setActiveSection(item.id);
  };

  return (
    <nav className=" sticky sm:top-8 top-5 left-0 right-0  z-50 ">
      <div className="flex justify-between items-center container py-4 sm:px-8 px-6 bg-white dark:bg-theme-background-dark rounded-full shadow-2xl border border-grey-200 dark:border-grey-200">
        <Logo />

        {/* desktop menu */}
        <ul className="flex justify-end items-end gap-8 text-theme-text-main dark:text-theme-text-dark font-bold text-base md:text-xl max-lg:hidden">
          {navbarMenuArray.map((item) => (
            <li key={item.id} className="!p-0 !m-0">
              <BreathAnimation>
                <Link
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn("hover:underline link-hover uppercase", {
                    "text-accent text-gradient dark:text-gradient":
                      activeSection === item.id,
                    "text-theme-text-main dark:text-theme-text-dark":
                      activeSection !== item.id,
                  })}
                >
                  {t(item.text)}
                </Link>
              </BreathAnimation>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className="flex justify-end items-center gap-2">
          <BreathAnimation>
            <ThemeToggle />
          </BreathAnimation>

          <BreathAnimation>
            <LanguageToggle params={{ locale }} />
          </BreathAnimation>

          <MenuNavbar locale={locale as string} className={`lg:hidden`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


