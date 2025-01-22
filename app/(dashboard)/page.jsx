import React from "react";
import Header from "@/Components/Header/Header";
import Projects from "@/Components/Projects/Projects";
import Timeline from "@/Components/TimeLine/TimeLine";
import { freeLanceJson, PortfolioJson } from "@/data/data";
const page = () => {
  return (
    <div className="flex flex-col h-full px-8 ">
      <Header />
      <div className="flex flex-col gap-8 mt-10">
        <Projects title="Projects" data={PortfolioJson} />
        <Projects
          title="Freelance & Other Contributions"
          data={freeLanceJson}
        />
      </div>

      <Timeline />
    </div>
  );
};

export default page;
