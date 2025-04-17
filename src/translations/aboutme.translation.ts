export interface AboutMeInformation {
  name: string;
  title: string;
  location: string;
  position: string;
  birthDate: string;
  description: string[];
}

interface AboutMeTranslations {
  es: AboutMeInformation;
  en: AboutMeInformation;
  de: AboutMeInformation;
}

const abouMeTranslations: AboutMeTranslations = {
  es: {
    name: 'Nombre',
    title: 'Sobre mí',
    location: 'Torrejón de Ardoz, Madrid, España',
    position: 'Desarrollador Full Stack - Ingeniero de Software',
    birthDate: '13/02/1995',
    description: [
      `Soy una persona entusiasta, motivada y muy dedicada a mi entorno profesional. La experiencia trabajando en equipo desde el inicio de mi carrera profesional me ha ayudado a desarrollar una cultura de equipo enfocada en el progreso colaborativo de proyectos y tareas. Mis áreas de conocimiento principales son Node.js, gestión de bases de datos, Python y Java, con conocimientos básicos de .NET y C.`,
      `Mi curiosidad me ayuda a mantener un aprendizaje constante. Tengo mucho interés por la tecnología en general y cómo evoluciona, principalmente en desarrollo e IA. La evolución de los modelos de IA desde el punto de vista de la ética, aprendiendo a implementar estas soluciones de una manera segura para sus usuarios y el medio ambiente es un tema que me parece muy relevante en el zeitgeist tecnológico actual.`,
      `El aprendizaje también lo llevo a expandir mis conocimientos de desarrollo. Mediante cursos, tutoriales y revisión de documentación de otros proyectos, estoy aprendiendo sobre tecnologías complementarias a los entornos en los que trabajo. En el último año he aprendido sobre Docker, Kubernetes y Terraform, así como sobre la implementación de pipelines de CI/CD. También he aprendido sobre la implementación de pruebas unitarias y de integración en mis proyectos.`,
      `Esta curiosidad también la desarrollo en el ámbito de los idiomas. Desde la infancia he estudiado inglés hasta alcanzar el bilingüismo, con nivel C2. En años recientes he aprendido alemán, hasta alcanzar un nivel B2 con título B2-Mittelstufe. Además, he podido desenvolverme en entornos nativos de estas lenguas al haber vivido en Canadá y Alemania durante varios meses. Como complemento, tengo un título B1 de francés y estoy aprendiendo algo de italiano.`,
    ],
  },
  en: {
    name: 'Name',
    title: 'About Me',
    location: 'Torrejón de Ardoz, Madrid, Spain',
    position: 'Full Stack Developer - Software Engineer',
    birthDate: '13/02/1995',
    description: [
      `I am an enthusiastic, motivated, and very dedicated person to my professional environment. The experience of working in a team since the beginning of my professional career has helped me develop a team culture focused on the collaborative progress of projects and tasks. My main areas of knowledge are Node.js, DB Management, Python, and Java, with basic knowledge of .NET and C.`,
      `My curiosity helps me maintain a constant learning process. I have a lot of interest in technology in general and how it evolves, mainly in development and AI. The evolution of AI models ethics-wise, learning how to safely implement these solutions in our current pipelines without disrupting the essence of what's being created or harming its users or the environment is a topic I find very relevant in the current technological zeitgeist.`,
      `I also carry this learning into expanding my development knowledge. Through courses, tutorials, and reviewing documentation from other projects, I am learning about complementary technologies to the environments I work in. In the last year, I have learned about Docker, Kubernetes, and Terraform, as well as implementing CI/CD pipelines. I have also learned about implementing unit and integration tests in my projects.`,
      `This curiosity also extends to the language field. Since childhood, I have studied English to achieve bilingualism, with a C2 level. In recent years, I have learned German, reaching a B2 level with a B2-Mittelstufe title. Additionally, I have been able to navigate native environments of these languages by living in Canada and Germany for several months. As a complement, I have a B1 title in French and am learning some Italian.`,
    ],
  },
  de: {
    name: 'Name',
    title: 'Über mich',
    location: 'Torrejón de Ardoz, Madrid, Spanien',
    position: 'Full Stack Entwickler - Software Ingenieur',
    birthDate: '13/02/1995',
    description: [
      `Ich bin eine begeisterte, motivierte und sehr engagierte Person in meinem beruflichen Umfeld. Die Erfahrung, seit Beginn meiner beruflichen Laufbahn im Team zu arbeiten, hat mir geholfen, eine Teamkultur zu entwickeln, die sich auf den gemeinsamen Fortschritt von Projekten und Aufgaben konzentriert. Meine Hauptkenntnisse sind Node.js, DB-Management, Python und Java, mit Grundkenntnissen in .NET und C.`,
      `Meine Neugierde hilft mir, ständig dazuzulernen. Ich interessiere mich sehr für Technologie im Allgemeinen und ihre Entwicklung, vor allem in den Bereichen Entwicklung und KI. Die Entwicklung von KI-Modellen unter ethischen Gesichtspunkten und die Frage, wie diese Lösungen auf sichere Weise für ihre Nutzer und die Umwelt umgesetzt werden können, ist ein Thema, das ich im heutigen technologischen Zeitgeist sehr relevant finde.`,
      `Lernen führt auch dazu, dass ich mein Entwicklungswissen erweitere. Durch Kurse, Tutorials und die Durchsicht von Dokumentationen anderer Projekte lerne ich Technologien kennen, die die Umgebungen, in denen ich arbeite, ergänzen. Im letzten Jahr habe ich etwas über Docker, Kubernetes und Terraform sowie die Implementierung von CI/CD-Pipelines gelernt. Ich habe auch gelernt, wie ich Unit- und Integrationstests in meinen Projekten implementiere.`,
      `Diese Neugierde entwickle ich auch auf dem Gebiet der Sprachen. Seit meiner Kindheit habe ich Englisch gelernt, bis ich die Zweisprachigkeit mit einem C2-Niveau erreichte. In den letzten Jahren habe ich Deutsch auf B2-Niveau mit einer B2-Mittelstufenqualifikation erlernt. Außerdem konnte ich mich in diesen Sprachen im muttersprachlichen Umfeld zurechtfinden, da ich mehrere Monate in Kanada und Deutschland gelebt habe. Außerdem habe ich einen B1-Abschluss in Französisch und lerne gerade etwas Italienisch.`,
    ],
  },
};

export default abouMeTranslations;