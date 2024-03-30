"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PresentationSection() {
  const [blinking, setBlinking] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center p-2 m-1 h-[50%] w-[100%]">
        <article className="flex flex-col justify-center items-center w-[50%] mt-4 h-[100%]">
          <strong>
            <h1
              className={`font-ojuju text-3xl text-center mt-2 ${blinking}`}
              onMouseEnter={(e) => {
                setBlinking("blinking");
              }}
              onMouseOut={(e) => {
                setBlinking("");
              }}
            >
              IVÁN RODRÍGUEZ DE ANTONIO - {t("Main.Job")}
            </h1>
          </strong>
          <Image
            src="/picture.jpg"
            height={320}
            width={320}
            alt={t("Main.Picture")}
            title={t("Main.Picture")}
            className={`rounded-full m-6 pixelGrow`}
          />
          <a
            href="/resume.png"
            target="_blank"
            rel="noopener noreferrer"
            download="Ivan Rodriguez de Antonio.pdf"
          >
            <button
              className={`bg-blue-chill-100 text-blue-chill-600 p-2 hover:bg-blue-chill-800 hover:text-blue-chill-50 rounded-br-lg rounded-tl-lg font-ojuju hover:scale-105`}
            >
              {t("Main.Download")}
            </button>
          </a>
        </article>
        <article className="flex flex-col justify-center items-center w-[100%] md:w-[50%] text-justify p-2 font-ojujuLight text-lg mt-4">
          <p className="p-2">{t("Main.p1")}</p>
          <p className="p-2">{t("Main.p2")}</p>
          <p className="p-2">{t("Main.p3")}</p>
          <p className="p-2">{t("Main.p4")}</p>
        </article>
      </section>
    </>
  );
}
