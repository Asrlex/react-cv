import { ExperienceInformation } from "./experience.translation";

const experienceES: {
  title: string;
  experiences: ExperienceInformation[];
} = {
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
        'Desarrollo y mantenimiento de APIs REST y microservicios utilizando SpringBoot MVC y NestJS tanto con arquitectura clean como modular.',
        'Desarrollo de aplicaciones web utilizando Angular y React.',
        'Estandarización de modelos de datos y gestión de bases de datos utilizando SQLServer y OracleDB.',
        'Integración de sistemas con Kafka.',
        'Desarrollo de pipelines de CI/CD utilizando Gitlab CI.',
        'DevOps y gestión de infraestructura utilizando Docker, Kubernetes y Terraform en cloud AWS.',
        'Integración con utilidades AWS como S3, Lambda, Cognito y ECS.',
        'Gestión de proyectos y coordinación de equipos utilizando metodologías Agile y Jira.',
      ],
    },
    {
      position: 'Responsable de Desarrollo y Reingeniería de Procesos - BPM',
      icon: 'svf.jpg',
      company: 'Servinform - CSOIP CXB',
      location: 'Madrid, Madrid, España',
      dateStart: '13/08/2018',
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
};

export default experienceES;