"use client";

import Link from "next/link";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// hooks
import { useTranslations } from "@/app/components/hooks/useTranslation";

// components
import { ContactLinks } from "@/app/components/constants/contact-links";

// Types
import { ContactLink } from "@/app/components/interfaces/contact-links";

export default function Footer({ params: { locale } }: LocalProps) {
  const { t } = useTranslations(locale as string);
  const yearNow = new Date().getFullYear();

  return (
    <footer className={`bg-sky-100 shadow-2xl dark:bg-white/5 z-30 `}>
      <div className="container py-4 align-middle text-center relative flex justify-between items-center max-md:flex-col">
        <div className="flex justify-center items-center gap-1 flex-wrap font-karla my-3">
          <span className="main-text max-sm:text-sm">
            {t("navigation.footer-text", { yearNow })}
          </span>
          <Link
            className="font-bold max-sm:text-sm main-text"
            href="https://github.com/Baseldiab"
            title={t("navigation.my_git_link")}
          >
            {t("navigation.footer-name")}
          </Link>
        </div>

        <ul className="flex justify-center items-center gap-2">
          {ContactLinks.map((item: ContactLink) => (
            <ContactItem locale={locale as string} key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

const ContactItem = ({
  item,
  locale,
}: {
  item: ContactLink;
  locale: string;
}) => {
  const { t } = useTranslations(locale as string);
  return (
    <li
      className="flex justify-center items-center p-2 rounded-md group btn-radial-out"
      title={t(`navigation.${item.text.toLowerCase()}`)}
    >
      <Link href={item.href} aria-label={item.text}>
        {item.icon}
      </Link>
    </li>
  );
};
