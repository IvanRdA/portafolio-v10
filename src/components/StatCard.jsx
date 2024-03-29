"use client";
import { STATS_CARD_DICTIONARY } from "@/assets/constants";
import { useTranslation } from "react-i18next";

export default function StatsCard(props) {
  const { dictKey } = props;
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center m-2 w-[100%] h-[100%] shadow-lg shadow-blue-chill-800 rounded-xl bg-blue-chill-200 text-blue-chill-600">
      <strong>
        <h3 className="text-2xl">{STATS_CARD_DICTIONARY[dictKey].mainValue}</h3>
      </strong>
      <h5 className="text-lg text-center">
        {t(STATS_CARD_DICTIONARY[dictKey].plainText)}
      </h5>
    </div>
  );
}
