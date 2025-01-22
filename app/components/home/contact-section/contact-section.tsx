// i18n
import getTranslations from "@/app/i18n";

// interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

export default async function ContactSection({
  params: { locale },
}: LocalProps) {
  const { t } = await getTranslations(locale as string);

  return (
    <section id="contact_me" className="container">
      <h2 className="text-theme-text-main dark:text-theme-text-dark text-4xl font-bold text-center">
        {t("home.contact_me")}
      </h2>
    </section>
  );
}
