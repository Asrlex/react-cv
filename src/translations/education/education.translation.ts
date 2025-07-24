import educationDE from "./education-de";
import educationEN from "./education-en";
import educationES from "./education-es";

export interface EducationInformation {
  formation: string;
  date: string;
  location?: string;
  duration?: string;
  description: string;
}

export interface EducationTranslations {
  es: {
    title: string;
    formations: EducationInformation[];
  },
  en: {
    title: string;
    formations: EducationInformation[];
  },
  de: {
    title: string;
    formations: EducationInformation[];
  },
}

export const educationTranslations: EducationTranslations = {
  es: educationES,
  en: educationEN,
  de: educationDE,
}
