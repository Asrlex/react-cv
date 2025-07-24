import { ExperienceInformation } from "./experience.translation";

const experienceEN: {
  title: string;
  experiences: ExperienceInformation[];
} = {
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
      dateStart: '13/08/2018',
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
};

export default experienceEN;