// assets
import RevealAnimation from "@/app/components/common/reveal-animation";
import DragConstraints from "../common/drag-constranints-animation";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components
import RotatingEarth from "./earth-model";

export default async function HeroSection({ params: { locale } }: LocalProps) {
  const { t } = await getTranslations(locale as string);

  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      <RotatingEarth />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95 z-[1]" />

      <div className="relative z-[2] py-16">
        <DragConstraints containerClassName="container flex flex-col gap-14 items-start">
          <RevealAnimation className="">
            <h6 className="text-xl font-medium font-karla text-theme-text-second">
              {t("fields.hello_there")}
            </h6>
          </RevealAnimation>

          <RevealAnimation className="h-fit" delay={0.2}>
            <h1 className="text-7xl font-bold font-karla uppercase min-h-fit leading-normal text-gradient">
              {t("fields.header")}.
            </h1>
            <p className="text-5xl font-semibold leading-normal font-playfair uppercase">
              {t("fields.header-gradient")}
            </p>
          </RevealAnimation>

          {/* <RevealAnimation delay={0.4}></RevealAnimation> */}
        </DragConstraints>
      </div>
    </header>
  );
}
