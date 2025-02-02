// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";
import { ContactLink } from "@/app/components/interfaces/contact-links";

// components common
import RevealAnimation from "@/app/components/common/reveal-animation";
import SectionText from "@/app/components/common/section-text";

// components home
import MarqeeTitle from "@/app/components/home/contact-section/components/marqee-title";
import MarqueeItemLink from "./components/marquee-item-link";

// common
import { ContactLinks } from "@/app/components/constants/contact-links";

export default async function ContactSection({
  params: { locale },
  className,
  id,
}: LocalProps & {
  className?: string;
  id: string;
}) {
  const { t } = await getTranslations(locale as string);

  return (
    <section
      id={id}
      className={cn("w-screen !overflow-hidden", className)}
      style={{
        width: "calc(100vw - 10px)",
      }}
    >
      <RevealAnimation className="flex flex-col gap-6 justify-center items-center overflow-hidden max-w-full">
        <div dir="ltr" className="overflow-hidden  mx-auto  min-h-fit">
          <MarqeeTitle
            locale={locale as string}
            title={t("fields.contact.title")}
          />
        </div>
      </RevealAnimation>

      <RevealAnimation>
        <SectionText
          text={t("fields.contact.social_links")}
          className="text-start container w-full my-6"
        />
      </RevealAnimation>
      <RevealAnimation>
        {ContactLinks.map((item: ContactLink) => (
          <MarqueeItemLink
            key={item.id}
            href={item.href}
            title={t(`navigation.${item.text.toLowerCase()}`)}
            locale={locale as string}
          />
        ))}
      </RevealAnimation>
    </section>
  );
}
