// icons
import HtmlIcon from "@/app/components/icons/htmlIcon";
import CssIcon from "@/app/components/icons/cssIcon";
import SassIcon from "@/app/components/icons/sassIcon";
import JsIcon from "@/app/components/icons/jsIcon";
import ReactIcon from "@/app/components/icons/reactIcon";
import NextIcon from "@/app/components/icons/nextIon";
import TypescriptIcon from "@/app/components/icons/typescriptIcon";
import BootstrapIcon from "@/app/components/icons/bootstrapIcon";
import MaterialUiIcon from "@/app/components/icons/muiIcon";
import TailwindIcon from "@/app/components/icons/tailwindIcon";
import AntIcon from "@/app/components/icons/antIcon";
import ShadcnUiIcon from "@/app/components/icons/shadcnIcon";
import ReduxIcon from "@/app/components/icons/reduxIcon";
import ZustandIcon from "@/app/components/icons/zustandIcon";
import ReactQueryIcon from "@/app/components/icons/reactQueryIcon";
import AxiosIcon from "@/app/components/icons/axiosIcon";
// import ViteIcon from "@/app/components/icons/viteIcon";

// types
import { TechItem } from "@/app/components/interfaces/tech";

const iconClassName = "!size-full !min-w-full ";

export const TechItems: TechItem[] = [
  {
    id: "react",
    icon: <ReactIcon className={iconClassName} />,
    text: "React",
  },
  {
    id: "contact-whatsapp",
    icon: <NextIcon className={iconClassName} />,
    text: "NextJs",
  },
  {
    id: "typescript",
    icon: <TypescriptIcon className={iconClassName} />,
    text: "Typescript",
  },
  {
    id: "js",
    icon: <JsIcon className={iconClassName} />,
    text: "Javascript",
  },
  {
    id: "sass",
    icon: <SassIcon className={iconClassName} />,
    text: "SASS",
  },
  {
    id: "css",
    icon: <CssIcon className={iconClassName} />,
    text: "CSS",
  },
  {
    id: "html5",
    icon: <HtmlIcon className={iconClassName} />,
    text: "HTML5",
  },
  {
    id: "bootstrap",
    icon: <BootstrapIcon className={iconClassName} />,
    text: "Bootstrap",
  },
  {
    id: "material-ui",
    icon: <MaterialUiIcon className={iconClassName} />,
    text: "MUI",
  },
  {
    id: "tailwind",
    icon: <TailwindIcon className={iconClassName} />,
    text: "Tailwind",
  },
  {
    id: "ant",
    icon: <AntIcon className={iconClassName} />,
    text: "Ant Design",
  },
  {
    id: "shadcn-ui",
    icon: <ShadcnUiIcon className={iconClassName} />,
    text: "Shadcn UI",
  },
  {
    id: "Redux",
    icon: <ReduxIcon className={iconClassName} />,
    text: "Redux",
  },
  {
    id: "zustand",
    icon: <ZustandIcon className={iconClassName} />,
    text: "Zustand",
  },
  {
    id: "react-query",
    icon: <ReactQueryIcon className={iconClassName} />,
    text: "React Query",
  },
  {
    id: "axios",
    icon: <AxiosIcon className={iconClassName} />,
    text: "axios",
  },
  // {
  //   id: "vite",
  //   icon: <ViteIcon className={iconClassName} />,
  //   text: "Vite",
  // },
];
