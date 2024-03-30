"use client";

import { useTranslation } from "react-i18next";
import { SKILLS_DICTIONARY } from "@/assets/constants";
import { useState } from "react";

export default function SkillsMainSection() {
  const { t } = useTranslation();

  const getInitialState = () => {
    const state = [{}, {}];
    Object.keys(SKILLS_DICTIONARY.soft).forEach((skill) => {
      state[0][skill] = { state: false };
    });

    Object.keys(SKILLS_DICTIONARY.soft).forEach((skill) => {
      state[1][skill] = { state: false };
    });

    return state;
  };

  const [SkillDescr, setSkillDescr] = useState(getInitialState());

  const updateSkillDescr = (dictKey, event, branch) => {
    const updatedSkillDescr = { ...SkillDescr };
    updatedSkillDescr[branch][dictKey] = {
      state: event === "enter" ? true : false,
    };

    setSkillDescr(updatedSkillDescr);
  };

  return (
    <>
      <section className="flex flex-col justify-start mt-4 items-center h-[100%] w-[100%]">
        <article className="flex flex-row justify-center items-center w-[100%] mt-4 text-blue-chill-50">
          <div className="flex flex-col w-[50%] h-[100%] justify-center items-center">
            <strong>
              <h3 className="font-ojuju text-xl text-blue-chill-800 text-center">
                {t("Skills.SoftTitle")}
              </h3>
            </strong>
            {Object.keys(SKILLS_DICTIONARY.soft).map((dictKey, index) => {
              const skillState = SkillDescr[0][dictKey].state;
              return (
                <div
                  key={index}
                  onMouseEnter={(e) => {
                    updateSkillDescr(dictKey, "enter", 0);
                  }}
                  onMouseLeave={(e) => {
                    updateSkillDescr(dictKey, "out", 0);
                  }}
                  className="w-[100%] h-fit"
                >
                  <h5 className=" font-ojujuLight text-lg text-center mt-2">
                    {!skillState
                      ? t(SKILLS_DICTIONARY.soft[dictKey].name)
                      : t(SKILLS_DICTIONARY.soft[dictKey].description)}
                  </h5>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col w-[50%] h-[100%] justify-center items-center">
            <strong>
              <h3 className="font-ojuju text-xl text-blue-chill-800 text-center">
                {t("Skills.TechnicalTitle")}
              </h3>
            </strong>

            {Object.keys(SKILLS_DICTIONARY.technical).map((dictKey, index) => {
              const skillState = SkillDescr[1][dictKey].state;

              return (
                <h5
                  key={index}
                  onMouseEnter={(e) => {
                    updateSkillDescr(dictKey, "enter", 1);
                  }}
                  onMouseLeave={(e) => {
                    updateSkillDescr(dictKey, "out", 1);
                  }}
                  className="font-ojujuLight text-lg text-center mt-2"
                >
                  {!skillState
                    ? t(SKILLS_DICTIONARY.technical[dictKey].name)
                    : t(SKILLS_DICTIONARY.technical[dictKey].description)}
                </h5>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
