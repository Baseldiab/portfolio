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
import TechSection from "@/app/components/home/tech-section/tech-section";
import ExperienceSection from "@/app/components/home/experience-section/experience-section";

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
  return (
    <>
      <main className="flex-1 flex-grow flex flex-col items-center sm:items-start h-full md:gap-14 gap-12 mt-10">
        <HeaderSection
          id={"about"}
          params={{ locale }}
          className="main-section"
        />

        <ProjectsSection
          id={"projects"}
          params={{ locale }}
          className="main-section pb-7 md:pt-3 md:pb-12 " //py-7 because there is gap with 10
        />

        <ExperienceSection
          id={"experience"}
          params={{ locale }}
          className="main-section pb-7 md:pt-3 md:pb-12 "
        />

        <TechSection
          id={"tech"}
          params={{ locale }}
          className="main-section pb-7 md:pt-3 md:pb-12 "
        />

        <ContactSection
          id={"contact"}
          params={{ locale }}
          className="md:pt-2"
        />
      </main>
    </>
  );
}
