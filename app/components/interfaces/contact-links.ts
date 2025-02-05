import { ReactNode } from "react";

export interface ContactLink {
  id: string;
  href: string;
  icon: ReactNode;
  text: string;
}
