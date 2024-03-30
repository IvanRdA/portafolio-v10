"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ContactMainSection() {
  const { t } = useTranslation();
  return (
    <section className="w-[100%] h-[100%] flex flex-col justify-center items-center font-ojuju text-lg shadow-xl shadow-blue-chill-800 p-8">
      <Image
        src="/picture.jpg"
        height={250}
        width={250}
        alt={t("Main.Picture")}
        title={t("Main.Picture")}
        className={`rounded-full m-6`}
      />
      <span className="flex flex-row justify-center items-center">
        <Image
          src="/icons/email.svg"
          height={40}
          width={40}
          alt={t("Contact.Email")}
          title={t("Contact.Email")}
          className={`rounded-full m-6 shadow-sm shadow-blue-chill-800`}
        />
        <a href="mailto:ivanrodriguezdeantonio@gmail.com" target="_blank">
          ivanrodriguezdeantonio@gmail.com
        </a>
      </span>

      <span className="flex flex-row  justify-center items-center">
        <Image
          src="/icons/linkedin.svg"
          height={40}
          width={40}
          alt={t("Contact.Linkedin")}
          title={t("Contact.Linkedin")}
          className={`rounded-full m-6 shadow-sm shadow-blue-chill-800`}
        />
        <a
          href="https://www.linkedin.com/in/iván-rodríguez-de-antonio-b26663119/"
          target="_blank"
        >
          LinkedIn
        </a>
      </span>

      <span className="flex flex-row  justify-center items-center">
        <Image
          src="/icons/github.svg"
          height={40}
          width={40}
          alt={t("Contact.Github")}
          title={t("Contact.Github")}
          className={`rounded-full m-6 shadow-sm shadow-blue-chill-800`}
        />
        <a href="https://github.com/IvanRdA" target="_blank">
          GitHub
        </a>
      </span>

      <span className="flex flex-row  justify-center items-center">
        <Image
          src="/icons/direction.svg"
          height={40}
          width={40}
          alt={t("Contact.Direction")}
          title={t("Contact.DirectionTitle")}
          className={`rounded-full m-6 shadow-sm shadow-blue-chill-800`}
        />
        {t("Contact.Direction")}
      </span>
    </section>
  );
}
