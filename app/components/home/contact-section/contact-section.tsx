// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components common
import RevealAnimation from "@/app/components/common/reveal-animation";
import SectionTitle from "@/app/components/common/section-title";

export default async function ContactSection({
  params: { locale },
}: LocalProps) {
  const { t } = await getTranslations(locale as string);

  return (
    <section id="contact_me" className="container">
      <RevealAnimation>
        <SectionTitle title={t("fields.contact.title")} />
      </RevealAnimation>
    </section>
  );
}
