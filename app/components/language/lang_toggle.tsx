"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { useCallback } from "react";
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

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
      className="p-2 rounded-full bg-primary/10 text-primary"
    >
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        <Languages size={20} />
      </motion.div>
    </motion.button>
  );
}
