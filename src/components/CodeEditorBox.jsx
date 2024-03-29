"use client";

import { useState } from "react";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import CodeEditor from "./CodeEditor";

export default function CodeEditorBox({ snippets }) {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const { t } = useTranslation();

  const handlePrev = (e) => {
    e.preventDefault();
    const newCounter = activeSnippetIndex - 1;

    if (newCounter < 0) {
      setActiveSnippetIndex(Object.keys(snippets).length - 1);
    } else {
      setActiveSnippetIndex(newCounter);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    const newCounter = activeSnippetIndex + 1;

    if (newCounter > Object.keys(snippets).length - 1) {
      setActiveSnippetIndex(0);
    } else {
      setActiveSnippetIndex(newCounter);
    }
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-row justify-start items-start font-ojuju font-lg gap-4">
      <aside className="w-[10%] h-[100%] flex flex-col justify-center items-center">
        <button onClick={handlePrev}>
          <Image
            src="/icons/prev.svg"
            width={60}
            height={60}
            alt={t("Main.Prev")}
            title={t("Main.Prev")}
            className="hover:scale-105"
          />
        </button>
      </aside>

      <CodeEditor snippet={snippets[activeSnippetIndex]} />

      <aside className="w-[10%] h-[100%] flex flex-col justify-center items-center">
        <button onClick={handleNext}>
          <Image
            src="/icons/next.svg"
            width={60}
            height={60}
            alt={t("Main.Next")}
            title={t("Main.Next")}
            className="hover:scale-105"
          />
        </button>
      </aside>
    </div>
  );
}
