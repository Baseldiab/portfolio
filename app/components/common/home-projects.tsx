// icons
import { Linkedin, Mail, Phone } from "lucide-react";
import GithubIcon from "@/app/components/icons/githubIcon";
import WhatsAppIcon from "@/app/components/icons/whatsAppIcon";

const iconClassName = "size-4 lg:size-5 group-hover:text-white ";

export const HomeProjects = [
  {
    id: "itqan-application",
    href: "https://www.itqankfu.com/",
    icon: <Linkedin className={iconClassName} />,
    text: "Itqan Application",
  },
  {
    id: "professionals",
    href: "https://github.com/Baseldiab",
    icon: <GithubIcon className={iconClassName} />,
    text: "Professionals",
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
