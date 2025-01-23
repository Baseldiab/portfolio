// lib
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";
import { ContactLink } from "@/app/components/interfaces/contact-links";

// icons
import { Linkedin } from "lucide-react";
import GithubIcon from "@/app/components/icons/githubIcon";

// components common
import RevealAnimation from "@/app/components/common/reveal-animation";
import SectionTitle from "@/app/components/common/section-title";
import SectionText from "@/app/components/common/section-text";
import MarkeeButton from "@/app/components/common/markee-button";

// components home
import RotateName from "@/app/components/home/contact-section/rotateName";

export default async function ContactSection({
  params: { locale },
  className,
}: LocalProps & {
  className?: string;
}) {
  const { t } = await getTranslations(locale as string);

  const iconClassName =
    "size-4 lg:size-5 text-black/80 group-hover:text-white ";

  const professionalLinks: ContactLink[] = [
    {
      id: "contact-linkedIn",
      href: "https://www.linkedin.com/in/basel-diab-94b526259/",
      icon: <Linkedin className={iconClassName} />,
      text: t("navigation.linkedin"),
    },
    {
      id: "contact-github",
      href: "https://github.com/Baseldiab",
      icon: <GithubIcon className={iconClassName} />,
      text: t("navigation.github"),
    },
  ];

  return (
    <section id="contact_me" className={cn("", className)}>
      <MarkeeButton childClassName="">{"About"}</MarkeeButton>

      <RevealAnimation className="flex flex-col gap-6 justify-center items-center py-2">
        <Marquee speed={80} gradient={false} autoFill className="h-60">
          <RotateName className="mx-3" />
          <SectionTitle
            className="mx-2 text-[6.4vw]"
            title={t("fields.contact.title")}
          />
        </Marquee>

        <div className="md:my-10 my-4">
          <SectionText
            text={t("fields.contact.text")}
            className="text-center"
          />
          <div className="flex justify-center items-center gap-2 my-4">
            {professionalLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                title={link.text}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="md:my-6 my-4">
          <h6
            className={
              "text-3xl font-bold font-karla text-theme-text-main dark:text-theme-text-dark flex justify-center items-center gap-1"
            }
          >
            {t("fields.contact.talk_about")}

            <span className="text-gradient">
              {t("fields.contact.next_project")}
            </span>
          </h6>

          <SectionText
            text={t("fields.contact.looking_for")}
            className="text-center"
          />
        </div>

        <a
          href="mailto:baseldiab21@gmail.com"
          className={
            "text-theme-text-main dark:text-theme-text-dark text-3xl font-bold text-center mx-auto flex justify-center items-center w-fit border-gradient"
          }
        >
          baseldiab21@gmail.com
        </a>
      </RevealAnimation>
    </section>
  );
}
