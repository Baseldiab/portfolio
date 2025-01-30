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
      <RevealAnimation>
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
        <article className=" flex flex-col justify-center items-center sm:gap-6 gap-3  md:max-w-[80%] sm:max-w-[80%] max-w-[90%] mx-auto">
          {/* {TechItems.map((item) => (
          ))} */}
          <ExperienceItem
            key={`experience-item-${experienceArray[0].id}`}
            item={experienceArray[0]}
          />
        </article>
      </RevealAnimation>
    </section>
  );
}

interface ExperienceItemProps {
  item: ExperienceItemType;
}

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border p-2 rounded-2xl"
    >
      <AccordionItem value="item-1 ">
        <AccordionTrigger className="flex items-start gap-3">
          <h6 className="font-bold flex-col flex text-2xl">
            {item.company}
            <span className="text-muted-foreground text-sm">{item.job}</span>
          </h6>
          <span className="text-muted-foreground">
            {item.time}-{item.office}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-desc">
            {item.description.map((desc) => (
              <li key={desc.id}>{desc.text}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
