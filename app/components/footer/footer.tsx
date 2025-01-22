"use client";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// hooks
import { useTranslations } from "@/app/components/hooks/useTranslation";

// components
import Logo from "@/app/components/common/logo";

// Types
import { ContactLink } from "@/app/components/interfaces/contact-links";

// icons
import { Linkedin, Mail, Phone } from "lucide-react";
import GithubIcon from "@/app/components/icons/githubIcon";
import WhatsAppIcon from "@/app/components/icons/whatsAppIcon";

export default function Footer({ params: { locale } }: LocalProps) {
  const { t } = useTranslations(locale as string);
  const yearNow = new Date().getFullYear();

  const iconClassName = "size-4 lg:size-5 group-hover:text-white ";

  const contactLinks: ContactLink[] = [
    {
      id: "contact-linkedIn",
      href: "https://www.linkedin.com/in/basel-diab-94b526259/",
      icon: <Linkedin className={iconClassName} />,
    },
    {
      id: "contact-github",
      href: "https://github.com/Baseldiab",
      icon: <GithubIcon className={iconClassName} />,
    },
    {
      id: "contact-mail",
      href: "mailto:baseldiab21@gmail.com",
      icon: <Mail className={iconClassName} />,
    },
    {
      id: "contact-phone",
      href: "tel:+201068769643",
      icon: <Phone className={iconClassName} />,
    },
    {
      id: "contact-whatsapp",
      href: "https://wa.me/201068769643",
      icon: <WhatsAppIcon className={iconClassName} />,
    },
  ];

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

        <ul className="flex justify-center items-center gap-2">
          {contactLinks.map((item: ContactLink) => (
            <ContactItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

const ContactItem = ({ item }: { item: ContactLink }) => {
  return (
    <li className="flex justify-center items-center bg-white dark:bg-black/50 p-2 rounded-md group btn-radial-out">
      {item.icon}
    </li>
  );
};
