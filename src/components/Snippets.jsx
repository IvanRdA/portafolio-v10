"use client";

import PreviewReturner from "./PreviewReturner";
import CodeEditorBox from "./CodeEditorBox";
import { SNIPPETS_DICTIONARY } from "@/assets/constants";
import { useTranslation } from "react-i18next";

export default function Snippets(props) {
  const { returner } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="w-[100%] h-[100%] flex flex-col justify-start items-center fadeIn">
        <PreviewReturner returner={returner} />
        <section className="flex flex-row justify-center items-center p-2 m-1 h-[100%] w-[100%]">
          <article className="w-[80%] h-[100%]">
            <strong>
              <h2 className="font-ojuju text-xl text-center">
                {t("Main.Snippets.SnippetsTitle")}
                <span className="fadeInNoDelay">.</span>
                <span className="fadeInDelayOne">.</span>
                <span className="fadeInDelayTwo">.</span>
              </h2>
            </strong>
            <CodeEditorBox snippets={SNIPPETS_DICTIONARY} />
          </article>
        </section>
      </div>
    </>
  );
}
