import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { BASE_ASSET_DIR, LangEnum, LangLevelEnum } from '../entities/components.enum';
import '../style/css/languages.css';
import tableStyle from '@/style/table-style';
import CollapsibleSection from './togglers/CollapsibleSection';
import useLangStore, { LangStore } from '@/store/LangStore';
import languageTranslations, { LanguageInformation } from '@/translations/languages/language.translation';
import { BiWorld } from "react-icons/bi";

const Languages = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translations: LanguageInformation = languageTranslations[language];

  const languages = [
    {
      name: LangEnum.ES,
      listening: translations.native,
      reading: translations.native,
      speaking: translations.native,
      writing: translations.native,
      interaction: translations.native,
    },
    {
      name: LangEnum.EN,
      listening: LangLevelEnum.C2,
      reading: LangLevelEnum.C2,
      speaking: LangLevelEnum.C2,
      writing: LangLevelEnum.C2,
      interaction: LangLevelEnum.C2,
    },
    {
      name: LangEnum.DE,
      listening: LangLevelEnum.B2,
      reading: LangLevelEnum.B2,
      speaking: LangLevelEnum.C1,
      writing: LangLevelEnum.C1,
      interaction: LangLevelEnum.B2,
    },
    {
      name: LangEnum.FR,
      listening: LangLevelEnum.B1,
      reading: LangLevelEnum.B1,
      speaking: LangLevelEnum.B1,
      writing: LangLevelEnum.B1,
      interaction: LangLevelEnum.B1,
    },
    {
      name: LangEnum.IT,
      listening: LangLevelEnum.A2,
      reading: LangLevelEnum.A2,
      speaking: LangLevelEnum.A2,
      writing: LangLevelEnum.A2,
      interaction: LangLevelEnum.A2,
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
