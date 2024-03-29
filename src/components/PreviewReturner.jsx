"use client";

import { useTranslation } from "react-i18next";

export default function PreviewReturner(props) {
  const { returner, returnValue } = props;
  const { t } = useTranslation();

  return (
    <button
      className={`w-[100%] bg-blue-chill-100 text-blue-chill-600 p-2 hover:bg-blue-chill-800 hover:text-blue-chill-50 rounded-br-lg rounded-tl-lg font-ojuju hover:scale-105`}
      onClick={(e) => returner(returnValue || 0)}
    >
      {t("Returner.Message")}
    </button>
  );
}
