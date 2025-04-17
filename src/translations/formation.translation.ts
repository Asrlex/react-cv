export interface FormationInformation {
  formation: string;
  date: string;
  location?: string;
  duration?: string;
  description: string;
}

interface FormationTranslations {
  es: {
    title: string;
    formations: FormationInformation[];
  },
  en: {
    title: string;
    formations: FormationInformation[];
  },
  de: {
    title: string;
    formations: FormationInformation[];
  },
}

export const formationTranslations: FormationTranslations = {
  es: {
    title: "Formación",
    formations: [
      {
        formation: "Grado en Ingeniería Telemática",
        date: "2013 - 2020",
        location: "Universidad Politécnica de Madrid",
        description: "Grado en Ingeniería Telemática, con especialización en Desarrollo de Software, donde aprendí los fundamentos de computación, redes y programación.",
      },
      {
        formation: "React Bootcamp",
        date: "2022",
        duration: "3 meses",
        description: "Bootcamp de React, donde aprendí a desarrollar aplicaciones web utilizando React y sus ecosistemas.",
      },
      {
        formation: "SQL Bootcamp",
        date: "2019",
        duration: "2 meses",
        description: "Bootcamp de SQL, donde aprendí a gestionar bases de datos y realizar consultas complejas.",
      },
      {
        formation: "Google CyberSecurity Certification",
        date: "2024-2025",
        duration: "6 meses",
        description: "Certificación en Ciberseguridad de Google, donde aprendí pilares de ciberseguridad, gestión de riesgos y vulnerabilidades, y gestión de tareas de seguridad con Python y Bash.",
      },
      {
        formation: "IBM Machine Learning",
        date: "2024-2025",
        duration: "3 meses",
        description: "Certificación en Machine Learning de IBM, donde aprendí sobre algoritmos de ML supervisado y no-supervisado, y DL.",
      },
    ],
  },
  en: {
    title: "Education",
    formations: [
      {
        formation: "Bachelor's Degree in Telematics Engineering",
        date: "2013 - 2020",
        location: "Universidad Politécnica de Madrid",
        description: "Bachelor's degree in Telematics Engineering, specializing in Software Development, where I learned the fundamentals of computing, networks, and programming.",
      },
      {
        formation: "React Bootcamp",
        date: "2022",
        duration: "3 months",
        description: "React bootcamp, where I learned to develop web applications using React and its ecosystems.",
      },
      {
        formation: "SQL Bootcamp",
        date: "2019",
        duration: "2 months",
        description: "SQL bootcamp, where I learned to manage databases and perform complex queries.",
      },
      {
        formation: "Google CyberSecurity Certification",
        date: "2024-2025",
        duration: "6 months",
        description: "Google Cybersecurity certification, where I learned cybersecurity pillars, risk and vulnerability management, and security task management with Python and Bash.",
      },
      {
        formation: "IBM Machine Learning",
        date: "2024-2025",
        duration: "3 months",
        description: "IBM Machine Learning certification, where I learned about supervised and unsupervised ML algorithms, and DL.",
      },
    ],
  },
  de: {
    title: "Ausbildung",
    formations: [
      {
        formation: "Bachelor-Abschluss in Telematik-Engineering",
        date: "2013 - 2020",
        location: "Universidad Politécnica de Madrid",
        description: "Bachelor-Abschluss in Telematik-Engineering, mit Spezialisierung auf Software-Entwicklung, wo ich die Grundlagen der Informatik, Netzwerke und Programmierung gelernt habe.",
      },
      {
        formation: "React Bootcamp",
        date: "2022",
        duration: "3 Monate",
        description: "React Bootcamp, wo ich gelernt habe, Webanwendungen mit React und seinen Ökosystemen zu entwickeln.",
      },
      {
        formation: "SQL Bootcamp",
        date: "2019",
        duration: "2 Monate",
        description: "SQL Bootcamp, wo ich gelernt habe, Datenbanken zu verwalten und komplexe Abfragen durchzuführen.",
      },
      {
        formation: "Google CyberSecurity-Zertifizierung",
        date: "2024-2025",
        duration: "6 Monate",
        description: "Google Cybersecurity-Zertifizierung, wo ich die Grundlagen der Cybersicherheit, Risikomanagement und Schwachstellenmanagement sowie die Verwaltung von Sicherheitsaufgaben mit Python und Bash gelernt habe.",
      },
      {
        formation: "IBM Machine Learning",
        date: "2024-2025",
        duration: "3 Monate",
        description: "IBM Machine Learning-Zertifizierung, wo ich über überwachte und unüberwachte ML-Algorithmen sowie DL gelernt habe.",
      },
    ],
  },
}
