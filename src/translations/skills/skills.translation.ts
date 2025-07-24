import skillsEs from "./skills-es";
import skillsEn from "./skills-en";
import skillsDe from "./skills-de";

export interface SkillInformation {
  name: string;
  icon?: string;
  description: string;
  level?: string;
  experience: string;
  bulletPoints?: string[];
  projectsName?: string;
  projects?: {
    type: string;
    description: string;
    references?: string[];
  }[];
}

interface SkillsTranslations {
  es: {
    title: string;
    skills: SkillInformation[];
  },
  en: {
    title: string;
    skills: SkillInformation[];
  },
  de: {
    title: string;
    skills: SkillInformation[];
  },
}

export const skillsTranslations: SkillsTranslations = {
  es: skillsEs,
  en: skillsEn,
  de: skillsDe,
};