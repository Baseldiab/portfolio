export interface Project {
  id: string;
  href?: string;
  image: string;
  title: string;
  description: {ar: string, en: string};
  tech: string[];
}
