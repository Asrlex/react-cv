import languageDE from "./language-de";
import languageEN from "./language-en";
import languageES from "./language-es";

export interface LanguageInformation {
  title: string;
  listening: string;
  reading: string;
  speaking: string;
  writing: string;
  conversation: string;
  native: string;
  legend: string[];
  experience?: {
    language: string;
    experience: string[]
  }[];
}

interface LanguageTranslations {
  en: LanguageInformation;
  es: LanguageInformation;
  de: LanguageInformation;
}

const languageTranslations: LanguageTranslations = {
  es: languageES,
  en: languageEN,
  de: languageDE,
};

export default languageTranslations;