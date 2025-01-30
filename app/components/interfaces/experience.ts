

interface Localization {
  ar: string;
  en: string
}

interface Description {
  id: string;
    text: Localization;
    highlights: string[];
}

export interface ExperienceItem {
  id: string;
      job: Localization
  company: string;
  office: Localization;
  location: Localization;
  time: Localization;
  description: Description[];
}
