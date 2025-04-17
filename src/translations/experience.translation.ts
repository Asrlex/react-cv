export interface JobInformation {
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
    experiences: JobInformation[];
  },
  en: {
    title: string;
    experiences: JobInformation[];
  },
  de: {
    title: string;
    experiences: JobInformation[];
  },
}

const experienceTranslations: ExperienceTranslations = {
  es: {
    title: 'Experiencia',
    experiences: [
      {
        position: 'Desarrollador Full Stack - Integrations and Development',
        icon: 'airpharm.jpg',
        company: 'Airpharm Logistics SLU - Aszendit',
        location: 'Torrejón de Ardoz, Madrid, España',
        dateStart: '10/07/2024',
        dateEnd: 'Actualidad',
        description: `Desarrollador Full Stack en el equipo de Integrations and Development. Desarrollando sistemas principalmente backend como APIs REST, microservicios, gestión de bases de datos y aplicaciones web.`,
        tasks: [
          'Desarrollo y mantenimiento de APIs REST y microservicios utilizando NestJS tanto con arquitectura clean como tradicional.',
          'Desarrollo de aplicaciones web utilizando Angular y React.',
          'Estandarización de modelos de datos y gestión de bases de datos utilizando SQLServer y OracleDB.',
          'Integración de sistemas con Kafka.',
          'Desarrollo de pipelines de CI/CD utilizando Gitlab CI.',
          'DevOps y gestión de infraestructura utilizando Docker, Kubernetes y Terraform en cloud AWS.',
          'Integración con utilidades AWS como S3, Lambda, Cognito y ECS.',
        ],
      },
      {
        position: 'Responsable de Desarrollo y Reingeniería de Procesos - BPM',
        icon: 'svf.jpg',
        company: 'Servinform - CSOIP CXB',
        location: 'Madrid, Madrid, España',
        dateStart: '13/082018',
        dateEnd: '10/07/2024',
        description: `Responsable de desarrollo del equipo de BPM de Servinform, implementando soluciones tecnológicas a pequeña escala para mejorar el rendimiento de equipos de operaciones de backoffice.`,
        tasks: [
          'Desarrollo y mantenimiento de aplicaciones web con Node.js, Express y React.',
          'Desarrollo de aplicaciones y scripts con Python para automatización de tareas y gestión de archivos.',
          'Gestión de bases de datos SQL con SQLite, MySQL y SQL Server.',
          'Análisis de calidad de flujo de trabajo, calidad del dato producido y detección de ineficiencias.',
          'Desarrollo de nuevos modelos de negocio según especificaciones del proyecto.',
          'Cálculo de KPIs y SLAs para control y gestión de la productividad.',
        ],
      },
    ]
  },
  en: {
    title: 'Experience',
    experiences: [
      {
        position: 'Full Stack Developer - Integrations and Development',
        icon: 'airpharm.jpg',
        company: 'Airpharm Logistics SLU - Aszendit',
        location: 'Torrejón de Ardoz, Madrid, Spain',
        dateStart: '10/07/2024',
        dateEnd: 'Current',
        description: `Full Stack Developer in the Integrations and Development team. Developing mainly backend systems such as REST APIs, microservices, database management, and web applications.`,
        tasks: [
          'Development and maintenance of REST APIs and microservices using NestJS with both clean and traditional architecture.',
          'Development of web applications using Angular and React.',
          'Standardization of data models and database management using SQLServer and OracleDB.',
          'System integration with Kafka.',
          'Development of CI/CD pipelines using Gitlab CI.',
          'DevOps and infrastructure management using Docker, Kubernetes, and Terraform on AWS cloud.',
          'Integration with AWS utilities such as S3, Lambda, Cognito, and ECS.',
        ],
      },
      {
        position: 'Head of Development and Process Reengineering - BPM Team',
        icon: 'svf.jpg',
        company: 'Servinform - CSOIP CXB',
        location: 'Madrid, Madrid, Spain',
        dateStart: '13/082018',
        dateEnd: '10/07/2024',
        description: `Head of development of the BPM team at Servinform, implementing small-scale technological solutions to improve the performance of back-office operations teams.`,
        tasks: [
          'Development and maintenance of web applications with Node.js, Express, and React.',
          'Development of applications and scripts with Python for task automation and file management.',
          'Management of SQL databases with SQLite, MySQL, and SQL Server.',
          'Analysis of workflow quality, quality of produced data, and detection of inefficiencies.',
          'Development of new business models according to project specifications.',
          'Calculation of KPIs and SLAs for control and management of productivity.',
        ],
      },
    ]
  },
  de: {
    title: 'Erfahrung',
    experiences: [
      {
        position: 'Full Stack Developer - Integrations and Development',
        icon: 'airpharm.jpg',
        company: 'Airpharm Logistics SLU - Aszendit',
        location: 'Torrejón de Ardoz, Madrid, Spanien',
        dateStart: '10/07/2024',
        dateEnd: 'Aktuell',
        description: `Full Stack Entwickler im Integrations- und Entwicklungsteam. Entwicklung von Backend-Systemen wie REST-APIs, Microservices, Datenbankmanagement und Webanwendungen.`,
        tasks: [
          'Entwicklung und Wartung von REST-APIs und Microservices mit NestJS sowohl mit clean als auch traditioneller Architektur.',
          'Entwicklung von Webanwendungen mit Angular und React.',
          'Standardisierung von Datenmodellen und Datenbankmanagement mit SQLServer und OracleDB.',
          'Entwicklung von CI/CD-Pipelines mit Gitlab CI.',
          'Systemintegration mit Kafka.',
          'DevOps und Infrastrukturmanagement mit Docker, Kubernetes und Terraform in der AWS-Cloud.',
          'Integration mit AWS-Diensten wie S3, Lambda, Cognito und ECS.',
        ],
      },
      {
        position: 'Leiter Entwicklung und Prozess-Reengineering - BPM-Team',
        icon: 'svf.jpg',
        company: 'Servinform - CSOIP CXB',
        location: 'Madrid, Madrid, Spanien',
        dateStart: '13/082018',
        dateEnd: '10/07/2024',
        description: `Leiter der Entwicklung des BPM-Teams bei Servinform. Implementierung von technologischen Lösungen im kleinen Maßstab zur Verbesserung der Leistung von Backoffice-Betriebsteams.`,
        tasks: [
          'Entwicklung und Wartung von Webanwendungen mit Node.js, Express und React.',
          'Entwicklung von Anwendungen und Skripten mit Python zur Automatisierung von Aufgaben und Dateiverwaltung.',
          'Management von SQL-Datenbanken mit SQLite, MySQL und SQL Server.',
          'Analyse der Workflow-Qualität, Qualität der produzierten Daten und Erkennung von Ineffizienzen.',
          'Entwicklung neuer Geschäftsmodelle gemäß den Projektspezifikationen.',
          'Berechnung von KPIs und SLAs zur Kontrolle und Verwaltung der Produktivität.',
        ],
      }
    ]
  },
};

export default experienceTranslations;