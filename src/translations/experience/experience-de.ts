import { ExperienceInformation } from "./experience.translation";

const experienceDE: {
  title: string;
  experiences: ExperienceInformation[];
} = {
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
      dateStart: '13/08/2018',
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
};

export default experienceDE;