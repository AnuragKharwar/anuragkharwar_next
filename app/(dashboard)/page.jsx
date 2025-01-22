import React from "react";

import Header from "@/Components/Header/Header";
import Projects from "@/Components/Projects/Projects";

const page = () => {
  return (
    <div className="flex flex-col  h-full px-8 gap-16">
      <Header />
      <Projects />
    </div>
  );
};

export default page;
