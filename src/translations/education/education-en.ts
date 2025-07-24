import { EducationInformation } from './education.translation';

const educationEN: {
  title: string;
  formations: EducationInformation[];
} = {
  title: 'Education',
  formations: [
    {
      formation: 'Bachelor´s Degree in Telematics Engineering',
      date: '2013 - 2020',
      location: 'Universidad Politécnica de Madrid',
      description: 'Bachelor´s degree in Telematics Engineering, specializing in Software Development, where I learned the fundamentals of computing, networks, and programming.',
    },
    {
      formation: 'React Bootcamp',
      date: '2022',
      duration: '3 months',
      description: 'React bootcamp, where I learned to develop web applications using React and its ecosystems.',
    },
    {
      formation: 'SQL Bootcamp',
      date: '2019',
      duration: '2 months',
      description: 'SQL bootcamp, where I learned to manage databases and perform complex queries.',
    },
    {
      formation: 'Google CyberSecurity Certification',
      date: '2024-2025',
      duration: '6 months',
      description: 'Google Cybersecurity certification, where I learned cybersecurity pillars, risk and vulnerability management, and security task management with Python and Bash.',
    },
    {
      formation: 'IBM Machine Learning',
      date: '2024-2025',
      duration: '3 months',
      description: 'IBM Machine Learning certification, where I learned about supervised and unsupervised ML algorithms, and DL.',
    },
  ],
};

export default educationEN;
