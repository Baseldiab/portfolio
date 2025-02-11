import Link from "next/link";
// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components common
import SectionTitle from "@/app/components/common/section-title";
import SectionDescription from "@/app/components/common/section-description";
import RevealAnimation from "@/app/components/common/reveal-animation";

// components
import { ContactLinks } from "@/app/components/constants/contact-links";

// Types
import { ContactLink } from "@/app/components/interfaces/contact-links";

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
      <RevealAnimation className="container  ">
        <SectionTitle
          className="mb-2 max-sm:text-2xl"
          title={t("fields.contact.title")}
        />

        <SectionDescription
          text={t("fields.contact.description")}
          className=" text-center lg:max-w-[55%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
        />

        {/* <div className="mt-6 h-1 w-14 md:w-24 bg-sky-950 dark:bg-sky-100  text-center mx-auto" /> */}
        <ul className="flex justify-center items-center gap-2 pt-4">
          {ContactLinks.map((item: ContactLink) => (
            <ContactItem t={t} key={item.id} item={item} />
          ))}
        </ul>
      </RevealAnimation>

      <RevealAnimation className="container md:py-10 py-5 ">
        <p className="text-center lg:max-w-[55%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto text-theme-text-second dark:text-gray-400 md:!text-2xl sm:text-xl text-lg flex justify-center flex-wrap gap-1">
          {t("fields.contact.talk_about")}
          <span className="main-text font-bold">
            {t("fields.contact.next_project")}
          </span>
        </p>

        <Link
          href={"mailto:baseldiab21@gmail.com"}
          className="my-4 text-center flex justify-center text-xl main-text border-b-4 pb-1.5 border-sky-500 w-fit mx-auto font-bold"
        >
          {"BaselDiab21@gmail.com"}
        </Link>
      </RevealAnimation>
    </section>
  );
}

const ContactItem = ({
  item,
  t,
}: {
  item: ContactLink;
  t: ReturnType<typeof getTranslations> extends Promise<{ t: infer T }>
    ? T
    : never;
}) => {
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
