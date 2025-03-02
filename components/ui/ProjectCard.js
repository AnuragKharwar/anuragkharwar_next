"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";


export default function ProjectCard({
  title,
  description,
  href,
  imageUrl,
  tags,
  status,
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
      className="group mb-4   hover:shadow-xl  rounded-xl  transition duration-200 relative border-[1px] border-slate-600 border-opacity-25 bg-slate-300 dark:bg-transparent"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full ">
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
        <div className=" flex flex-col items-start   dark:border-gray-800 rounded p-4 relative">
          {/* */}
          <div className="flex justify-between w-full items-start">
            <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            {status && (
              <p className="leading-6 bg-gray-200 dark:bg-zinc-700 text-gray-900 dark:text-gray-300 rounded-full px-2 py-1 text-xs hover:text-black">
                {status}
              </p>
            )}
          </div>
          <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
            {description}
          </p>

          <div className="pt-4 flex md:flex-row flex-wrap ">
            {tags?.map((tag, idx) => (
              <p
                key={idx}
                className={`leading-5 mb-2 dark:border dark:border-zinc-700 text-black dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-zinc-400/40 dark:bg-slate-800  mr-2 px-1`}
              >
                {tag}
              </p>
            ))}
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
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-lime-100 to-orange-100 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}
