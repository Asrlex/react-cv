import skillsEs from '../src/translations/skills/skills-es';
import skillsEn from '../src/translations/skills/skills-en';
import skillsDe from '../src/translations/skills/skills-de';

import portfolioEs from '../src/translations/portfolio/portfolio-es';
import portfolioEn from '../src/translations/portfolio/portfolio-en';
import portfolioDe from '../src/translations/portfolio/portfolio-de';
import { ProjectsEnum } from '../src/entities/components.enum';

import educationES from '../src/translations/education/education-es';
import educationEN from '../src/translations/education/education-en';
import educationDE from '../src/translations/education/education-de';

import experienceES from '../src/translations/experience/experience-es';
import experienceEN from '../src/translations/experience/experience-en';
import experienceDE from '../src/translations/experience/experience-de';

function validateSkills() {
  const requiredSkills = ['General', 'Node.js - Backend', 'Node.js - Frontend', 'SQL', 'AWS', 'Python', 'Git', 'Docker', 'Kafka', '.Net', 'Java'];

  if (skillsEs.skills.length !== requiredSkills.length || skillsEn.skills.length !== requiredSkills.length || skillsDe.skills.length !== requiredSkills.length) {
    console.error('Skills count mismatch across languages.');
    process.exit(1);
  }

  const missingSkillsES = requiredSkills.filter(skill => skillsEs.skills.every(s => s.name !== skill));
  const missingSkillsEN = requiredSkills.filter(skill => skillsEn.skills.every(s => s.name !== skill));
  const missingSkillsDE = requiredSkills.filter(skill => skillsDe.skills.every(s => s.name !== skill));

  if (missingSkillsES.length > 0) {
    console.error(`Missing skills translations for (ES): ${missingSkillsES.join(', ')}`);
    process.exit(1);
  }
  if (missingSkillsEN.length > 0) {
    console.error(`Missing skills translations for (EN): ${missingSkillsEN.join(', ')}`);
    process.exit(1);
  }
  if (missingSkillsDE.length > 0) {
    console.error(`Missing skills translations for (DE): ${missingSkillsDE.join(', ')}`);
    process.exit(1);
  }
  console.log('All required skills are present in translations.');
}

function validatePortfolio() {
  const requiredPortfolioItems = Object.values(ProjectsEnum);

  if (portfolioEs.length != requiredPortfolioItems.length || portfolioEs.length != portfolioEn.length || portfolioEs.length != portfolioDe.length) {
    console.error('Portfolio items count mismatch across languages.');
    process.exit(1);
  }

  const missingPortfolioES = requiredPortfolioItems.filter(item => portfolioEs.every(p => p.name !== item));
  const missingPortfolioEN = requiredPortfolioItems.filter(item => portfolioEn.every(p => p.name !== item));
  const missingPortfolioDE = requiredPortfolioItems.filter(item => portfolioDe.every(p => p.name !== item));

  if (missingPortfolioES.length > 0) {
    console.error(`Missing portfolio translations for (ES): ${missingPortfolioES.join(', ')}`);
    process.exit(1);
  }
  if (missingPortfolioEN.length > 0) {
    console.error(`Missing portfolio translations for (EN): ${missingPortfolioEN.join(', ')}`);
    process.exit(1);
  }
  if (missingPortfolioDE.length > 0) {
    console.error(`Missing portfolio translations for (DE): ${missingPortfolioDE.join(', ')}`);
    process.exit(1);
  }
  console.log('All required portfolio items are present in translations.');
}

function validateEducation() {
  const requiredEducationItems = 5;

  const educationItemsES = educationES.formations.length;
  const educationItemsEN = educationEN.formations.length;
  const educationItemsDE = educationDE.formations.length;

  if (educationItemsES !== educationItemsEN || educationItemsES !== educationItemsDE) {
    console.error('Education items count mismatch across languages.');
    process.exit(1);
  }

  if (educationItemsES < requiredEducationItems) {
    console.error(`Not enough education items in (ES): ${educationItemsES} found, ${requiredEducationItems} required.`);
    process.exit(1);
  }
  if (educationItemsEN < requiredEducationItems) {
    console.error(`Not enough education items in (EN): ${educationItemsEN} found, ${requiredEducationItems} required.`);
    process.exit(1);
  }
  if (educationItemsDE < requiredEducationItems) {
    console.error(`Not enough education items in (DE): ${educationItemsDE} found, ${requiredEducationItems} required.`);
    process.exit(1);
  }

  console.log('All required education items are present in translations.');
}

function validateExperience() {
  const requiredExperienceItems = 2;

  const experienceItemsES = experienceES.experiences.length;
  const experienceItemsEN = experienceEN.experiences.length;
  const experienceItemsDE = experienceDE.experiences.length;

  if (experienceItemsES !== experienceItemsEN || experienceItemsES !== experienceItemsDE) {
    console.error('Experience items count mismatch across languages.');
    process.exit(1);
  }

  if (experienceItemsES < requiredExperienceItems) {
    console.error(`Not enough experience items in (ES): ${experienceItemsES} found, ${requiredExperienceItems} required.`);
    process.exit(1);
  }
  if (experienceItemsEN < requiredExperienceItems) {
    console.error(`Not enough experience items in (EN): ${experienceItemsEN} found, ${requiredExperienceItems} required.`);
    process.exit(1);
  }
  if (experienceItemsDE < requiredExperienceItems) {
    console.error(`Not enough experience items in (DE): ${experienceItemsDE} found, ${requiredExperienceItems} required.`);
    process.exit(1);
  }

  console.log('All required experience items are present in translations.');
}

function validateSections() {
  console.log('Validating skills translations...');
  validateSkills();

  console.log('Validating portfolio translations...');
  validatePortfolio();

  console.log('Validating education translations...');
  validateEducation();

  console.log('Validating experience translations...');
  validateExperience();

  console.log('All validations passed successfully.');
}
validateSections();