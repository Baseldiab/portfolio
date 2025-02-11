// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";
import { ExperienceItem as ExperienceItemType } from "@/app/components/interfaces/experience";

// components common
import SectionTitle from "@/app/components/common/section-title";
import RevealAnimation from "@/app/components/common/reveal-animation";
import SectionDescription from "@/app/components/common/section-description";

// constants
import { experienceArray } from "@/app/components/constants/experience";

// ui imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export default async function ExperienceSection({
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
      <RevealAnimation className="container md:pb-7 pb-5">
        <SectionTitle
          className="mb-2 max-sm:text-2xl"
          title={t("fields.experience.title")}
        />

        <SectionDescription
          text={t("fields.experience.description")}
          className=" text-center lg:max-w-[55%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
        />
        {/* <div className="mt-6 h-1 w-14 md:w-24 bg-sky-950 dark:bg-sky-100  text-center mx-auto" /> */}
      </RevealAnimation>

      <RevealAnimation className="container">
        <Accordion
          type="multiple"
          // defaultValue={experienceArray[0].id}
          // collapsible
          className="mx-auto max-w-[980px] w-full  border border-theme-border-main rounded-xl z-20 "
        >
          {experienceArray.map((item) => (
            <ExperienceItem
              key={`experience-item-${item.id}`}
              item={item}
              locale={locale as "ar" | "en"}
            />
          ))}
        </Accordion>
      </RevealAnimation>
    </section>
  );
}

interface ExperienceItemProps {
  item: ExperienceItemType;
  locale: "ar" | "en";
}

const ExperienceItem = ({ item, locale }: ExperienceItemProps) => {
  return (
    <AccordionItem value={item.id} className="border-b last:border-b-0 p-4">
      <AccordionTrigger className="flex items-start gap-3">
        <h5 className="font-bold flex-col  flex sm:text-2xl text-lg main-text items-start">
          <span className="uppercase">{item.company}</span>
          <span className="text-muted-foreground text-sm capitalize">
            {item.job[locale]}, {item.office[locale]}
          </span>
        </h5>
        <h6 className="text-muted-foreground flex flex-col sm:items-end items-start">
          <span className="text-sm">{item.time[locale]}</span>
          <span className="text-sm font-semibold">{item.location[locale]}</span>
        </h6>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="list-disc ps-6 space-y-1 marker:text-theme-text-main dark:marker:text-theme-text-dark">
          {item.description.map((desc) => (
            <li
              key={`experience-description-${desc.id}`}
              className="text-theme-text-second dark:text-gray-400 sm:text-base text-sm"
            >
              {desc.text[locale]}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
