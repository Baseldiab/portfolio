// Next
import { Metadata } from "next";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// components home
import HeaderSection from "@/app/components/home/header-section/header-section";
import ContactSection from "@/app/components/home/contact-section/contact-section";
import ProjectsSection from "@/app/components/home/projects-section/projects-section";

// Add these imports

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(
    locale,
    "fields.app-name",
    "fields.app-description"
  );
}

export default async function HomePage({ params: { locale } }: LocalProps) {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return (
    <>
      <main className="flex-1 flex-grow flex flex-col items-center sm:items-start h-full md:gap-10 gap-6 mt-10">
        <HeaderSection params={{ locale }} className="main-section" />
        <ProjectsSection
          params={{ locale }}
          className="main-section pb-6 md:pt-2 md:pb-12 " //py-7 because there is gap with 10
        />
        <ContactSection params={{ locale }} className="md:pt-2" />
      </main>
    </>
  );
}
