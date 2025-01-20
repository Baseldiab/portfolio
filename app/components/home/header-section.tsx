// assets
import RevealAnimation from "@/app/components/common/reveal-animation";
import DragConstraints from "../common/drag-constranints-animation";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

export default async function HeroSection({ params: { locale } }: LocalProps) {
  const { t } = await getTranslations(locale as string);

  return (
    <header id="home" className="w-full py-4">
      <DragConstraints containerClassName="container flex flex-col gap-14 items-start">
        <RevealAnimation className="">
          <h6 className="text-xl font-medium font-playfair">
            {t("fields.hello_there")}
          </h6>
        </RevealAnimation>

        <RevealAnimation className="h-fit" delay={0.2}>
          <h1 className="text-7xl font-medium font-playfair min-h-fit leading-normal">
            Digital Products
          </h1>
        </RevealAnimation>

        <RevealAnimation delay={0.4}>
          <p className="text-xl font-playfair">That people love to use</p>
        </RevealAnimation>
      </DragConstraints>
    </header>
  );
}
