"use client";

import { useState } from "react";
import TechsPreview from "./TechsPreview";
import MainButtons from "./MainButtons";
import PresentationSection from "./PresentationSection";
import Snippets from "./Snippets";

export default function MainPage() {
  const [renderEle, setRenderEle] = useState(0);

  return (
    <>
      <section
        className={`w-[100%] md:w-[80%] flex flex-col h-[100%] md:h-[90vh] justify-start items-center p-2 fadeIn`}
      >
        <article className="w-[100%] h-[100%] flex flex-col justify-start items-center">
          {renderEle === 0 && <PresentationSection />}

          <section className="flex flex-col justify-start items-center p-2 m-1 h-[100%] w-[100%]">
            {renderEle === 0 && <MainButtons handler={setRenderEle} />}
            <div className="flex flex-row justify-start items-center p-2 m-1 h-[100%] w-[100%]">
              {renderEle === 1 && <TechsPreview returner={setRenderEle} />}
              {renderEle === 2 && <Snippets returner={setRenderEle} />}
            </div>
          </section>
        </article>
      </section>
    </>
  );
}
