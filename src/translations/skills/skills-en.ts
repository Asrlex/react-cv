import { ProjectsEnum } from "@/entities/components.enum";
import { SkillInformation } from "./skills.translation";

const skillsEn: {
  title: string;
  skills: SkillInformation[];
} = {
  title: 'Skills',
  skills: [
    {
      name: 'General',
      description: 'Development experience since 2018.',
      level: 'Advanced',
      experience: 'Since 2018',
      bulletPoints: [
        'High standards and discipline in documenting and structuring projects and documentation.',
        'Following best practices and styles.',
        'Use of version control and project management tools.',
      ],
    },
    {
      name: 'Node.js - Backend',
      icon: 'nest.svg',
      description: 'Development of REST APIs and microservices with NestJS.',
      level: 'Advanced',
      experience: 'Since 2020',
      bulletPoints: [
        'Development of REST APIs and microservices.',
        'Integration with SQL and NoSQL databases.',
        'Implementation of authentication and authorization.',
        'Integration with cloud environments and third-party services.',
        'Use of version control and project management tools.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Global REST API for managing data masters and warehouse control (stock, orders, and transport) with SQLServer and OracleDB.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Real-time notification microservice with AWS Lambda and Kafka.',
          references: [
            ProjectsEnum.APH_SERVERLESS,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Document management system with SQLServer, AWS S3, and Cognito.',
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
          description: 'REST API for managing insurance policies.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
        {
          type: 'Personal',
          description: 'REST API for managing the home (shopping, recipes, tasks, and finances) with PostgreSQL and SQLite, and authentication via JWT.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
          ],
        },
        {
          type: 'Personal',
          description: 'REST API for documenting trips with Cloudinary, Mapbox, and SQLite.',
          references: [
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ],
        },
      ],
    },
    {
      name: 'Node.js - Frontend',
      icon: 'react.svg',
      description: 'Web application development with ReactTS and Angular.',
      level: 'Intermediate',
      experience: 'Since 2022',
      bulletPoints: [
        'Web application development with ReactTS and Angular.',
        'Integration with REST APIs and microservices.',
        'Implementation of authentication and authorization.',
        'Use of version control and project management tools.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - SVF',
          description: 'Web application for managing insurance policies with ReactTS.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Personal',
          description: 'Web application for managing the home (shopping, recipes, tasks, and finances) with ReactTS.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Web application for managing insurance policies with ReactTS.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
        {
          type: 'Personal',
          description: 'Web application for documenting trips with ReactJS.',
          references: [
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ],
        },
      ],
    },
    {
      name: 'SQL',
      icon: 'sql.svg',
      description: 'Development of SQL scripts and queries and database design.',
      level: 'Advanced',
      experience: 'Since 2018',
      bulletPoints: [
        'Development of SQL scripts and queries and database design.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Design and development of OracleDB and SQLServer databases.',
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
          description: 'Design and development of SQLServer databases.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
            ProjectsEnum.SVF_WEB_SCRAPING,
            ProjectsEnum.SVF_ECOGAS,
          ],
        },
        {
          type: 'Personal',
          description: 'Design and development of PostgreSQL and SQLite databases.',
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
      description: 'Use of version control and project management tools.',
      level: 'Advanced',
      experience: 'Since 2018',
      bulletPoints: [
        'Use of version control and project management tools.',
        'GitHub, GitLab.',
        'Implementation of continuous deployment scripts with Gitlab CI/CD.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Use of version control, project management, and continuous integration tools.',
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
          description: 'Use of version control and project management tools.',
        },
        {
          type: 'Personal',
          description: 'Use of version control and project management tools.',
        },
      ],
    },
    {
      name: 'AWS',
      icon: 'aws.svg',
      description: 'Use of Amazon Web Services tools.',
      level: 'Advanced',
      experience: 'Since 2024',
      bulletPoints: [
        'Use of Amazon Web Services tools.',
        'AWS Lambda, S3, Cognito, ECS, Cloudwatch, API Gateway.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Deployment of web services on ECS.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Serverless microservice on Lambda.',
          references: [
            ProjectsEnum.APH_SERVERLESS,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Document management system with integration with S3 and Cognito.',
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
      description: 'Use of containerization tools.',
      level: 'Intermediate',
      experience: 'Since 2024',
      bulletPoints: [
        'Use of containerization tools.',
        'Docker, Docker Compose.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Containerization of web services.',
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
          description: 'Containerization of applications.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
      ],
    },
    {
      name: 'Python',
      icon: 'python.svg',
      description: 'Development of applications and scripts in Python.',
      level: 'Intermediate',
      experience: 'Since 2020',
      bulletPoints: [
        'Development of applications and scripts in Python.',
        'Use of version control and project management tools.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - SVF',
          description: 'Desktop application for managing gas tariffs for energy company with Tkinter.',
          references: [
            ProjectsEnum.SVF_ECOGAS,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'File conversion scripts.',
        },
        {
          type: 'Professional - SVF',
          description: 'Web scraping scripts to access client corporate websites.',
          references: [
            ProjectsEnum.SVF_WEB_SCRAPING,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Scripts for interacting with Sharepoint for uploading and downloading documents.',
          references: [
            ProjectsEnum.SVF_SHAREPOINT,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Scripts for automating management tasks, packaging, and sending documents.',
        },
        {
          type: 'Personal',
          description: 'Excel data set manipulation scripts.',
        },
        {
          type: 'Personal',
          description: 'Small Python portfolio with scripts for various tasks.',
          references: [
            ProjectsEnum.PERSONAL_PYTHON,
          ],
        },
      ],
    },
    {
      name: 'Kafka',
      icon: 'kafka.svg',
      description: 'Use of messaging tools.',
      level: 'Intermediate',
      experience: 'Since 2024',
      bulletPoints: [
        'Use of messaging tools.',
        'Kafka, Zookeeper.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Integration of microservices using Kafka.',
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
      description: '.Net. development of REST APIs.',
      level: 'Intermediate',
      experience: 'Since 2025',
      bulletPoints: [
        'Development of REST APIs in .Net.',
        'Integration with SQL databases.',
        'Implementation of proxies for communication with external services.',
        'Integration with cloud environments and third-party services.',
        'Clean architecture.',
        'Implementation of authentication and authorization.',
        'Use of version control and project management tools.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - Airpharm',
          description: 'Continuation of the backend development of the client portal.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Professional - Airpharm',
          description: 'Development of multiple REST APIs for obtaining master data (clients, products, orders, and tracking).',
          references: [
            ProjectsEnum.APH_REST_APIS,
          ],
        },
      ],
    },
    {
      name: 'Java',
      icon: 'java.svg',
      description: 'Development of applications in Java.',
      level: 'Intermediate',
      experience: 'Since 2018',
      bulletPoints: [
        'Development of applications in Java.',
        'SpringMVC.',
        'Hibernate ORM.',
      ],
      projectsName: 'Projects',
      projects: [
        {
          type: 'Professional - SVF',
          description: 'Development of holiday, absence, and calendar control applications with JavaFX.',
          references: [
            ProjectsEnum.SVF_ABSENTISM,
            ProjectsEnum.SVF_PORTAL,
          ],
        },
        {
          type: 'Professional - SVF',
          description: 'Development of operations control, management, and mortgage applications with JavaFX.',
          references: [
            ProjectsEnum.SVF_MORTGAGE,
            ProjectsEnum.SVF_AGENDA,
          ],
        },
      ],
    },
  ]
};

export default skillsEn;
