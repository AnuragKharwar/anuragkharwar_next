"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  key,
  title,
  duration,
  description,
  technologies,
  href,
  logo,
  isWorking,
  org,
}) {
  // const tags = ["GitHub", "React", "JamStack"];
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <a
      className="group mb-4  hover:shadow-lg rounded-xl  transition duration-200 relative border-[1px] border-slate-600 border-opacity-25 bg-slate-300 dark:bg-transparent"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full  ">
        <span className="absolute w-[80%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-teal-500 to-teal-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px top-[10%] h-[80%] bg-gradient-to-b from-blue-500/0 via-teal-500 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-[10]"
        >
          <Image
            src={`/images/project.png`}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500"
          />
        </motion.div> */}
        <div className="flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
          {/* */}
          <div className="lg:grid grid-cols-9 w-full ">
            <div className="flex justify-between lg:grid col-span-2 ">
              <h4 className="text-md font-bold  text-gray-900 dark:text-gray-100 h-fit ">
                {title}
                <br />
                <span className="font-serif text-xs text-gray-500 dark:text-gray-400  lg:block hidden">
                  {org}
                </span>
              </h4>
              <span className="text-sm  mt-auto">Remote</span>
            </div>
            <div className="flex w-full justify-between text-gray-500 dark:text-gray-400 text-sm lg:ml-auto lg:hidden ">
              <span className="font-bold">{org}</span>
              <span>{duration}</span>
            </div>

            <div className="flex flex-col gap-4 lg:grid  col-span-7 mt-4 lg:mt-0">
              <p className="leading-6 text-gray-700 dark:text-gray-300">
                {description.slice(0, 150)}
              </p>
              <div className=" flex md:flex-row flex-wrap mt-1">
                {technologies?.map((tag, idx) => (
                  <p
                    key={idx}
                    className={`leading-5 mb-2 dark:border dark:border-zinc-700 text-black dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-zinc-400/40 dark:bg-slate-800  mr-2 px-1`}
                  >
                    {tag}
                  </p>
                ))}
                <p className="text-gray-500 dark:text-gray-400 text-xs lg:ml-auto lg:block hidden  ">
                  {duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function HoverPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200 to-teal-200/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}
