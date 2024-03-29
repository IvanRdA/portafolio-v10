"use client";

import { useTranslation } from "react-i18next";
import ContactMainSection from "./ContactMainSection";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <strong>
        <h1 className="font-ojuju text-3xl text-center mt-2">
          {t("Contact.Title")}
        </h1>
      </strong>
      <section
        className={`w-[80%] flex flex-col h-[90vh] justify-center items-center p-2 text-blue-chill-50 pixelGrow`}
      >
        <article className="w-[100%] h-[90%] flex flex-col justify-center items-center">
          <ContactMainSection />
        </article>
      </section>
    </>
  );
}
