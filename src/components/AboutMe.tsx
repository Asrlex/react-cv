import React from 'react';
import useLangStore, { LangStore } from '@/store/LangStore';
import { AboutMeInformation } from '@/translations/aboutme/aboutme.translation';
import '../style/css/aboutme.css';
import { FaAws, FaMapPin } from "react-icons/fa";
import { SiApachekafka, SiNestjs, SiPostgresql, SiPython, SiReact, SiSpringboot, SiTypescript } from "react-icons/si";
import { getAboutMeTranslations } from '@/translations/base.translation';

const AboutMe = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translation: AboutMeInformation = getAboutMeTranslations(language);

  return (
    <div className="aboutMe">
      <h1>Alejandro Sanchez Rodriguez</h1>
      <div className='aboutMeSection aboutMePosition'>
        {translation.position}
      </div>
      <div className='aboutMeSection aboutMeTools'>
        <SiSpringboot className='toolIcon'/>
        <SiTypescript className='toolIcon'/>
        <SiNestjs className='toolIcon'/>
        <SiReact className='toolIcon'/>
        <SiPostgresql className='toolIcon'/>
        <FaAws className='toolIcon'/>
        <SiApachekafka className='toolIcon'/>
        <SiPython className='toolIcon'/>
        </div>
      <div className='aboutMeSection'>
        <div className='aboutMeLocation'>
          <FaMapPin className='aboutMePin' />
          <div>{translation.location}</div>
        </div>
      </div>
      <div className='aboutMeSection aboutMeBirthDate'>
        {translation.birthDate}
      </div>
    </div>
  );
};

export default AboutMe;
