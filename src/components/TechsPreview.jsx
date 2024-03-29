"use client";
import { mainStackDictionary, OtherTechsDictionary } from "@/mocks/stacks";
import StackList from "./StackList";
import PreviewReturner from "./PreviewReturner";
import { useTranslation } from "react-i18next";

export default function TechsPreview(props) {
  const { returner } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="w-[100%] h-[100%] flex flex-col justify-start items-center fadeIn">
        <PreviewReturner returner={returner} />
        <strong>
          <h2 className="font-ojuju text-xl text-center mt-4">
            {t("Main.Snippets.TechsTitle")}
            <span className="fadeInNoDelay">.</span>
            <span className="fadeInDelayOne">.</span>
            <span className="fadeInDelayTwo">.</span>
          </h2>
        </strong>
        <section className="flex flex-row justify-center items-center p-2 h-[40vh] w-[100%]">
          <article className="flex flex-col justify-center items-center w-[50%]">
            <strong>
              <h3 className="text-2xl text-center font-ojuju">
                {t("Main.StackTitle")}
              </h3>
            </strong>
            <div className="w-[100%] flex flex-row row-span-4 justify-center items-center gap-2 mt-4 p-2 font-ojuju text-2xl text-blue-chill-800">
              <StackList stack={mainStackDictionary} />
            </div>
          </article>
          <article className="flex flex-col justify-center items-center w-[50%] text-justify p-2 font-nanum text-md">
            <strong>
              <h3 className="text-2xl text-center font-ojuju">
                {t("Main.OtherStackTitle")}
              </h3>
            </strong>
            <div className="w-[100%] flex flex-row justify-center items-center gap-2 mt-4 p-2 font-ojuju text-2xl text-blue-chill-800">
              <StackList stack={OtherTechsDictionary} />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
