"use client";
import React, { useEffect, useState } from "react";
import Themebutton from "./themebutton";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },

  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Timeline",
    link: "/timeline",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];

const mobileLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Experience",
    link: "/experience",
  },

  {
    name: "Timeline",
    link: "/timeline",
  },

  {
    name: "Contributions",
    link: "/contributions",
  },
  {
    name: "Blogs",
    link: "https://medium.com/@anuragkharwarwork",
  },
];

const Navbar = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center w-full h-fit pl-6 md:pl-0 ">
      <nav className="flex justify-between items-center w-full p-2 lg:px-8 lg:pt-8 mb-4 mt-4 md:mb-10 mx-auto bg-transparent">
        <Themebutton />
        <div className="hidden sm:block rounded-full  px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
          <Desktop
            links={links}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            pathName={pathName}
          />
        </div>
        <div className="block sm:hidden">
          <Mobile links={mobileLinks} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

export const Desktop = ({
  links,
  hoveredIndex,
  setHoveredIndex,
  pathName,
}: any) => {
  return (
    <>
      {links.map((navLink: any, index: number) => (
        <NextLink href={navLink.link} key={navLink.name}>
          <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0  transform bg-zinc-400 dark:bg-zinc-800 my-1 rounded-xl "
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span
              className={`relative z-10 ${
                pathName === navLink.link
                  ? "text-teal-600"
                  : "text-gray-600 dark:text-gray-50"
              }`}
            >
              {navLink.name}
            </span>
            {pathName === navLink.link && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            )}
          </div>
        </NextLink>
      ))}
    </>
  );
};

export const Mobile = ({ links }: any) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dropIn = {
    hidden: {
      y: "-4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  const handleClick = (link: any) => {
    setOpen(false);
    router.push(link);
  };

  useEffect(() => {
    console.log("open value", open);
  }, [open]);

  return (
    <div className="w-full flex flex-row items-center space-x-2 ">
      <button
        onClick={() => handleClick(links[0].link)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm  transition-all delay-150  "
      >
        {links[0]?.name}
      </button>
      <button
        onClick={() => handleClick(links[1].link)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm   transition-all delay-150  "
      >
        {links[1]?.name}
      </button>
      <Menu onClick={() => setOpen(!open)} className="cursor-pointer" />

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%]   p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-slate-900 divide-y dark:divide-gray-700"
          >
            {[...links].splice(2).map((el) => (
              <button
                key={el?.link}
                onClick={() => handleClick(el.link)}
                className="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm  dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-white text-left"
              >
                <AnimatePresence>
                  <span className="relative z-10">{el.name}</span>
                </AnimatePresence>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
