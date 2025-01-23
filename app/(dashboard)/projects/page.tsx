import Projects from "../../../components/Projects/Projects";
import React from "react";
import { PortfolioJson } from "@/data/data";
const Page = () => {
  return <Projects title="Projects" data={PortfolioJson} />;
};

export default Page;
