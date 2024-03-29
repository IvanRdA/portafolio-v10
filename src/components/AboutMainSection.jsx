"use client";

import { useTranslation } from "react-i18next";
import { HOBBIES_DICTIONARY } from "@/assets/constants";
import SingleHobby from "./SingleHobby";

export default function AboutMainSection() {
  const { t } = useTranslation();
  return (
    <>
      <strong>
        <h1 className="font-ojuju text-3xl text-center mt-2">
          {t("About.Title")}
        </h1>
      </strong>
      <section className="flex flex-row justify-start items-center p-2 m-1 h-[50%] w-[100%]">
        <article className="flex flex-col justify-start items-center w-[50%] h-[100%] mt-4">
          <strong>
            <h3 className=" font-ojuju text-xl text-center mt-2">
              {t("About.DescriptionTitle")}
            </h3>
          </strong>
          <p className="text-lg text-justify font-ojujuLight">
            {t("About.Description.p1")}
          </p>
          <p className="text-lg text-justify font-ojujuLight">
            {t("About.Description.p2")}
          </p>
          <p className="text-lg text-justify font-ojujuLight">
            {t("About.Description.p3")}
          </p>
        </article>
        <article className="flex flex-col justify-start items-center w-[50%] h-[100%] text-justify font-ojujuLight text-lg mt-4">
          <strong>
            <h3 className=" font-ojuju text-xl text-center mt-2">
              {t("About.HobbiesTitle")}
            </h3>
          </strong>

          <div className="flex flex-col w-[100%] h-[100%] justify-start items-center gap-2">
            {Object.keys(HOBBIES_DICTIONARY).map((hobbie, idx) => {
              return (
                <div
                  className={`w-[60%] h-[100%] flex flex-row gap-0 p-2 bg-blue-chill-800 text-blue-chill-200 justify-evenly items-center rounded-lg`}
                  key={idx}
                >
                  <SingleHobby hobby={HOBBIES_DICTIONARY[hobbie]} />
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
