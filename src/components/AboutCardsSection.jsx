"use client";
import StatsCard from "./StatCard";
import { useTranslation } from "react-i18next";
import { STATS_CARD_DICTIONARY } from "@/assets/constants";

export default function AboutCardsSection() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-start items-center p-2 m-1 h-[50%] w-[100%]">
      <strong>
        <h3 className="font-ojuju text-xl text-center mt-2">
          {t("About.StatsTitle")}
          <span className="fadeInNoDelay">.</span>
          <span className="fadeInDelayOne">.</span>
          <span className="fadeInDelayTwo">.</span>
        </h3>
      </strong>
      <article className="flex flex-col w-[100%] h-[100%] justify-center items-center mt-2 font-ojujuLight text-xl p-2">
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center h-[100%] w-[100%]">
          {Object.keys(STATS_CARD_DICTIONARY).map((dictKey, index) => {
            return <StatsCard key={index} dictKey={dictKey} />;
          })}
        </div>
      </article>
    </section>
  );
}
