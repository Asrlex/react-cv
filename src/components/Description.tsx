import React from 'react';
import useLangStore, { LangStore } from '@/store/LangStore';
import aboutMeTranslations, { AboutMeInformation } from '@/translations/aboutme/aboutme.translation';
import '../style/css/aboutme.css';
import CollapsibleSection from './togglers/CollapsibleSection';
import { FaUser } from "react-icons/fa";

const Description = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translation: AboutMeInformation = aboutMeTranslations[language];

  return (
    <CollapsibleSection title={translation.title} icon={<FaUser />}>
      {translation.description.map((paragraph, index) => (
        <div key={index}>
          {paragraph}
          <br /><br />
        </div>
      ))}
    </CollapsibleSection>
  );
};

export default Description;