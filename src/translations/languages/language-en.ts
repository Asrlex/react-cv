import { LanguageInformation } from "./language.translation";

const languageEN: LanguageInformation = {
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
};

export default languageEN;
