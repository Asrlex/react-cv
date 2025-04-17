import React from 'react';
import useLangStore, { LangStore } from '@/store/LangStore';
import abouMeTranslations, { AboutMeInformation } from '@/translations/aboutme.translation';
import '../style/css/aboutme.css';
import CollapsibleSection from './togglers/CollapsibleSection';
import { FaUser } from "react-icons/fa";

const Description = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translation: AboutMeInformation = abouMeTranslations[language];

  return (
    <CollapsibleSection title={translation.title} icon={<FaUser />}>
      {translation.description.map((paragraph) => (
        <>
          {paragraph}
          <br /><br />
        </>
      ))}
    </CollapsibleSection>
  );
};

export default Description;