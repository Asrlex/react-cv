import React, { Suspense } from 'react';
import CollapsibleSection from './togglers/CollapsibleSection';
import { FaFolderOpen } from "react-icons/fa";
import useLangStore, { LangStore } from '@/store/LangStore';
import { ProjectInformation } from '@/translations/portfolio/portfolio.translation';
import '../style/css/portfolio.css';
import { BASE_ASSET_DIR, Technology } from '../entities/components.enum';
import { getPortfolioTranslations } from '@/translations/base.translation';

const LazyEmblaCarousel = React.lazy(() => import('./carousel/EmblaCarousel'));

const Portfolio = () => {
  const language = useLangStore((state: LangStore) => state.language);
  const translations: ProjectInformation[] = getPortfolioTranslations(language);

  const emblaOptions = {
    loop: true,
    draggable: true,
    speed: 10,
    slidesToScroll: 1,
  };

  return (
    <CollapsibleSection title='Portfolio'
      icon={<FaFolderOpen />}
    >
      {translations.map((project, index) => (
        <div key={index}>
          <div className='portfolioSection' key={index} id={project.id}>
            <div className='sectionItemTitle'>
              {project.name}
            </div>
            <div className="portfolioBody">
              <div className='portfolioField'>
                {project.description}
              </div>
              {project.url && (
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </a>
                </div>
              )}
              <ul>
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className='portfolioTechnologies'>
                {project.technologies.map((tech: Technology, index: number) => (
                  <span key={index} className='portfolioTechnology'>
                    {tech.name}
                    {tech.icon &&
                      <img
                        src={`${BASE_ASSET_DIR}/tools/${tech.icon}.svg`}
                        alt={tech.name}
                        className='portfolioIcon'
                        title={tech.name}
                      />
                    }
                  </span>
                ))}
              </div>
              {project.images && <div className='portfolioImages'>
                <Suspense fallback={<div>Loading carousel...</div>}>
                  <LazyEmblaCarousel slides={project.images} options={emblaOptions} />
                </Suspense>
              </div>}
            </div>
          </div>
          <hr className={index < translations.length - 1 ? "divider" : "noDivider"} />
        </div>
      ))}
    </CollapsibleSection>
  );
};

export default Portfolio;
