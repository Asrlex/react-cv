import React from 'react';
import CollapsibleSection from './togglers/CollapsibleSection';
import { FaTools } from "react-icons/fa";
import useLangStore, { LangStore } from '@/store/LangStore';
import { SkillInformation } from '@/translations/skills.translation';
import '../style/css/skills.css';
import { Link } from 'react-scroll';
import { BASE_ASSET_DIR } from './entities/components.enum';
import { getSkillsTranslations } from '@/translations/base.translation';

const Skills = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translations: {
    title: string;
    skills: SkillInformation[];
  } = getSkillsTranslations(language);

  return (
    <CollapsibleSection title={translations.title}
      icon={<FaTools />}
    >
      {translations.skills.map((skill, index) => (
        <div key={index}>
          <div className='skillsSection' key={index}>
            <div className='sectionItemTitle'>
              {skill.icon && (
                <img
                  src={`${BASE_ASSET_DIR}/tools/${skill.icon}`}
                  alt={skill.name}
                  className='skillsIcon'
                />
              )}
              <span>{skill.name}</span>
            </div>
            <div className="skillsBody">
              <div className='skillsDescription'>
                {skill.description}
              </div>
              <div className='skillsField'>
                {skill.level} - {skill.experience}
              </div>
              <div>
                <ul>
                  {skill.bulletPoints?.map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                {skill.projectsName && <strong>{skill.projectsName}</strong>}
                <ul>
                  {skill.projects?.map((project, index) => (
                    <li key={index} className='skillsProject'>
                      <strong>{project.type}</strong>: {project.description}
                      {' '}
                      {project.references && project.references.map((reference, index) => (
                        <Link
                          key={index}
                          title={reference}
                          className='skillsReference'
                          to={reference}
                          smooth={true}
                          duration={300}
                        >
                          [{index + 1}]{' '}
                        </Link>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className={index < translations.skills.length - 1 ? "divider" : "noDivider"} />
        </div>
      ))}
    </CollapsibleSection>
  );
};

export default Skills;
