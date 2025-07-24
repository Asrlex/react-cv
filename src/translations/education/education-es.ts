import { EducationInformation } from './education.translation';

const educationES: {
  title: string;
  formations: EducationInformation[];
} = {
  title: 'Formación',
  formations: [
    {
      formation: 'Grado en Ingeniería Telemática',
      date: '2013 - 2020',
      location: 'Universidad Politécnica de Madrid',
      description: 'Grado en Ingeniería Telemática, con especialización en Desarrollo de Software, donde aprendí los fundamentos de computación, redes y programación.',
    },
    {
      formation: 'React Bootcamp',
      date: '2022',
      duration: '3 meses',
      description: 'Bootcamp de React, donde aprendí a desarrollar aplicaciones web utilizando React y sus ecosistemas.',
    },
    {
      formation: 'SQL Bootcamp',
      date: '2019',
      duration: '2 meses',
      description: 'Bootcamp de SQL, donde aprendí a gestionar bases de datos y realizar consultas complejas.',
    },
    {
      formation: 'Google CyberSecurity Certification',
      date: '2024-2025',
      duration: '6 meses',
      description: 'Certificación en Ciberseguridad de Google, donde aprendí pilares de ciberseguridad, gestión de riesgos y vulnerabilidades, y gestión de tareas de seguridad con Python y Bash.',
    },
    {
      formation: 'IBM Machine Learning',
      date: '2024-2025',
      duration: '3 meses',
      description: 'Certificación en Machine Learning de IBM, donde aprendí sobre algoritmos de ML supervisado y no-supervisado, y DL.',
    },
  ],
};

export default educationES;
