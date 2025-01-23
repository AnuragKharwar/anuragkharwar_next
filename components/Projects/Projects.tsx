"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

const Projects = ({ title, data }: { title: string; data: any }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col h-full gap-4  ">
      <h1 className="text-lg lg:text-3xl font-bold">{title}</h1>

      {/* Initial Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data?.slice(0, 4).map((project: any) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            href={project.link}
            imageUrl={project.imgUrl}
            tags={project.stack}
            key={project.title}
            status={project?.status}
          />
        ))}
      </div>

      {/* Show More Projects */}
      {showMore && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.8, 0.25, 1], // Adds a smooth cubic-bezier effect
            when: "beforeChildren", // Stagger child animations
            staggerChildren: 0.2, // Delay between child animations
          }}
        >
          {data.slice(4, 8).map((project: any, index: number) => (
            <motion.div
              className="gap-4 flex"
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                href={project.link}
                imageUrl={project.imgUrl}
                tags={project.stack}
                status={project?.status}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className={`text-center items-center  text-teal-400`}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;
