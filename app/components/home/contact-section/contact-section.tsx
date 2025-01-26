// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components common
import RevealAnimation from "@/app/components/common/reveal-animation";
import SectionText from "@/app/components/common/section-text";

// components home
import MarqeeTitle from "@/app/components/home/contact-section/marqee-title";
import MarqueeItemLink from "./marquee-item-link";

export default async function ContactSection({
  params: { locale },
  className,
}: LocalProps & {
  className?: string;
}) {
  const { t } = await getTranslations(locale as string);

  return (
    <section
      id="contact_me"
      className={cn("w-screen !overflow-hidden", className)}
      style={{
        width: "calc(100vw - 10px)",
      }}
    >
      <RevealAnimation className="flex flex-col gap-6 justify-center items-center py-2 overflow-hidden max-w-full">
        <div className="overflow-hidden  mx-auto lg:py-10 sm:py-8 py-5">
          <MarqeeTitle title={t("fields.contact.title")} />
        </div>

        <SectionText
          text={t("fields.contact.social_links")}
          className="text-start xl:px-[5%] max-px-[calc(100vw-1300px)/2] sm:px-[7.5%] px-[5%] mx-0 w-full my-6"
        />

        <MarqueeItemLink href="#" title="About tailwind" />
      </RevealAnimation>
    </section>
  );
}
