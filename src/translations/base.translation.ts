import { LangEnum } from "@/components/entities/components.enum";
import { portfolioTranslations, ProjectInformation } from "./portfolio.translation";
import abouMeTranslations, { AboutMeInformation } from "./aboutme.translation";
import { skillsTranslations } from "./skills.translation";
import languageTranslations, { LanguageInformation } from "./language.translation";
import { educationTranslations } from "./education.translation";
import { experienceTranslations } from "./experience.translation";

export type Language = LangEnum.ES | LangEnum.EN | LangEnum.DE | LangEnum.FR | LangEnum.IT;

export const LANGUAGES: Language[] = [LangEnum.ES, LangEnum.EN, LangEnum.DE, LangEnum.FR, LangEnum.IT];

export const getPortfolioTranslations = (language: Language): ProjectInformation[] => {
  return portfolioTranslations[language] || portfolioTranslations[LangEnum.ES];
};

export const getAboutMeTranslations = (language: Language): AboutMeInformation => {
  return abouMeTranslations[language] || abouMeTranslations[LangEnum.ES];
};

export const getSkillsTranslations = (language: Language) => {
  return skillsTranslations[language] || skillsTranslations[LangEnum.ES];
};

export const getLanguageTranslations = (language: Language): LanguageInformation => {
  return languageTranslations[language] || languageTranslations[LangEnum.ES];
}

export const getExperienceTranslations = (language: Language) => {
  return experienceTranslations[language] || experienceTranslations[LangEnum.ES];
}

export const getEducationTranslations = (language: Language) => {
  return educationTranslations[language] || educationTranslations[LangEnum.ES];
}
