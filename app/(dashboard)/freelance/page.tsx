import Projects from "../../../components/Projects/Projects";
import React from "react";
import { freeLanceJson } from "@/data/data";
const Page = () => {
  return (
    <Projects title="Freelance & Other Contribution" data={freeLanceJson} />
  );
};

export default Page;
