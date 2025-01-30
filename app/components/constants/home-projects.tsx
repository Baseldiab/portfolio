// assets
import Portfolio from "@/public/images/portfolio.webp";
import itqanApplication from "@/public/images/itqan.webp";
import professionals from "@/public/images/car-proffesionals.webp";
import ecommerceTechno from "@/public/images/e-commerce-techno.webp";
import movieTime from "@/public/images/movie-time.webp";

// interfaces
import { Project } from "@/app/components/interfaces/project";

export const HomeProjects: Project[] = [
  {
    id: "portfolio",
    href: "https://basel-diab.vercel.app/",
    image: Portfolio.src,
    title: "Portfolio",
    description: {
      ar: "موقع محفظة أعمال تفاعلي ومتجاوب لعرض مهاراتي ومشاريعي وخبراتي كمطور واجهات أمامية",
      en: "A responsive and interactive portfolio website to showcase my skills, projects, and experience as a frontend developer.",
    },
    tech: [
      "Next",
      "tailwind",
      "Shadcn UI",
      "React Query",
      "Typescript",
      "framer motion",
      "react i18next",
      "three",
      "react animated cursor",
      "next themes",
    ],
  },
  {
    id: "itqan-application",
    href: "https://www.itqankfu.com/",
    image: itqanApplication.src,
    title: "Itqan Application",
    description: {
      ar: "مكتبة إتقان - منصة تعليمية متكاملة تقدم خدمات الكتب الإلكترونية والدورات التدريبية والمواد التعليمية المتخصصة للطلاب والمهنيين في جامعة الملك فيصل",
      en: "Itqan Application - A comprehensive educational platform offering e-books, training courses, and specialized educational materials for students and professionals at King Saud University.",
    },
    tech: [
      "React",
      "tailwind",
      "Shadcn UI",
      "React Query",
      "Zustand",
      "Typescript",
      "Zod",
      "React Hook Form",
      "react helmet",
      "Axios",
      "framer motion",
    ],
  },
  {
    id: "professionals",
    href: "https://github.com/Baseldiab",
    image: professionals.src,
    title: "Professionals",
    description: {
      ar: "منصة متخصصة لخدمات السيارات تربط بين أصحاب السيارات والمهنيين المحترفين. نقدم خدمات الصيانة، الإصلاح، والعناية بالسيارات مع ضمان الجودة والموثوقية",
      en: "A specialized automotive services platform connecting car owners with professional technicians. We provide maintenance, repair, and car care services with guaranteed quality and reliability.",
    },
    tech: [
      "React",
      "tailwind",
      "Shadcn UI",
      "React Query",
      "Zustand",
      "Typescript",
      "framer-motion",
    ],
  },
  {
    id: "ecommerce-techno",
    href: "https://e-commerce-techno-eight.vercel.app/",
    image: ecommerceTechno.src,
    title: "E-commerce Techno",
    description: {
      ar: "متجر إلكتروني شامل يقدم تجربة تسوق سلسة مع واجهة مستخدم عصرية. يتميز بتصفية متقدمة للمنتجات، وسلة تسوق تفاعلية، ونظام بحث ذكي، مع دعم كامل للغتين العربية والإنجليزية",
      en: "A comprehensive e-commerce platform featuring a modern UI with advanced product filtering, interactive shopping cart, and smart search functionality. Fully responsive design with complete Arabic and English language support.",
    },
    tech: [
      "React",
      "tailwind",
      "Zustand",
      "Typescript",
      "react-helmet",
      "react-icons",
      "React Hook Form",
      "Zod",
      "framer-motion",
      "MUI",
      "SwiperJs",
    ],
  },
  {
    id: "movie-time",
    href: "https://movie-time-woad.vercel.app/",
    image: movieTime.src,
    title: "Movie Time",
    description: {
      ar: "موقع موفي تايم الاصلي الموقع الاول الموفر لجميع المحتوي يرجي دعم الموقع ومشاركة",
      en: "Movie Time - The premier destination for all your entertainment content. A comprehensive platform offering a wide selection of movies and shows. Please support and share the website.",
    },
    tech: [
      "NextJs",
      "tailwind",
      "Zustand",
      "Typescript",
      "react-helmet",
      "react-icons",
      "Ant Design UI",
      "SwiperJs",
      "next-intl",
    ],
  },
];
