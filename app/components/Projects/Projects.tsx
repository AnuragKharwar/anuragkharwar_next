import React from "react";
import ProjectCard from "@/Components/ui/ProjectCard";
const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
      <ProjectCard
        title="Canvasly.io"
        description="A tool created on top of exceli-draw to help you draw and edit diagrams. Supported BackEnd support for save works and team creations."
        href="https://canvasly.io"
        icon="canvasly"
        tags={[
          "Front-end",
          "Next.js",
          "React",
          "Nest-js",
          "TailwindCSS",
          "Canvas",
          "Exceli-Draw",
        ]}
      />

      {/* <ProjectCard
        title="Moonbeam"
        description="Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant."
        href="https://gomoonbeam.com"
        icon="moonbeam"
        tags={[
          "Front-end",
          "GPT-3",
          "Next.js",
          "React",
          "TailwindCSS",
          "Chrome Extension",
        ]}
      />
      <ProjectCard
        title="Moonbeam"
        description="Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant."
        href="https://gomoonbeam.com"
        icon="moonbeam"
        tags={[
          "Front-end",
          "GPT-3",
          "Next.js",
          "React",
          "TailwindCSS",
          "Chrome Extension",
        ]}
      />
      <ProjectCard
        title="Moonbeam"
        description="Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant."
        href="https://gomoonbeam.com"
        icon="moonbeam"
        tags={[
          "Front-end",
          "GPT-3",
          "Next.js",
          "React",
          "TailwindCSS",
          "Chrome Extension",
        ]}
      />
      <ProjectCard
        title="Moonbeam"
        description="Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant."
        href="https://gomoonbeam.com"
        icon="moonbeam"
        tags={[
          "Front-end",
          "GPT-3",
          "Next.js",
          "React",
          "TailwindCSS",
          "Chrome Extension",
        ]}
      /> */}
    </div>
  );
};

export default Projects;
