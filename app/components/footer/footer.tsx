"use client";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// hooks
import { useTranslations } from "@/app/components/hooks/useTranslation";

// components
import Logo from "@/app/components/common/logo";

export default function Footer({ params: { locale } }: LocalProps) {
  const { t } = useTranslations(locale as string);
  const yearNow = new Date().getFullYear();

  return (
    <footer className={`bg-slate-200 shadow-xl dark:bg-white/5  z-30`}>
      <div className="container py-4 align-middle text-center relative flex justify-between items-center max-md:flex-col">
        <Logo withRotateAnimation={false} />

        <div className="flex justify-center items-center gap-1 flex-wrap font-karla my-3">
          <span className="dark:text-white text-black max-sm:text-sm">
            {t("navigation.footer-text", { yearNow })}
          </span>
          <a
            className="text-gradient font-bold max-sm:text-sm"
            href="https://github.com/Baseldiab"
          >
            {t("navigation.footer-name")}
          </a>
        </div>
      </div>
    </footer>
  );
}
