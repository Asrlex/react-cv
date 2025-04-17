export enum BaseEnum {
  TRANSITION_DURATION = 0.3,
  BASE_ANIMATION_EASE = 'easeInOut',
}

export enum LanguagesEnum {
  // ISO 639-1 language codes
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  DE = 'de',
  IT = 'it',

  // Levels of proficiency
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export const BASE_ASSET_DIR = '/react-cv/icons';

export enum ProjectsEnum {
  APH_CONTROL_TOWER = 'control-tower-project',
  APH_DATA_MASTERS = 'data-masters-project',
  APH_CLIENT_PORTAL = 'client-portal-project',
  APH_SERVERLESS = 'serverless-project',
  APH_DOCVAULT = 'docvault-project',
  APH_SOAP = 'soap-project',
  SVF_INSURANCE = 'insurance-project',
  SVF_ECOGAS = 'ecogas-project',
  SVF_WEB_SCRAPING = 'web-scraping-project',
  SVF_SHAREPOINT = 'sharepoint-project',
  SVF_PORTAL = 'portal-project',
  SVF_ABSENTISM = 'absentism-project',
  SVF_MORTGAGE = 'mortgage-project',
  SVF_AGENDA = 'agenda-project',
  PERSONAL_HOME_MANAGEMENT = 'home-management-project',
  PERSONAL_HM_CONTROL_TOWER = 'hm-control-tower-project',
  PERSONAL_TRAVEL_JOURNAL = 'travel-journal-project',
  PERSONAL_CV = 'cv-project',
  PERSONAL_CONVERTER = 'converter-project',
  PERSONAL_MODEL_VIEWER = 'model-viewer-project',
  PERSONAL_SORTING_ALGORITHM = 'sorting-algorithm-project',
  PERSONAL_PYTHON = 'python-project',
}

export type Technology = {
  name: string;
  icon: string;
}

export const TechnologiesMaster = {
  REACT: {
    name: 'React',
    icon: 'react'
  },
  ZUSTAND: {
    name: 'Zustand',
    icon: 'zustand'
  },
  FRAMER_MOTION: {
    name: 'Framer Motion',
    icon: 'framer-motion'
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: 'tailwind'
  },
  CSS: {
    name: 'CSS',
    icon: 'css'
  },
  NESTJS: {
    name: 'NestJS',
    icon: 'nest'
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: 'typescript'
  },
  KAFKA: {
    name: 'Kafka',
    icon: 'kafka'
  },
  ORACLEDB: {
    name: 'OracleDB',
    icon: 'oracle-db'
  },
  SQLSERVER: {
    name: 'SQLServer',
    icon: 'sql-server'
  },
  POSTGRESQL: {
    name: 'PostgreSQL',
    icon: 'postgresql'
  },
  SQLITE: {
    name: 'SQLite',
    icon: 'sqlite'
  },
  REDIS: {
    name: 'Redis',
    icon: 'redis'
  },
  AWS_COGNITO: {
    name: 'AWS Cognito',
    icon: 'aws-cognito'
  },
  AWS_LAMBDA: {
    name: 'AWS Lambda',
    icon: 'aws-lambda'
  },
  AWS_S3: {
    name: 'AWS S3',
    icon: 'aws-s3'
  },
  AWS_ECS: {
    name: 'AWS ECS',
    icon: 'aws-ecs'
  },
  JWT: {
    name: 'JWT',
    icon: 'jwt'
  },
  SWAGGER: {
    name: 'Swagger',
    icon: 'swagger'
  },
  DOTNET: {
    name: '.NET',
    icon: 'dotnet'
  },
  GITLAB: {
    name: 'GitLab',
    icon: 'gitlab'
  },
  GITLAB_CI: {
    name: 'GitLab CI',
    icon: 'ci-cd'
  },
  GITHUB: {
    name: 'GitHub',
    icon: 'github'
  },
  GITHUB_PAGES: {
    name: 'GitHub Pages',
    icon: 'github'
  },
  CLOUDINARY: {
    name: 'Cloudinary',
    icon: 'cloudinary'
  },
  VERCEL: {
    name: 'Vercel',
    icon: 'vercel'
  },
  PYTHON: {
    name: 'Python',
    icon: 'python'
  },
  FLASK: {
    name: 'Flask',
    icon: 'flask'
  },
  BEAUTIFUL_SOUP: {
    name: 'BeautifulSoup',
    icon: 'python'
  },
  PANDAS: {
    name: 'Pandas',
    icon: 'pandas'
  },
  TKINTER: {
    name: 'Tkinter',
    icon: 'tkinter'
  },
  KIVY: {
    name: 'Kivy',
    icon: 'kivy'
  },
  RASPI: {
    name: 'Raspberry Pi',
    icon: 'raspberry-pi'
  },
  NGINX: {
    name: 'Nginx',
    icon: 'nginx'
  },
  DOCKER: {
    name: 'Docker',
    icon: 'docker'
  },
};
