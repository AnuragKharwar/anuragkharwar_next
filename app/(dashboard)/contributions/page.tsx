import Projects from "../../../components/Projects/Projects";
import React from "react";
import { freeLanceJson } from "@/data/data";
const Page = () => {
  return (
    <div className="px-8">
      <Projects title="Freelance & Other Contribution" data={freeLanceJson} />
    </div>
  );
};

export default Page;
