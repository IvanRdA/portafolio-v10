"use client";

import { useTranslation } from "react-i18next";
import { mainSkillsDictionary } from "@/mocks/skills";
import { useState } from "react";

export default function SkillsBottomSection() {
  const { t } = useTranslation();

  const getInitialState = () => {
    const state = [{}, {}, {}, {}];
    Object.keys(mainSkillsDictionary.frontend).forEach((skill) => {
      state[0][skill] = { state: false };
    });

    Object.keys(mainSkillsDictionary.backend).forEach((skill) => {
      state[1][skill] = { state: false };
    });

    Object.keys(mainSkillsDictionary.database).forEach((skill) => {
      state[2][skill] = { state: false };
    });

    Object.keys(mainSkillsDictionary.general).forEach((skill) => {
      state[3][skill] = { state: false };
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
      <section className="flex flex-col justify-start items-center h-[100%] w-[100%] overflow-x-auto">
        <article className="grid grid-flow-row grid-cols-4 gap-2 auto-cols-auto justify-center justify-items-center content-start w-[100%] text-blue-chill-50">
          <div className="flex flex-col w-[50%] h-[100%] justify-start items-center">
            <strong>
              <h3 className="font-ojuju text-xl text-blue-chill-800">
                {t("Skills.FrontendTitle")}
              </h3>
            </strong>
            {Object.keys(mainSkillsDictionary.frontend).map(
              (dictKey, index) => {
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
                        ? t(mainSkillsDictionary.frontend[dictKey].name)
                        : t(mainSkillsDictionary.frontend[dictKey].useCase)}
                    </h5>
                  </div>
                );
              }
            )}
          </div>

          <div className="flex flex-col w-[50%] h-[100%] justify-center items-center">
            <strong>
              <h3 className="font-ojuju text-xl text-blue-chill-800">
                {t("Skills.BackendTitle")}
              </h3>
            </strong>
            {Object.keys(mainSkillsDictionary.backend).map((dictKey, index) => {
              const skillState = SkillDescr[1][dictKey].state;
              return (
                <div
                  key={index}
                  onMouseEnter={(e) => {
                    updateSkillDescr(dictKey, "enter", 1);
                  }}
                  onMouseLeave={(e) => {
                    updateSkillDescr(dictKey, "out", 1);
                  }}
                  className="w-[100%] h-fit"
                >
                  <h5 className=" font-ojujuLight text-lg text-center mt-2">
                    {!skillState
                      ? t(mainSkillsDictionary.backend[dictKey].name)
                      : t(mainSkillsDictionary.backend[dictKey].useCase)}
                  </h5>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col w-[50%] h-[100%] justify-center items-center">
            <strong>
              <h3 className="font-ojuju text-xl text-blue-chill-800">
                {t("Skills.DatabaseTitle")}
              </h3>
            </strong>
            {Object.keys(mainSkillsDictionary.database).map(
              (dictKey, index) => {
                const skillState = SkillDescr[2][dictKey].state;
                return (
                  <div
                    key={index}
                    onMouseEnter={(e) => {
                      updateSkillDescr(dictKey, "enter", 2);
                    }}
                    onMouseLeave={(e) => {
                      updateSkillDescr(dictKey, "out", 2);
                    }}
                    className="w-[100%] h-fit"
                  >
                    <h5 className=" font-ojujuLight text-lg text-center mt-2">
                      {!skillState
                        ? t(mainSkillsDictionary.database[dictKey].name)
                        : t(mainSkillsDictionary.database[dictKey].useCase)}
                    </h5>
                  </div>
                );
              }
            )}
          </div>

          <div className="flex flex-col w-[50%] h-[100%] justify-center items-center">
            <strong>
              <h3 className="font-ojuju text-xl text-blue-chill-800">
                {t("Skills.GeneralTitle")}
              </h3>
            </strong>
            {Object.keys(mainSkillsDictionary.general).map((dictKey, index) => {
              const skillState = SkillDescr[3][dictKey].state;
              return (
                <div
                  key={index}
                  onMouseEnter={(e) => {
                    updateSkillDescr(dictKey, "enter", 3);
                  }}
                  onMouseLeave={(e) => {
                    updateSkillDescr(dictKey, "out", 3);
                  }}
                  className="w-[100%] h-fit"
                >
                  <h5 className=" font-ojujuLight text-lg text-center mt-2">
                    {!skillState
                      ? t(mainSkillsDictionary.general[dictKey].name)
                      : t(mainSkillsDictionary.general[dictKey].useCase)}
                  </h5>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
