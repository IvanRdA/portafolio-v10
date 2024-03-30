"use client";

import { useTranslation } from "react-i18next";
import ProjectsMainSection from "./ProjectsMainSection";
import { useState } from "react";
import ProjectDetailed from "./ProjectDetailed";
import { projectsDictionary } from "@/mocks/projects";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [detailed, setDetailed] = useState(-1);
  return (
    <>
      <section
        className={`w-[80%] flex flex-col h-[100%] md:h-[90vh] justify-start items-center p-2 text-blue-chill-50 fadeIn`}
      >
        <article className="w-[100%] h-[100%] flex flex-col justify-start items-center">
          <strong>
            <h1 className="font-ojuju text-3xl text-center mt-2">
              {t("Projects.Title")}
            </h1>
          </strong>
          {detailed === -1 && <ProjectsMainSection handler={setDetailed} />}

          {detailed !== -1 && (
            <ProjectDetailed
              handler={setDetailed}
              project={projectsDictionary[detailed]}
            />
          )}
        </article>
      </section>
    </>
  );
}
