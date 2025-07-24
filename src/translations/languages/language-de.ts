import { LanguageInformation } from "./language.translation";

const languageDE: LanguageInformation = {
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
};

export default languageDE;
