import React from 'react';
import CollapsibleSection from './togglers/CollapsibleSection';
import useLangStore, { LangStore } from '@/store/LangStore';
import '../style/css/experience.css';
import { FaBriefcase } from "react-icons/fa";
import { BASE_ASSET_DIR } from '../entities/components.enum';
import { getExperienceTranslations } from '@/translations/base.translation';
import { ExperienceInformation } from '@/translations/experience/experience.translation';

const Experience = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translations: {
    title: string;
    experiences: ExperienceInformation[];
  } = getExperienceTranslations(language);

  return (
    <CollapsibleSection title={translations.title} icon={<FaBriefcase />}>
      {translations.experiences.map((job, index) => (
        <div className='experienceSection' key={index}>
          <div className='sectionItemTitle'>
            {job.position}
          </div>
          <div className="experienceBody">
            <div className='experienceField'>
              <img
                src={`${BASE_ASSET_DIR}/companies/${job.icon}`}
                alt={job.company}
                className='experienceIcon'
              />
              {job.company}
            </div>
            <div className='experienceField'>{job.location}</div>
            <div className='experienceField'>
              {job.dateStart} - {job.dateEnd}
            </div>
            <div className='experienceField'>{job.description}</div>
            <ul>
              {job.tasks.map((task: string, index: number) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </CollapsibleSection>
  );
};

export default Experience;