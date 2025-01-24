import React from "react";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Timeline from "@/components/TimeLine/TimeLine";
import { freeLanceJson, PortfolioJson } from "@/data/data";
import Experience from "@/components/Experience/Experience";
import Divider from "@/components/ui/divider";
import Education from "@/components/Education/Education";
import Footer from "@/components/ui/footer";
const page = () => {
  return (
    <div className="flex flex-col h-full px-8 ">
      <Header />
      <Divider className=" h-1 bg-teal-300 dark:bg-teal-200 animate-pulse duration-50 " />
      <Education />
      <Divider />

      <div className="flex flex-col lg:gap-8">
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
      <Footer />
    </div>
  );
};

export default page;
