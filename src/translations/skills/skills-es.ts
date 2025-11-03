import { ProjectsEnum } from "@/entities/components.enum";
import { SkillInformation } from "./skills.translation";

const skillsEs: {
  title: string;
  skills: SkillInformation[];
} = {
  title: 'Competencias',
  skills: [
    {
      name: 'General',
      description: 'Experiencia en desarrollo de software desde 2018.',
      level: 'Avanzado',
      experience: 'Desde 2018',
      bulletPoints: [
        'Alta exigencia y disciplina documentando y estructurando proyectos y documentación.',
        'Seguiminto de buenas prácticas y estilos.',
        'Uso de herramientas de control de versiones y gestión de proyectos.',
      ],
    },
    {
      name: 'Node.js - Backend',
      icon: 'nest.svg',
      description: 'Desarrollo de APIs REST y microservicios con NestJS.',
      level: 'Avanzado',
      experience: 'Desde 2020',
      bulletPoints: [
        'Desarrollo de APIs REST y microservicios.',
        'Integración con bases de datos SQL y NoSQL.',
        'Implementación de autenticación y autorización.',
        'Integración con entornos cloud y servicios de terceros.',
        'Uso de herramientas de control de versiones y gestión de proyectos.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'API REST global para gestión de maestros de datos y control de almacenes (stock, pedidos y transporte) con SQLServer y OracleDB.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
          ],
        },
        {
          type: 'Profesional - Airpharm',
          description: 'Microservicio de notificaciones en tiempo real con AWS Lambda y Kafka.',
          references: [
            ProjectsEnum.APH_SERVERLESS,
          ],
        },
        {
          type: 'Profesional - Airpharm',
          description: 'Gestor documental con SQLServer, AWS S3 y Cognito.',
          references: [
            ProjectsEnum.APH_DOCVAULT,
          ],
        },
        {
          type: 'Personal',
          description: 'Cluster de microservicios.',
          references: [
            ProjectsEnum.PERSONAL_MS_CLUSTER,
          ],
        },
        {
          type: 'Profesional - Airpharm',
          description: 'Servicio Web SOAP.',
          references: [
            ProjectsEnum.APH_SOAP,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'API REST para gestión de pólizas de seguros.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
        {
          type: 'Personal',
          description: 'API REST para gestión del hogar (compras, recetas, tareas y finanzas) con PostgreSQL y SQLite, y autenticación mediante JWT.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
          ],
        },
        {
          type: 'Personal',
          description: 'API REST para documentar viajes con Cloudinary, Mapbox y SQLite.',
          references: [
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ],
        },
      ],
    },
    {
      name: 'Node.js - Frontend',
      icon: 'react.svg',
      description: 'Desarrollo de aplicaciones web con React y Angular.',
      level: 'Intermedio',
      experience: 'Desde 2022',
      bulletPoints: [
        'Desarrollo de aplicaciones web con ReactTS y Angular.',
        'Integración con APIs REST y microservicios.',
        'Implementación de autenticación y autorización.',
        'Uso de herramientas de control de versiones y gestión de proyectos.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'Aplicación web para acceso de clientes y control de stock y pedidos en Angular.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Personal',
          description: 'Cluster de microservicios.',
          references: [
            ProjectsEnum.PERSONAL_MS_CLUSTER,
          ],
        },
        {
          type: 'Personal',
          description: 'Aplicación web para gestión del hogar (compras, recetas, tareas y finanzas) con ReactTS.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'Aplicación web para gestión de pólizas de seguros ReactTS.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
        {
          type: 'Personal',
          description: 'Aplicación web para documentar viajes con ReactJS.',
          references: [
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ],
        },
        {
          type: 'Personal',
          description: 'Portfolio de proyectos menores en Node.js.',
          references: [
            ProjectsEnum.PERSONAL_CV,
            ProjectsEnum.PERSONAL_CONVERTER,
            ProjectsEnum.PERSONAL_MODEL_VIEWER,
            ProjectsEnum.PERSONAL_SORTING_ALGORITHM,
          ],
        },

      ],
    },
    {
      name: 'Java - SpringBoot',
      icon: 'java.svg',
      description: 'Desarrollo de microservicios y aplicaciones en Java.',
      level: 'Intermedio',
      experience: 'Desde 2018',
      bulletPoints: [
        'Microservicios con SpringBoot MVC y WebFlux.',
        'APIs REST con SpringBoot MVC.',
        'Desarrollo de aplicaciones en Java.',
        'Hibernate ORM.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - APH',
          description: 'Desarrollo de APIs REST y microservicios con SpringBoot MVC.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Personal',
          description: 'Cluster de microservicios.',
          references: [
            ProjectsEnum.PERSONAL_MS_CLUSTER,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'Aplicación de gestión de empleados, control de operaciones, gestorías e hipotecario con JavaFX.',
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
      description: 'Desarrollo de scripts y consultas SQL y diseño de bases de datos.',
      level: 'Avanzado',
      experience: 'Desde 2018',
      bulletPoints: [
        'Desarrollo de scripts y consultas SQL y diseño de bases de datos.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'Diseño y desarrollo de bases de datos SQLServer y OracleDB.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DATA_MASTERS,
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'Diseño y desarrollo de bases de datos SQLServer.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
            ProjectsEnum.SVF_WEB_SCRAPING,
            ProjectsEnum.SVF_ECOGAS,
          ],
        },
        {
          type: 'Personal',
          description: 'Diseño y desarrollo de bases de datos PostgreSQL y SQLite.',
          references: [
            ProjectsEnum.PERSONAL_HOME_MANAGEMENT,
            ProjectsEnum.PERSONAL_TRAVEL_JOURNAL,
          ]
        },
      ],
    },
    {
      name: 'Git',
      icon: 'git.svg',
      description: 'Uso de herramientas de control de versiones y gestión de proyectos.',
      level: 'Avanzado',
      experience: 'Desde 2018',
      bulletPoints: [
        'Uso de herramientas de control de versiones y gestión de proyectos.',
        'GitHub, GitLab.',
        'Implementación de scripts de despliegue continuo con Gitlab CI/CD.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'Uso de herramientas de control de versiones, gestión de proyectos e integración continua.',
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
          type: 'Profesional - SVF',
          description: 'Uso de herramientas de control de versiones y gestión de proyectos.',
        },
        {
          type: 'Personal',
          description: 'Uso de herramientas de control de versiones y gestión de proyectos.',
        },
      ],
    },
    {
      name: 'AWS',
      icon: 'aws.svg',
      description: 'Uso de herramientas de Amazon Web Services.',
      level: 'Avanzado',
      experience: 'Desde 2024',
      bulletPoints: [
        'Uso de herramientas de Amazon Web Services.',
        'AWS Lambda, S3, Cognito, ECS, Cloudwatch, API Gateway.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'Despliegue de servicios web en ECS.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Profesional - Airpharm',
          description: 'Microservicio serverless en Lambda.',
          references: [
            ProjectsEnum.APH_SERVERLESS,
          ],
        },
        {
          type: 'Profesional - Airpharm',
          description: 'Gestor documental con integración con S3 y Cognito.',
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
      description: 'Uso de herramientas de contenedorización.',
      level: 'Intermedio',
      experience: 'Desde 2024',
      bulletPoints: [
        'Uso de herramientas de contenedorización.',
        'Docker, Docker Compose.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'Contenerización de servicios web.',
          references: [
            ProjectsEnum.APH_CONTROL_TOWER,
            ProjectsEnum.APH_DATA_MASTERS,
            ProjectsEnum.APH_DOCVAULT,
            ProjectsEnum.APH_CLIENT_PORTAL,
            ProjectsEnum.APH_REST_APIS,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'Contenerización de aplicaciones.',
          references: [
            ProjectsEnum.SVF_INSURANCE,
          ],
        },
      ],
    },
    {
      name: 'Python',
      icon: 'python.svg',
      description: 'Desarrollo de aplicaciones y scripts en Python.',
      level: 'Intermedio',
      experience: 'Desde 2020',
      bulletPoints: [
        'Desarrollo de aplicaciones y scripts en Python.',
        'Uso de herramientas de control de versiones y gestión de proyectos.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - SVF',
          description: 'Aplicación de escritorio para gestión de tarifas de gas para compañía energética con Tkinter.',
          references: [
            ProjectsEnum.SVF_ECOGAS,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'Scripts de conversión de ficheros.',
        },
        {
          type: 'Profesional - SVF',
          description: 'Scripts de web scraping para acceder a webs corporativas de cliente.',
          references: [
            ProjectsEnum.SVF_WEB_SCRAPING,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'Scripts de interacción con Sharepoint para subida y descarga de documentos.',
          references: [
            ProjectsEnum.SVF_SHAREPOINT,
          ],
        },
        {
          type: 'Profesional - SVF',
          description: 'Scripts de automatización de tareas de gestión, empaquetado y envío de documentos.',
        },
        {
          type: 'Personal',
          description: 'Scripts de manipulación de sets de datos en Excel.',
        },
        {
          type: 'Personal',
          description: 'Pequeño portfolio de Python con diferentes scripts.',
          references: [
            ProjectsEnum.PERSONAL_PYTHON,
          ],
        },
      ],
    },
    {
      name: 'Kafka',
      icon: 'kafka.svg',
      description: 'Uso de herramientas de mensajería.',
      level: 'Intermedio',
      experience: 'Desde 2024',
      bulletPoints: [
        'Uso de herramientas de mensajería.',
        'Kafka, Zookeeper.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'Integración de microservicios mediante Kafka.',
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
      description: 'Desarrollo de aplicaciones en .Net.',
      level: 'Intermedio',
      experience: 'Desde 2025',
      bulletPoints: [
        'Desarrollo de API REST en .Net.',
        'Integración con bases de datos SQL.',
        'Implementación de proxies para comunicación con servicios externos.',
        'Integración con entornos cloud y servicios de terceros.',
        'Arquitectura clean.',
        'Implementación de autenticación y autorización.',
        'Uso de herramientas de control de versiones y gestión de proyectos.',
      ],
      projectsName: 'Proyectos',
      projects: [
        {
          type: 'Profesional - Airpharm',
          description: 'Continuación del desarrollo del backend del portal de clientes.',
          references: [
            ProjectsEnum.APH_CLIENT_PORTAL,
          ],
        },
        {
          type: 'Profesional - Airpharm',
          description: 'Desarrollo de múltiples APIs REST para obtención de datos maestros (clientes, productos, pedidos y seguimiento).',
          references: [
            ProjectsEnum.APH_REST_APIS,
          ],
        },
      ],
    },
  ]
};

export default skillsEs;
