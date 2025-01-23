import React from "react";
import ExperienceCard from "@/components/Experience/ExperienceCard";
const data = [
  {
    title: "Software Developer ",
    duration: "Dec 2023 - Present",
    details:
      "Working remotely for Information Data System developing front end for web products. Responsibilities include creating and optimizing user interfaces, integrating APIs for dynamic data handling, managing state and store management with tools like Redux, implementing session handling for secure user authentication and data persistence, and ensuring responsive and accessible design across various devices and browsers. Additional tasks involve collaborating with backend developers, participating in code reviews, and maintaining up-to-date documentation.",
    link: "https://www.google.com",
    imgUrl: "/assets/sde.png",
    isWorking: true,
    technologies: ["HTML", "CSS", "Javascript", "React", "Nextjs"],
  },
  {
    title: "Internship",
    duration: "Sep 2023 - Dec 2023",
    details:
      "Working remotely for Information Data System developing front end for web products. Responsibilities include creating and optimizing user interfaces, integrating APIs for dynamic data handling, managing state and store management with tools like Redux, implementing session handling for secure user authentication and data persistence, and ensuring responsive and accessible design across various devices and browsers. Additional tasks involve collaborating with backend developers, participating in code reviews, and maintaining up-to-date documentation.",
    link: "https://www.google.com",
    imgUrl: "/assets/sde.png",
    isWorking: true,
    technologies: ["HTML", "CSS", "Javascript", "React", "Nextjs"],
  },
  {
    title: "Internship Trainee",
    duration: "June 2022 - July 2022",
    details:
      "The training consisted of Introduction to VLSI, HDL Coding Concepts in C language and System Design. The training was conducted in a classroom environment. The trainee was expected to attend the training sessions and complete the assigned tasks. The trainee was also expected to participate in group discussions and provide feedback to the instructor.",
    link: "https://www.google.com",
    imgUrl: "/assets/sde.png",
    isWorking: true,
    technologies: ["HTML", "CSS", "Javascript", "React", "Nextjs"],
  },
];
const Experience = () => {
  return (
    <div className="flex flex-col h-full gap-4 ">
      <div className="flex items-start gap-4 justify-between">
        <h1 className="text-lg lg:text-3xl font-bold ">Work Experience</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-auto">
          1 year 6 months
        </p>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
