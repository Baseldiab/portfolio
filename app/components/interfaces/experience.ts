


interface Description {
  id: string;
    text: string;
    highlights: string[];
}
export interface ExperienceItem {
  id: string;
    job: string;
  company: string;
  office: string;
  location: string;
  time: string;
  description: Description[];
}
