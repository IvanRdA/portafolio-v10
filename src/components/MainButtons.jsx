"use client";

import { useTranslation } from "react-i18next";

export default function MainButtons(props) {
  const { handler } = props;
  const { t } = useTranslation();

  return (
    <>
      <strong>
        <h2 className="font-ojuju text-xl">
          {t("Main.PreviewTitle")}
          <span className="fadeInNoDelay">.</span>
          <span className="fadeInDelayOne">.</span>
          <span className="fadeInDelayTwo">.</span>
        </h2>
      </strong>
      <div className="flex flex-row w-[100%] h-[100%]  justify-center items-center m-0 gap-4 font-ojuju text-3xl">
        <button
          onClick={(e) => {
            handler(1);
          }}
          className={` bg-blue-chill-100 text-blue-chill-600 p-2 hover:bg-blue-chill-800 hover:text-blue-chill-50 rounded-br-lg rounded-tl-lg font-ojuju hover:scale-105`}
        >
          {t("Main.TechButton")}
        </button>
        <button
          onClick={(e) => {
            handler(2);
          }}
          className={`bg-blue-chill-100 text-blue-chill-600 p-2 hover:bg-blue-chill-800 hover:text-blue-chill-50 rounded-br-lg rounded-tl-lg font-ojuju hover:scale-105`}
        >
          {t("Main.SnippetsButton")}
        </button>
      </div>
    </>
  );
}
