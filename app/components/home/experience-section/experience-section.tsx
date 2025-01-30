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
      <RevealAnimation className="container">
        <SectionTitle
          className="mb-2 max-sm:text-2xl"
          title={t("fields.experience.title")}
        />

        <SectionDescription
          text={t("fields.experience.description")}
          className="md:pb-10 pb-5 text-center lg:max-w-[50%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
        />
      </RevealAnimation>

      <RevealAnimation className="container">
        <Accordion
          type="multiple"
          // defaultValue={experienceArray[0].id}
          // collapsible
          className="mx-auto max-w-[980px] w-full  border border-theme-border-main rounded-xl sm:my-9 my-3 z-20 "
        >
          {experienceArray.map((item) => (
            <ExperienceItem key={`experience-item-${item.id}`} item={item} />
          ))}
        </Accordion>
      </RevealAnimation>
    </section>
  );
}

interface ExperienceItemProps {
  item: ExperienceItemType;
}

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  return (
    <AccordionItem value={item.id} className="border-b p-4">
      <AccordionTrigger className="flex items-start gap-3">
        <h6 className="font-bold flex-col  flex sm:text-2xl text-xl text-theme-text-main dark:text-theme-text-dark">
          <span className="uppercase">{item.company}</span>
          <span className="text-muted-foreground text-sm capitalize">
            {item.job}, {item.office}
          </span>
        </h6>
        <h6 className="text-muted-foreground flex flex-col sm:items-end items-start">
          <span className="text-sm">{item.time}</span>
          <span className="text-sm font-semibold">{item.location}</span>
        </h6>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="list-disc pl-6 space-y-1 marker:text-theme-text-main dark:marker:text-theme-text-dark">
          {item.description.map((desc) => (
            <li
              key={`experience-description-${desc.id}`}
              className="text-theme-text-second lg:text-lg sm:text-base"
            >
              {desc.text}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
