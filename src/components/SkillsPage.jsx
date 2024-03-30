"use client";

import SkillsMainSection from "./SkillsMainSection";
import SkillsBottomSection from "./SkillsBottomSection";
import { useTranslation } from "react-i18next";

export default function SkillsPage() {
  const { t } = useTranslation();
  return (
    <>
      <section
        className={`w-[80%] flex flex-col h-[100%] md:h-[90vh] justify-start items-center p-2 text-blue-chill-50 fadeIn`}
      >
        <article className="w-[100%] h-[100%] flex flex-col justify-start items-center">
          <strong>
            <h1 className="font-ojuju text-3xl text-center mt-2">
              {t("Skills.Title")}
            </h1>
          </strong>
          <SkillsMainSection />
          <SkillsBottomSection />
        </article>
      </section>{" "}
    </>
  );
}
