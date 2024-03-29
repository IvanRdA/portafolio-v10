"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/index";

export default function Navbar(props) {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("lang")
  );
  const { t } = useTranslation();
  const { handler } = props;
  const [flag, setFlag] = useState(currentLanguage);

  const handleFlagClick = (e) => {
    e.preventDefault();
    const newLanguage = currentLanguage === "eng" ? "spa" : "eng";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
    setFlag(newLanguage);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center p-2 w-[80%] h-[10vh] mb-2 font-ojuju text-xl`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-[100%]">
        <button onClick={handleFlagClick} className="w-fit h-fit">
          <Image
            src={`/${flag}.svg`}
            width={60}
            height={60}
            alt={flag === "spa" ? "Español" : "English"}
            title={t(`Navbar.FlagTitle.${flag}`)}
            className="hover:scale-105 p-2 items-center"
          />
        </button>
        <ul className={`flex flex-row justify-between items-center gap-10`}>
          <li
            onClick={(e) => {
              handler(1);
            }}
            className={`cursor-pointer hover:scale-110`}
          >
            {t("Navbar.Main")}
          </li>
          <li
            onClick={(e) => {
              handler(2);
            }}
            className="cursor-pointer hover:scale-110"
          >
            {t("Navbar.About")}
          </li>
          <li
            onClick={(e) => {
              handler(3);
            }}
            className="cursor-pointer hover:scale-110"
          >
            {t("Navbar.Skills")}
          </li>
          <li
            onClick={(e) => {
              handler(4);
            }}
            className="cursor-pointer hover:scale-110"
          >
            {t("Navbar.Projects")}
          </li>
          <li
            onClick={(e) => {
              handler(5);
            }}
            className="cursor-pointer hover:scale-110"
          >
            {t("Navbar.Contact")}
          </li>
        </ul>
      </div>
    </div>
  );
}
