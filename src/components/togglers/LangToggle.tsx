import { useState } from 'react';
import useLangStore, { LangStore } from '../../store/LangStore';
import React from 'react';
import { LangEnum } from '../entities/components.enum';

const LangToggle = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const toggleLanguage = useLangStore((state: LangStore) => state.toggleLanguage);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      toggleLanguage();
      setAnimate(false);
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`langToggler ${language.toLowerCase()} ${animate ? 'animate' : ''}`}
      title={
        language === LangEnum.EN
          ? 'English'
          : language === LangEnum.ES
            ? 'Español'
            : 'Deutsch'
      }
    />
  );
};

export default LangToggle;