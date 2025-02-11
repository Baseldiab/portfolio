// Next
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// Dynamically import components with loading states
const HeaderSection = dynamic(
  () => import("@/app/components/home/header-section/header-section"),
  {
    loading: () => (
      <div className="animate-pulse h-[500px] bg-gray-200 dark:bg-gray-800 rounded-lg" />
    ),
    ssr: false,
  }
);

const ProjectsSection = dynamic(
  () => import("@/app/components/home/projects-section/projects-section"),
  {
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg" />
    ),
    ssr: true,
  }
);

const ExperienceSection = dynamic(
  () => import("@/app/components/home/experience-section/experience-section"),
  {
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg" />
    ),
    ssr: true,
  }
);

const TechSection = dynamic(
  () => import("@/app/components/home/tech-section/tech-section"),
  {
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg" />
    ),
    ssr: true,
  }
);

const ContactSection = dynamic(
  () => import("@/app/components/home/contact-section/contact-section"),
  {
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg" />
    ),
    ssr: true,
  }
);

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
      <main className="flex-1 flex-grow flex flex-col items-center sm:items-start h-full xl:gap-14 md:gap-13 gap-10 mt-10">
        <HeaderSection
          id={"about"}
          params={{ locale }}
          className="main-section lg:py-20 md:py-12 pb-8 pt-6"
        />

        <ProjectsSection
          id={"projects"}
          params={{ locale }}
          className="main-section pb-10 md:pt-3 md:pb-14" //py-7 because there is gap with 10
        />

        <ExperienceSection
          id={"experience"}
          params={{ locale }}
          className="main-section pb-10 md:pt-3 md:pb-14"
        />

        <TechSection
          id={"tech"}
          params={{ locale }}
          className="main-section pb-10 md:pt-3 md:pb-14"
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
