import React from "react";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Timeline from "@/components/TimeLine/TimeLine";
import { freeLanceJson, PortfolioJson } from "@/data/data";
import Experience from "@/components/Experience/Experience";
import Divider from "@/components/ui/divider";
import Education from "@/components/Education/Education";
const page = () => {
  return (
    <div className="flex flex-col h-full px-8 ">
      <Header />
      <Divider className=" h-1 bg-teal-200 animate-pulse duration-50 " />
      <Education />
      <Divider />

      <div className="flex flex-col gap-8 mt-10">
        <Experience />
        <Divider />
        <Projects title="Projects" data={PortfolioJson} />
        <Divider />

        <Projects
          title="Freelance & Other Contributions"
          data={freeLanceJson}
        />
        <Divider />
      </div>

      <Timeline />
    </div>
  );
};

export default page;
