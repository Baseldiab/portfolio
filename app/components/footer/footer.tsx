"use client";

import Link from "next/link";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// hooks
import { useTranslations } from "@/app/components/hooks/useTranslation";

export default function Footer({ params: { locale } }: LocalProps) {
  const { t } = useTranslations(locale as string);
  const yearNow = new Date().getFullYear();

  return (
    <footer className={`bg-sky-100 shadow-2xl dark:bg-white/5 z-30 `}>
      <div className="container py-4 align-middle text-center relative flex justify-center items-center max-md:flex-col">
        <div className="flex justify-center items-center gap-1 flex-wrap font-karla my-3">
          <span className="main-text max-sm:text-sm">
            {t("navigation.footer-text", { yearNow })}
          </span>
          <Link
            className="font-bold max-sm:text-sm main-text underline"
            href="https://github.com/Baseldiab"
            title={t("navigation.my_git_link")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navigation.footer-name")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

