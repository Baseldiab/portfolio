// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components home

import Text from "@/app/components/home/header-section/text";
import Image from "next/image";

export default async function HeaderSection({
  params: { locale },
  className,
  id,
}: LocalProps & {
  className?: string;
  id: string;
}) {
  const { t } = await getTranslations(locale as string);

  // Pre-compute text values to avoid multiple t() calls during render
  const textProps = {
    firstText: t("fields.hello_there"),
    secondText: t("fields.header"),
    thirdText: t("fields.header-gradient"),
    description: t("fields.header-details"),
    contact: t("fields.button.contact"),
    resume: t("fields.button.resume"),
  };

  return (
    <header
      id={id}
      className={cn(" w-full overflow-hidden pt-5 container", className)}
    >
      <div className="container flex justify-center max-md:flex-col items-center gap-4">
        <Text className={"md:basis-1/2"} {...textProps} />
        <Image
          src="/images/header.svg"
          alt="Header illustration"
          width={650}
          height={650}
          className="block min-w-[50%] md:basis-1/2 dark:brightness-[0.82] dark:contrast-[1.1]"
        />
      </div>
    </header>
  );
}
