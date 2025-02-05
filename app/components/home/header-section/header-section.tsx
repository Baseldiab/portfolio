// lib
import { cn } from "@/lib/utils";

// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components home

import Text from "@/app/components/home/header-section/text";

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
      className={cn(
        "relative md:min-h-[500px] w-full overflow-hidden pt-5",
        className
      )}
    >
      <Text {...textProps} />
    </header>
  );
}
