"use client";

import PreviewReturner from "./PreviewReturner";
import { useTranslation } from "react-i18next";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import Carrousel from "./Carrousel";
import { useState } from "react";

export default function ProjectDetailed(props) {
  const { handler, project } = props;
  const { t } = useTranslation();

  const [codeVsPic, setCodeVsPic] = useState(0);

  return (
    <>
      <div className="w-[100%] h-[100%] mt-4 flex flex-col justify-start items-center fadeIn font-ojuju">
        <PreviewReturner returner={handler} returnValue={-1} />
        <strong>
          <h2 className="font-ojuju text-xl text-center mt-4">
            {t(project.title)}
            <span className="fadeInNoDelay">.</span>
            <span className="fadeInDelayOne">.</span>
            <span className="fadeInDelayTwo">.</span>
          </h2>
        </strong>
        <h3 className="text-lg">{project.type}</h3>

        <h3 className="text-lg">{t(project.state)}</h3>
        <section className="flex flex-row justify-start items-center p-2 h-[100%] w-[100%] gap-2">
          <div className="flex flex-col justify-start items-center w-[50%] h-[100%]">
            <i>
              <strong>
                <h4 className="text-lg">{t("Projects.ProblemTitle")}</h4>
              </strong>
              <p className="text-base text-justify">{t(project.problem)}</p>
            </i>
            <strong>
              <i>
                <h4 className="text-lg mt-2">{t("Projects.SolutionTitle")}</h4>
              </i>
              <p className="text-base text-justify">{t(project.solution)}</p>
            </strong>
          </div>

          <div className="flex flex-col justify-start items-center w-[50%] h-[100%]">
            <div className="flex flex-row w-[100%] h-[100%] justify-center items-center">
              <button
                className="w-[50%] h-fit bg-blue-chill-100 text-blue-chill-600 p-2 hover:bg-blue-chill-800 hover:text-blue-chill-50 rounded-br-lg rounded-tl-lg font-ojuju"
                onClick={(e) => setCodeVsPic(0)}
              >
                {t("Projects.ViewPictures")}
              </button>
              <button
                className="w-[50%] h-fit bg-blue-chill-100 text-blue-chill-600 p-2 hover:bg-blue-chill-800 hover:text-blue-chill-50 rounded-br-lg rounded-tl-lg font-ojuju"
                onClick={(e) => setCodeVsPic(1)}
              >
                {t("Projects.ViewCode")}
              </button>
            </div>
            <div className="flex flex-col w-[100%] h-[100%]">
              {codeVsPic === 1 && (
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

              {codeVsPic === 0 && <Carrousel links={project.pics} />}
            </div>
          </div>
        </section>
        <div className="flex flex-col w-[100%] h-[100%] justify-center items-center">
          <span className="flex flex-row gap-2">
            {project.tags.map((tag, idx) => {
              return (
                <p className="text-blue-chill-800" key={idx}>
                  #{tag}
                </p>
              );
            })}
          </span>

          <p>
            {t("Contact.RepositoryTitle")}:{" "}
            <a href={project.repository} target="_blank" nofollow noreferer>
              {project.repository}
            </a>
          </p>

          <p>
            URL:
            <a href={project.url} target="_blank" nofollow noreferer>
              {project.url}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
