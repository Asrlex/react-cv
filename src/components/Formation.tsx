import React from "react";
import CollapsibleSection from "./togglers/CollapsibleSection";
import { FormationInformation, formationTranslations } from "@/translations/formation.translation";
import useLangStore, { LangStore } from "@/store/LangStore";
import { IoSchoolSharp } from "react-icons/io5";
import "../style/css/formation.css";

function Formation() {
  const language = useLangStore((state: LangStore) => state.language);
  const translations: {
    title: string;
    formations: FormationInformation[];
  } = formationTranslations[language];

  return (
    <CollapsibleSection
      title={translations.title}
      icon={<IoSchoolSharp />}
    >
      {translations.formations.map((formation, index) => (
        <div key={index} className="formationSection">
          <div className="sectionItemTitle">{formation.formation}</div>
          <div className="formationBody">
            <div className="formationDetails">
              <div>{formation.date}</div>
              {formation.location && <div>{formation.location}</div>}
              {formation.duration && <div>{formation.duration}</div>}
            </div>
            <div className="formationDescription">{formation.description}</div>
          </div>
        </div>
      ))}
    </CollapsibleSection>
  );
}

export default Formation;
