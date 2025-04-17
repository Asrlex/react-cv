export interface LanguageInformation {
  title: string;
  listening: string;
  reading: string;
  speaking: string;
  writing: string;
  conversation: string;
  native: string;
  legend: string[];
  experience?: {
    language: string;
    experience: string[]
  }[];
}

interface LanguageTranslations {
  en: LanguageInformation;
  es: LanguageInformation;
  de: LanguageInformation;
}

const languageTranslations: LanguageTranslations = {
  es: {
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
  },
  en: {
    title: 'Languages',
    listening: 'Listening',
    reading: 'Reading',
    speaking: 'Speaking',
    writing: 'Writing',
    conversation: 'Conversation',
    native: 'Native',
    legend: [
      'A1 - Beginner',
      'A2 - Elementary',
      'B1 - Intermediate',
      'B2 - Upper Intermediate',
      'C1 - Advanced',
      'C2 - Proficient',
      'MS - Mother Tongue',
    ],
    experience: [
      {
        language: 'English',
        experience: [
          '25 years of experience',
          'Used in professional settings',
          'Lived abroad for 2 years',
          'In previous positions, I have acted as an interpreter for foreign clients.',
          'I have also translated technical documents and manuals.',
        ],
      },
      {
        language: 'German',
        experience: [
          '8 years of experience',
          'Used sparsely in professional settings',
        ],
      }
    ],
  },
  de: {
    title: 'Sprachen',
    listening: 'Hören',
    reading: 'Lesen',
    speaking: 'Sprechen',
    writing: 'Schreiben',
    conversation: 'Konversation',
    native: 'MS',
    legend: [
      'A1 - Anfänger',
      'A2 - Elementar',
      'B1 - Mittelstufe',
      'B2 - Obere Mittelstufe',
      'C1 - Fortgeschritten',
      'C2 - Beherrschung',
      'MS - Muttersprache',
    ],
    experience: [
      {
        language: 'Englisch',
        experience: [
          '25 Jahre Erfahrung',
          'In professionellen Umgebungen verwendet',
          '2 Jahre im Ausland gelebt',
          'In früheren Positionen habe ich als Dolmetscher für ausländische Kunden fungiert.',
          'Ich habe auch technische Dokumente und Handbücher übersetzt.',
        ],
      },
      {
        language: 'Deutsch',
        experience: [
          '8 Jahre Erfahrung',
          'Verwendet in professionellen Umgebungen',
        ],
      }
    ],
  },
};

export default languageTranslations;