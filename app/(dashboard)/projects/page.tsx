import Projects from "../../../components/Projects/Projects";
import React from "react";
import { PortfolioJson } from "@/data/data";
const Page = () => {
  return (
    <div className="px-8">
      <Projects title="Projects" data={PortfolioJson} />;
    </div>
  );
};

export default Page;
