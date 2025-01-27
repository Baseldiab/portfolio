// icons
import { Linkedin, Mail, Phone } from "lucide-react";
import GithubIcon from "@/app/components/icons/githubIcon";
import WhatsAppIcon from "@/app/components/icons/whatsAppIcon";

const iconClassName = "size-4 lg:size-5 group-hover:text-white ";

export const ContactLinks = [
  {
    id: "contact-linkedIn",
    href: "https://www.linkedin.com/in/basel-diab-94b526259/",
    icon: <Linkedin className={iconClassName} />,
    text: "LinkedIn",
  },
  {
    id: "contact-github",
    href: "https://github.com/Baseldiab",
    icon: <GithubIcon className={iconClassName} />,
    text: "GitHub",
  },
  {
    id: "contact-mail",
    href: "mailto:baseldiab21@gmail.com",
    icon: <Mail className={iconClassName} />,
    text: "Email",
  },
  {
    id: "contact-phone",
    href: "tel:+201068769643",
    icon: <Phone className={iconClassName} />,
    text: "Phone",
  },
  {
    id: "contact-whatsapp",
    href: "https://wa.me/201068769643",
    icon: <WhatsAppIcon className={iconClassName} />,
    text: "WhatsApp",
  },
];
