import { Technology } from "@/entities/components.enum";
import portfolioEs from "./portfolio-es";
import portfolioEn from "./portfolio-en";
import portfolioDe from "./portfolio-de";

export interface ProjectInformation {
  id: string;
  name: string;
  type: string;
  description: string;
  url?: string;
  features: string[];
  technologies: Technology[];
  images?: string[];
}

interface PortfolioTranslations {
  es: ProjectInformation[];
  en: ProjectInformation[];
  de: ProjectInformation[];
}

export const portfolioTranslations: PortfolioTranslations = {
  es: portfolioEs,
  en: portfolioEn,
  de: portfolioDe,
};