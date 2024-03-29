"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import AboutPage from "@/components/AboutPage";
import SkillsPage from "@/components/SkillsPage";
import ProjectsPage from "@/components/ProjectsPage";
import ContactPage from "@/components/ContactPage";

export default function Home() {
  const [contentComponent, setContentComponent] = useState(1);

  return (
    <>
      <main
        className={`flex h-[100%] w-[100%] flex-col items-center justify-center`}
      >
        <header
          className={`flex flex-col justify-center items-center w-[100%] h-[10vh]`}
        >
          <Navbar handler={setContentComponent} />
        </header>
        {contentComponent === 1 && <MainPage />}

        {contentComponent === 2 && <AboutPage />}

        {contentComponent === 3 && <SkillsPage />}

        {contentComponent === 4 && <ProjectsPage />}

        {contentComponent === 5 && <ContactPage />}
      </main>
    </>
  );
}
