"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// icons
import AmericaIcon from "@/app/components/icons/americaIcon";
import EgyptIcon from "@/app/components/icons/egyptIcon";

// const languages = ["en", "ar"];

export default function LanguageToggle({ params: { locale } }: LocalProps) {
  const router = useRouter();
  const pathname = usePathname();
  // const { i18n } = useTranslation();

  const cycleLanguage = useCallback(() => {
    const other_locale = locale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${other_locale}`);
    router.push(newPathname);
    router.refresh();
  }, [pathname, router, locale]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={cycleLanguage}
      className=" rounded-full text-primary size-5 sm:size-5"
      aria-label="Toggle language"
    >
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        {/* <Languages size={20} /> */}
        {locale === "en" ? (
          <EgyptIcon className="size-full" />
        ) : (
          <AmericaIcon className="size-full" />
        )}
      </motion.div>
    </motion.button>
  );
}
