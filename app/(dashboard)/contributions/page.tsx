import Projects from "../../../components/Projects/Projects";
import React from "react";
import { freeLanceJson } from "@/data/data";
const Page = () => {
  return (
    <div className="px-8">
      <Projects title="Other Contributions" data={freeLanceJson} />
    </div>
  );
};

export default Page;
