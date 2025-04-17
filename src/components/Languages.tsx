import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { BASE_ASSET_DIR, LanguagesEnum } from './entities/components.enum';
import '../style/css/languages.css';
import tableStyle from '@/style/table-style';
import CollapsibleSection from './togglers/CollapsibleSection';
import useLangStore, { LangStore } from '@/store/LangStore';
import languageTranslations, { LanguageInformation } from '@/translations/language.translation';
import { BiWorld } from "react-icons/bi";

const Languages = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translations: LanguageInformation = languageTranslations[language];

  const languages = [
    {
      name: LanguagesEnum.ES,
      listening: translations.native,
      reading: translations.native,
      speaking: translations.native,
      writing: translations.native,
      interaction: translations.native,
    },
    {
      name: LanguagesEnum.EN,
      listening: LanguagesEnum.C2,
      reading: LanguagesEnum.C2,
      speaking: LanguagesEnum.C2,
      writing: LanguagesEnum.C2,
      interaction: LanguagesEnum.C2,
    },
    {
      name: LanguagesEnum.DE,
      listening: LanguagesEnum.B2,
      reading: LanguagesEnum.B2,
      speaking: LanguagesEnum.C1,
      writing: LanguagesEnum.C1,
      interaction: LanguagesEnum.B2,
    },
    {
      name: LanguagesEnum.FR,
      listening: LanguagesEnum.B1,
      reading: LanguagesEnum.B1,
      speaking: LanguagesEnum.B1,
      writing: LanguagesEnum.B1,
      interaction: LanguagesEnum.B1,
    },
    {
      name: LanguagesEnum.IT,
      listening: LanguagesEnum.A2,
      reading: LanguagesEnum.A2,
      speaking: LanguagesEnum.A2,
      writing: LanguagesEnum.A2,
      interaction: LanguagesEnum.A2,
    },
  ];

  return (
    <CollapsibleSection title={translations.title} icon={<BiWorld />}>
      <TableContainer component={Paper} sx={tableStyle.table}>
        <Table>
          <TableHead sx={tableStyle.tableHeaderCell}>
            <TableRow sx={tableStyle.tableRow}>
              <TableCell sx={tableStyle.tableHeaderCell} />
              <TableCell sx={tableStyle.tableHeaderCell}>
                {translations.listening}
              </TableCell>
              <TableCell sx={tableStyle.tableHeaderCell}>
                {translations.reading}
              </TableCell>
              <TableCell sx={tableStyle.tableHeaderCell}>
                {translations.speaking}
              </TableCell>
              <TableCell sx={tableStyle.tableHeaderCell}>
                {translations.writing}
              </TableCell>
              <TableCell sx={tableStyle.tableHeaderCell}>
                {translations.conversation}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {languages.map((language) => (
              <TableRow key={language.name}>
                <TableCell>
                  <div className='langBubble'>
                    <img
                      src={`${BASE_ASSET_DIR}/languages/${language.name}.svg`}
                      alt={language.name}
                    />
                  </div>
                </TableCell>
                <TableCell sx={tableStyle.tableCell}>{language.listening}</TableCell>
                <TableCell sx={tableStyle.tableCell}>{language.reading}</TableCell>
                <TableCell sx={tableStyle.tableCell}>{language.speaking}</TableCell>
                <TableCell sx={tableStyle.tableCell}>{language.writing}</TableCell>
                <TableCell sx={tableStyle.tableCell}>{language.interaction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="languageLegend">
        {translations.legend.map((item, index: number) => (
          <div className="legendItem" key={index}>
            <div className="legendCircle"></div>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="languageExperience">
        {translations.experience.map((exp, index: number) => (
          <div className='languageExperienceItem' key={index}>
            <div className='languageExperienceItemName'>{exp.language}</div>
            <ul>
              {exp.experience.map((item, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Languages;
