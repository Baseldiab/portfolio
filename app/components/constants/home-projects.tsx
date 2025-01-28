// assets
import itqanApplication from "@/public/images/itqan.webp";
import professionals from "@/public/images/car-proffesionals.webp";
import ecommerceTechno from "@/public/images/e-commerce-techno.webp";
import movieTime from "@/public/images/movie-time.webp";

// interfaces
import { Project } from "@/app/components/interfaces/project";

export const HomeProjects: Project[] = [
  {
    id: "itqan-application",
    href: "https://www.itqankfu.com/",
    image: itqanApplication.src,
    title: "Itqan Application",
    description: "Itqan Application",
  },
  {
    id: "professionals",
    href: "https://github.com/Baseldiab",
    image: professionals.src,
    title: "Professionals",
    description: "Professionals",
  },
  {
    id: "ecommerce-techno",
    href: "https://e-commerce-techno-eight.vercel.app/",
    image: ecommerceTechno.src,
    title: "E-commerce Techno",
    description: "E-commerce Techno",
  },
  {
    id: "movie-time",
    href: "https://movie-time-woad.vercel.app/",
    image: movieTime.src,
    title: "Movie Time",
    description: "Movie Time",
  },
];
