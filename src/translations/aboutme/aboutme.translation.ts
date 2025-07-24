import aboutMeDE from "./aboutme-de";
import aboutMeEN from "./aboutme-en";
import aboutMeES from "./aboutme-es";

export interface AboutMeInformation {
  name: string;
  title: string;
  location: string;
  position: string;
  birthDate: string;
  description: string[];
}

interface AboutMeTranslations {
  es: AboutMeInformation;
  en: AboutMeInformation;
  de: AboutMeInformation;
}

const aboutMeTranslations: AboutMeTranslations = {
  es: aboutMeES,
  en: aboutMeEN,
  de: aboutMeDE,
};

export default aboutMeTranslations;