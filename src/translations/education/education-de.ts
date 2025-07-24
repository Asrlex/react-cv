import { EducationInformation } from './education.translation';

const educationDE: {
  title: string;
  formations: EducationInformation[];
} = {
  title: 'Ausbildung',
  formations: [
    {
      formation: 'Bachelor-Abschluss in Telematik-Engineering',
      date: '2013 - 2020',
      location: 'Universidad Politécnica de Madrid',
      description: 'Bachelor-Abschluss in Telematik-Engineering, mit Spezialisierung auf Software-Entwicklung, wo ich die Grundlagen der Informatik, Netzwerke und Programmierung gelernt habe.',
    },
    {
      formation: 'React Bootcamp',
      date: '2022',
      duration: '3 Monate',
      description: 'React Bootcamp, wo ich gelernt habe, Webanwendungen mit React und seinen Ökosystemen zu entwickeln.',
    },
    {
      formation: 'SQL Bootcamp',
      date: '2019',
      duration: '2 Monate',
      description: 'SQL Bootcamp, wo ich gelernt habe, Datenbanken zu verwalten und komplexe Abfragen durchzuführen.',
    },
    {
      formation: 'Google CyberSecurity-Zertifizierung',
      date: '2024-2025',
      duration: '6 Monate',
      description: 'Google Cybersecurity-Zertifizierung, wo ich die Grundlagen der Cybersicherheit, Risikomanagement und Schwachstellenmanagement sowie die Verwaltung von Sicherheitsaufgaben mit Python und Bash gelernt habe.',
    },
    {
      formation: 'IBM Machine Learning',
      date: '2024-2025',
      duration: '3 Monate',
      description: 'IBM Machine Learning-Zertifizierung, wo ich über überwachte und unüberwachte ML-Algorithmen sowie DL gelernt habe.',
    },
  ],
};

export default educationDE;
