import { ProjectsEnum } from "@/entities/components.enum";
import { SkillInformation } from "./skills.translation";

const skillsDe: {
  title: string;
  skills: SkillInformation[];
} = {
  title: 'Fähigkeiten',
  skills: [
    {
      name: 'Allgemein',
      description: 'Entwicklungserfahrung seit 2018.',
      level: 'Fortgeschritten',
      experience: 'Seit 2018',
      bulletPoints: [
        'Hohe Standards und Disziplin bei der Dokumentation und Strukturierung von Projekten und Dokumentationen.',
        'Befolgung von Best Practices und Stilen.',
        'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
      ],
    },
    {
      name: 'Node.js - Backend',
      icon: 'nest.svg',
      description: 'Entwicklung von REST APIs und Microservices mit NestJS.',
      level: 'Fortgeschritten',
      experience: 'Seit 2020',
      bulletPoints: [
        'Entwicklung von REST APIs und Microservices.',
        'Integration mit SQL- und NoSQL-Datenbanken.',
        'Implementierung von Authentifizierung und Autorisierung.',
        'Integration mit Cloud-Umgebungen und Drittanbieterdiensten.',
        'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'REST API global für die Verwaltung von Datenmeistern und Lagerkontrolle (Bestand, Bestellungen und Transport) mit SQLServer und OracleDB.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Echtzeit-Benachrichtigungs-Microservice mit AWS Lambda und Kafka.',
          references: [
            ProjectsEnum.APH_SERVERLESS,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Dokumentenmanagementsystem mit SQLServer, AWS S3 und Cognito.',
          references: [
            ProjectsEnum.APH_DOCVAULT,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Web SOAP Service.',
          references: [
            ProjectsEnum.APH_SOAP,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'REST API zur Verwaltung von Versicherungsverträgen.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
        {
          type: 'Personal',
          description: 'REST API zur Verwaltung des Haushalts (Einkauf, Rezepte, Aufgaben und Finanzen) mit PostgreSQL und SQLite sowie Authentifizierung über JWT.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
          ],
        },
        {
          type: 'Personal',
          description: 'REST API zur Verwaltung von Reisen mit Cloudinary, Mapbox und SQLite.',
          references: [
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ],
        },
      ],
    },
    {
      name: 'Node.js - Frontend',
      icon: 'react.svg',
      description: 'Webanwendungsentwicklung mit ReactTS und Angular.',
      level: 'Fortgeschritten',
      experience: 'Seit 2022',
      bulletPoints: [
        'Webanwendungsentwicklung mit ReactTS und Angular.',
        'Integration mit REST APIs und Microservices.',
        'Implementierung von Authentifizierung und Autorisierung.',
        'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - SVF',
          description: 'Webanwendung zur Verwaltung von Versicherungsverträgen mit Angular.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Personal',
          description: 'Webanwendung zur Verwaltung des Haushalts (Einkauf, Rezepte, Aufgaben und Finanzen) mit ReactTS.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Webanwendung zur Verwaltung von Versicherungsverträgen mit ReactTS.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
        {
          type: 'Personal',
          description: 'Webanwendung zur Dokumentation von Reisen mit ReactJS.',
          references: [
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ],
        },
      ],
    },
        {
      name: 'Java - SpringBoot',
      icon: 'java.svg',
      description: 'Entwicklung von Microservices und Anwendungen in Java.',
      level: 'Fortgeschritten',
      experience: 'Seit 2018',
      bulletPoints: [
        'Microservices mit SpringBoot MVC und WebFlux.',
        'REST APIs mit SpringBoot MVC.',
        'Entwicklung von Anwendungen in Java.',
        'Hibernate ORM.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - APH',
          description: 'Entwicklung von REST APIs und Microservices mit SpringBoot MVC.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Personal',
          description: 'Microservices-Cluster',
          references: [
            ProjectsEnum.PERSONAL_MS_CLUSTER,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Mitarbeiterverwaltungsanwendung, Betriebssteuerung und Hypothekenverwaltung mit JavaFX.',
          references: [
            ProjectsEnum.SVF_ABSENTISM,
            ProjectsEnum.SVF_PORTAL,
            ProjectsEnum.SVF_MORTGAGE,
            ProjectsEnum.SVF_AGENDA,
          ],
        },
      ],
    },

    {
      name: 'SQL',
      icon: 'sql.svg',
      description: 'Entwicklung von SQL-Skripten und Abfragen sowie Datenbankdesign.',
      level: 'Fortgeschritten',
      experience: 'Seit 2018',
      bulletPoints: [
        'Entwicklung von SQL-Skripten und Abfragen sowie Datenbankdesign.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Design und Entwicklung von OracleDB- und SQLServer-Datenbanken.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DATA_MASTERS,
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Design und Entwicklung von SQLServer-Datenbanken.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
            ProjectsEnum.SVF_WEB_SCRAPING,
            ProjectsEnum.SVF_ECOGAS,
          ],
        },
        {
          type: 'Personal',
          description: 'Design und Entwicklung von PostgreSQL- und SQLite-Datenbanken.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ],
        },
      ],
    },
    {
      name: 'Git',
      icon: 'git.svg',
      description: 'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
      level: 'Fortgeschritten',
      experience: 'Seit 2018',
      bulletPoints: [
        'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
        'GitHub, GitLab.',
        'Implementierung von Continuous Deployment-Skripten mit Gitlab CI/CD.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Verwendung von Versionskontroll-, Projektmanagement- und Continuous Integration-Tools.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DATA_MASTERS,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_SERVERLESS,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
        },
        {
          type: 'Personal',
          description: 'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
        },
      ],
    },
    {
      name: 'AWS',
      icon: 'aws.svg',
      description: 'Verwendung von Amazon Web Services-Tools.',
      level: 'Fortgeschritten',
      experience: 'Seit 2024',
      bulletPoints: [
        'Verwendung von Amazon Web Services-Tools.',
        'AWS Lambda, S3, Cognito, ECS, Cloudwatch, API Gateway.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Deployment von Webdiensten auf ECS.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Serverless-Microservice auf Lambda.',
          references: [
            ProjectsEnum.APH_SERVERLESS,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Dokumentenmanagementsystem mit Integration von S3 und Cognito.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
      ],
    },
    {
      name: 'Docker',
      icon: 'docker.svg',
      description: 'Verwendung von Containerisierungstools.',
      level: 'Fortgeschritten',
      experience: 'Seit 2024',
      bulletPoints: [
        'Verwendung von Containerisierungstools.',
        'Docker, Docker Compose.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Containerisierung von Webdiensten.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DATA_MASTERS,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Containerisierung von Anwendungen.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
      ],
    },
    {
      name: 'Python',
      icon: 'python.svg',
      description: 'Entwicklung von Anwendungen und Skripten in Python.',
      level: 'Fortgeschritten',
      experience: 'Seit 2020',
      bulletPoints: [
        'Entwicklung von Anwendungen und Skripten in Python.',
        'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - SVF',
          description: 'Desktop-Anwendung zur Verwaltung von Gastarifen für ein Energieunternehmen mit Tkinter.',
          references: [
            ProjectsEnum.SVF_ECOGAS,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Dateikonvertierungsskripte.',
        },
        {
          type: 'Professional - SVF',
          description: 'Web-Scraping-Skripte zum Zugriff auf die Unternehmenswebsites der Kunden.',
          references: [
            ProjectsEnum.SVF_WEB_SCRAPING,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Scripts zur Interaktion mit Sharepoint zum Hochladen und Herunterladen von Dokumenten.',
          references: [
            ProjectsEnum.SVF_SHAREPOINT,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Scripts zur Automatisierung von Verwaltungsaufgaben, Verpackung und Versand von Dokumenten.',
        },
        {
          type: 'Personal',
          description: 'Excel-Datensatzmanipulationsskripte.',
        },
        {
          type: 'Personal',
          description: 'Kleines Python-Portfolio mit Skripten für verschiedene Aufgaben.',
          references: [
            ProjectsEnum.PERSONAL_PYTHON,
          ],
        },
      ],
    },
    {
      name: 'Kafka',
      icon: 'kafka.svg',
      description: 'Verwendung von Messaging-Tools.',
      level: 'Fortgeschritten',
      experience: 'Seit 2024',
      bulletPoints: [
        'Verwendung von Messaging-Tools.',
        'Kafka, Zookeeper.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Integration von Microservices mit Kafka.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_SERVERLESS,
          ],
        },
      ],
    },
    {
      name: '.Net',
      icon: 'dotnet.svg',
      description: '.Net. Entwicklung von REST APIs.',
      level: 'Fortgeschritten',
      experience: 'Seit 2025',
      bulletPoints: [
        'Entwicklung von REST APIs in .Net.',
        'Integration mit SQL-Datenbanken.',
        'Implementierung von Proxys zur Kommunikation mit externen Diensten.',
        'Integration mit Cloud-Umgebungen und Drittanbieter-Diensten.',
        'Clean Architecture.',
        'Implementierung von Authentifizierung und Autorisierung.',
        'Verwendung von Versionskontroll- und Projektmanagement-Tools.',
      ],
      projectsName: 'Projekte',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Fortsetzung der Backend-Entwicklung des Kundenportals.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Entwicklung mehrerer REST APIs zur Beschaffung von Stammdaten (Kunden, Produkte, Bestellungen und Tracking).',
          references: [
            ProjectsEnum.APH_REST_APIS,
          ],
        },
      ],
    },
  ]
};

export default skillsDe;
