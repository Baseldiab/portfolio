// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";
import { TechItem as TechItemType } from "@/app/components/interfaces/tech";

// components common
import SectionTitle from "@/app/components/common/section-title";
import RevealAnimation from "@/app/components/common/reveal-animation";
import SectionDescription from "@/app/components/common/section-description";
import BreathAnimation from "@/app/components/common/breath-animation";

// constants
import { TechItems } from "@/app/components/constants/tech-practice";

// ui imports
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

export default async function TechSection({
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
          title={t("fields.skills.title")}
        />

        <SectionDescription
          text={t("fields.skills.description")}
          className="md:pb-7 pb-5 text-center lg:max-w-[50%] md:max-w-[70%] sm:max-w-[80%] max-w-[90%] mx-auto"
        />
      </RevealAnimation>

      <RevealAnimation>
        <article className="container grid xl:grid-cols-8 lg:grid-cols-6 justify-center items-center md:grid-cols-5 sm:grid-cols-4 grid-cols-3 lg:gap-11 sm:gap-6 gap-3">
          {TechItems.map((item) => (
            <TechItem key={`skill-item-${item.id}`} item={item} />
          ))}
        </article>
      </RevealAnimation>
    </section>
  );
}

interface TechItemProps {
  item: TechItemType;
}

const TechItem = ({ item }: TechItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button aria-label={item.text}>
            <BreathAnimation scale={1.05}>{item.icon}</BreathAnimation>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{item.text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
