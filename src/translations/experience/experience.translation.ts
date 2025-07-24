import experienceDE from "./experience-de";
import experienceEN from "./experience-en";
import experienceES from "./experience-es";

export interface ExperienceInformation {
  position: string;
  icon?: string;
  company: string;
  location: string;
  dateStart: string;
  dateEnd?: string;
  description: string;
  tasks: string[];
}

interface ExperienceTranslations {
  es: {
    title: string;
    experiences: ExperienceInformation[];
  },
  en: {
    title: string;
    experiences: ExperienceInformation[];
  },
  de: {
    title: string;
    experiences: ExperienceInformation[];
  },
}

export const experienceTranslations: ExperienceTranslations = {
  es: experienceES,
  en: experienceEN,
  de: experienceDE,
};
