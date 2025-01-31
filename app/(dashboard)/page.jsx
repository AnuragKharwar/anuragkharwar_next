import React from "react";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Timeline from "@/components/TimeLine/TimeLine";
import { freeLanceJson, PortfolioJson } from "@/data/data";
import Experience from "@/components/Experience/Experience";
import Divider from "@/components/ui/divider";
import Education from "@/components/Education/Education";
import Footer from "@/components/ui/footer";
import Blogs from "@/components/Blogs/Blogs";
const page = () => {
  return (
    <div className="flex flex-col h-full px-8 ">
      <Header />
      <Divider className=" h-1 bg-teal-300 dark:bg-teal-200 animate-pulse duration-50 " />
      <Education />
      <Divider />
      {/* <Blogs /> */}
      {/* <Divider /> */}

      <div className="flex flex-col lg:gap-8">
        <Experience />
        <Divider />
        <Projects
          title="Freelance & Other Contributions"
          data={freeLanceJson}
        />
        <Divider />

        <Projects title="Projects" data={PortfolioJson} />
        <Divider />
      </div>

      <Timeline />
    </div>
  );
};

export default page;
