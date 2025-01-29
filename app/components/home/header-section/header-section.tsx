import Link from "next/link";
// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

//  components common
import RevealAnimation from "@/app/components/common/reveal-animation";
import DragConstraints from "@/app/components/common/drag-constranints-animation";
import MainButton from "@/app/components/common/main-button";
import SecondaryButton from "@/app/components/common/secondary-button";

// components home
import ThreeDModel from "@/app/components/home/header-section/threeD-earth-model";
import { resumeLink } from "@/app/components/constants/resume-link";

export default async function HeaderSection({
  params: { locale },
  className,
}: LocalProps & {
  className?: string;
}) {
  const { t } = await getTranslations(locale as string);

  return (
    <header
      id="about"
      className={cn("relative min-h-[500px] w-full overflow-hidden", className)}
    >
      <ThreeDModel className="absolute  md:start-1/2 end-0 start-0 top-1/2 -translate-y-1/2 z-[1] h-fit" />

      <article className="relative z-[2] lg:py-20 md:py-12 py-8">
        <DragConstraints containerClassName="container flex flex-col gap-14 items-start">
          <RevealAnimation className="">
            <h6 className="text-xl font-medium font-karla text-theme-text-second">
              {t("fields.hello_there")}
            </h6>
          </RevealAnimation>

          <RevealAnimation className="h-fit my-2" delay={0.2}>
            <h1 className="md:text-7xl text-5xl font-bold font-karla uppercase min-h-fit  leading-normal text-gradient my-1">
              {t("fields.header")}.
            </h1>
            <p className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-normal font-playfair uppercase my-3 mix-blend-lighten dark:mix-blend-darken">
              {t("fields.header-gradient")}
            </p>
          </RevealAnimation>

          <RevealAnimation className="max-w-[500px]" delay={0.3}>
            <h6 className="text-xl font-medium font-karla text-theme-text-second">
              {t("fields.header-details")}
            </h6>
          </RevealAnimation>

          <RevealAnimation delay={0.4} className="md:mt-7 mt-4">
            <div className="flex justify-start items-center gap-4 max-sm:flex-wrap ">
              <MainButton>{t("fields.button.contact")}</MainButton>

              <SecondaryButton href={resumeLink} as={Link}>
                {t("fields.button.resume")}
              </SecondaryButton>
            </div>
          </RevealAnimation>
        </DragConstraints>
      </article>
    </header>
  );
}
