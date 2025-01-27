// Next
import { Metadata } from "next";

// Utils
import { generateMetadata as generatePageMetadata } from "@/app/utils/generate-metadata";

// Interfaces
import { LocalProps } from "@/app/components/interfaces/local.props.interface";

// layout
import Navbar from "@/app/components/navbar/navbar";

// assets
import WavesImage from "@/app/components/icons/wavesImage";

// Components
import Footer from "@/app/components/footer/footer";

// components home
import HeaderSection from "@/app/components/home/header-section/header-section";
import ContactSection from "@/app/components/home/contact-section/contact-section";
import ProjectsSection from "@/app/components/home/projects-section/projects-section";

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
  // Simulate initial loading time
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return (
    <>
      <Navbar params={{ locale }} />

      <main className="flex-1 flex-grow flex flex-col items-center sm:items-start h-full md:gap-10 gap-6 mt-10">
        <HeaderSection params={{ locale }} className="main-section" />
        <ProjectsSection params={{ locale }} />
        <ContactSection params={{ locale }} />
      </main>

      <Footer params={{ locale }} />

      <WavesImage className="z-[-5] fixed left-0 right-0 bottom-0  fill-slate-100 dark:fill-[#1F7BF6]/5" />
    </>
  );
}
