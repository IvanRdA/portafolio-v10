"use client";

import { useTranslation } from "react-i18next";
import { projectTags, projectsDictionary } from "@/mocks/projects";
import { useState } from "react";
import Carrousel from "./Carrousel";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";

export default function ProjectsMainSection(props) {
  const { handler } = props;
  const { t } = useTranslation();
  const [projectType, setProjectType] = useState("All");
  const [tagType, setTagType] = useState("All");

  const getInitialProjects = () => {
    const allProjects = [];

    for (let key in projectsDictionary) {
      allProjects.push(projectsDictionary[key]);
    }

    return allProjects;
  };
  const [currentProjects, setCurrentProjects] = useState(getInitialProjects());

  const filterCurrProjectsByType = (type) => {
    if (type === "all") {
      return getInitialProjects();
    } else {
      const filtered = [];

      for (let key in projectsDictionary) {
        if (projectsDictionary[key].type === type) {
          filtered.push(projectsDictionary[key]);
        }
      }

      return filtered;
    }
  };

  const filterCurrProjectsByTag = (tag) => {
    if (tag === "all") {
      return getInitialProjects();
    } else {
      const filtered = [];

      Object.keys(projectsDictionary).forEach((key) => {
        if (projectsDictionary[key].tags.includes(tag)) {
          filtered.push(projectsDictionary[key]);
        }
      });

      return filtered;
    }
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setProjectType(newType);
    setTagType("all");
    setCurrentProjects(filterCurrProjectsByType(newType));
  };
  const handleTagChange = (e) => {
    const newTag = e.target.value;
    setTagType(newTag);
    setProjectType("all");
    setCurrentProjects(filterCurrProjectsByTag(newTag));
  };

  return (
    <>
      <section className="flex flex-col justify-start mt-4 items-center h-[100%] w-[100%] font-ojuju overflow-x-auto">
        <article className="flex flex-col justify-start items-center w-[100%] h-[100%] mt-4 text-blue-chill-50">
          <div className="flex flex-row w-[100%] h-[10%] justify-center items-center gap-4">
            <label htmlFor="by-side">
              {t("Projects.ByTypeLabel")}
              <select
                onChange={handleTypeChange}
                value={projectType}
                className="text-blue-chill-800"
                id="by-side"
              >
                <option value="All">{t("Projects.AllTitle")}</option>
                <option value="Frontend">{t("Skills.FrontendTitle")}</option>
                <option value="Backend">{t("Skills.BackendTitle")}</option>
                <option value="Fullstack">{t("Skills.FullstackTitle")}</option>
                <option value="General">{t("Skills.GeneralTitle")}</option>
              </select>
            </label>

            <label htmlFor="by-tag">
              {t("Projects.ByTagLabel")}
              <select
                onChange={handleTagChange}
                value={tagType}
                className="text-blue-chill-800"
                id="by-tag"
              >
                <option value="all">{t("Projects.AllTitle")}</option>
                {projectTags.map((tag, idx) => {
                  return (
                    <option key={idx} value={tag}>
                      {t(`Projects.ProjectTags.${idx}`)}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          {currentProjects.length === 0 ? (
            <h3 className="text-2xl text-blue-chill-800 text-center">
              {t("Projects.NoItemsFound")}
            </h3>
          ) : (
            <div className="grid grid-flow-row grid-cols-3 gap-2 auto-cols-max justify-start justify-items-start place-items-center h-[90%] w-[100%]">
              {currentProjects.map((project, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-start items-center w-[100%] h-[100%] shadow-lg shadow-blue-chill-800 bg-gradient-to-b from-blue-chill-800 to-blue-chill-700 p-2"
                  >
                    <button
                      onClick={(e) => handler(idx)}
                      className="border border-blue-chill-200/10 p-2"
                    >
                      <h3 className="text-lg text-blue-chill-400">
                        {t(project.title)}
                      </h3>
                    </button>
                    {project.code && (
                      <AceEditor
                        mode="javascript"
                        theme="solarized_dark"
                        value={project.code[0].code}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        readOnly={true}
                        setOptions={{
                          showLineNumbers: true,
                          tabSize: 2,
                        }}
                        style={{ width: "100%", height: "500px" }}
                      />
                    )}
                    {project.pics && <Carrousel links={project.pics} />}
                    <button onClick={(e) => handler(idx)}></button>
                    <h5>{project.type}</h5>
                    <p>{t(project.problem)}</p>
                    <p>
                      {t("Contact.RepositoryTitle")}:{" "}
                      <a>{project.repository}</a>
                    </p>
                    <p>
                      URL: <a>{project.url}</a>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </article>
      </section>
    </>
  );
}
