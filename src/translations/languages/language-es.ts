import { LanguageInformation } from "./language.translation";

const languageES: LanguageInformation = {
  title: 'Idiomas',
  listening: 'Escucha',
  reading: 'Lectura',
  speaking: 'Habla',
  writing: 'Escritura',
  conversation: 'Conversación',
  native: 'Nativo',
  legend: [
    'A1 - Principiante',
    'A2 - Elemental',
    'B1 - Intermedio',
    'B2 - Intermedio Alto',
    'C1 - Avanzado',
    'C2 - Competente',
    'MS - Lengua Materna',
  ],
  experience: [
    {
      language: 'Inglés',
      experience: [
        '25 años de experiencia',
        'Utilizado en entornos profesionales',
        'He vivido en el extranjero durante 2 años',
        'En puestos anteriores, he actuado como intérprete para clientes extranjeros.',
        'He traducido documentos técnicos y manuales.',
      ],
    },
    {
      language: 'Alemán',
      experience: [
        '8 años de experiencia',
        'Utilizado esporádicamente en entornos profesionales',
      ],
    }
  ],
};

export default languageES;
