"use client";

import AboutMainSection from "./AboutMainSection";
import AboutCardsSection from "./AboutCardsSection";

export default function AboutPage() {
  return (
    <>
      <section
        className={`w-[100%] md:w-[80%] flex flex-col h-[100%] md:h-[90vh] justify-start items-center p-2 text-blue-chill-50 fadeIn`}
      >
        <article className="w-[100%] h-[100%] flex flex-col justify-center items-center">
          <AboutMainSection />
          <AboutCardsSection />
        </article>
      </section>{" "}
    </>
  );
}
