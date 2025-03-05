import React from "react";
import ExperienceCard from "@/components/Experience/ExperienceCard";
const data = [
  {
    title: "Software Developer ",
    duration: "July 2023 - Present",
    details:
      "Working remotely for IDS developing front end for various internal tools and web Products. ",
    link: "https://idssoft.com/",
    imgUrl: "/assets/sde.png",
    isWorking: true,
    technologies: [
      "Js/Ts",
      "css/scss",
      "React",
      "Nextjs",
      "Graphql",
      "Blockchain",
    ],
    org: "IDS,Hyderabad",
  },
  {
    title: "Internship",
    duration: "Feb 2023 - May 2023",
    details: `Completed Internship on IDS developed Polyversity.io`,
    link: "https://www.polyversity.io/",
    imgUrl: "/assets/sde.png",
    isWorking: true,
    technologies: ["HTML", "CSS", "Javascript", "React", "Nextjs"],
    org: "IDS,Hyderabad",
  },
  {
    title: "Internship Trainee",
    duration: "June 2022 - July 2022",
    details:
      "The training consisted of Introduction to VLSI, HDL Coding Concepts in C language and verilog System Design. ",
    link: "",
    imgUrl: "/assets/sde.png",
    isWorking: true,
    technologies: ["Verilog", "embeded-c", "VHDL"],
    org: "Internsala,Delhi",
  },
];
const Experience = () => {
  return (
    <div className="flex flex-col h-full gap-4 ">
      <div className="flex items-start gap-4 justify-between">
        <h1 className="text-lg lg:text-3xl font-bold ">Work Experience</h1>
        {/* <p className="text-gray-500 dark:text-gray-400 text-sm mt-auto">
          2+ years
        </p> */}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data.map((experience: any, index: number) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            duration={experience.duration}
            description={experience.details}
            href={experience.link}
            logo={experience.imgUrl}
            isWorking={experience.isWorking}
            technologies={experience.technologies}
            org={experience.org}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
