import {
  FileUser,
  Github,
  Linkedin,
  MailIcon,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex flex-row gap-4  items-center mt-2">
      <a
        href="https://drive.google.com/file/d/1PEGuvqDKlgl1soxAXCoibmSCw85vkxJY/view?usp=drive_link"
        target="_blank"
        className="flex gap-1 items-end bg-teal-200 rounded-lg px-2 py-1 text-black"
      >
        <FileUser className="  hover:text-green-500 " width={18} />
        <span className="text-sm  font-bold">Resume</span>
        {/* <Download className="text-2xl hidden hover:text-green-500 hover:visible" /> */}
      </a>
      <a href="https://github.com/AnuragKharwar" target="_blank">
        <Github className=" hover:text-green-500" width={20} />
      </a>
      <a href="https://www.linkedin.com/in/anurag-kharwar" target="_blank">
        <Linkedin className=" hover:text-blue-500" width={20} />
      </a>
      <a
        href="mailto:anuragkharwar@gmail.com?subject=Lets work together"
        target="_blank"
      >
        <MailIcon className=" hover:text-orange-500" width={20} />
      </a>

      {/* <a href="https://twitter.com/anuragkharwar" target="_blank">
        <MessageCircle className=" hover:text-green-500" width={20} />
      </a> */}
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/9558722476/"
        target="_blank"
      >
        {" "}
        <Image
          alt="Chat on WhatsApp"
          src="/whatsapp-dark.png"
          width={18}
          height={18}
          className="dark:block hidden"
        />
        <Image
          alt="Chat on WhatsApp"
          src="/whatsapp-light.png"
          width={18}
          height={18}
          className=" dark:hidden"
        />
        {/* <MessageCircle className=" hover:text-green-500" width={20} /> */}
      </a>
    </div>
  );
};
const ProfileSection = () => {
  return (
    <div className="w-full flex justify-between ">
      <div>
        <p className=" lg:text-2xl ">Anurag Kharwar</p>
        <h1 className="text-lg lg:text-4xl font-bold uppercase ">
          FrontEnd Developer
        </h1>
        <SocialIcons />

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Developer at{" "}
          <a className="font-semibold " href="www.idssoft.com">
            IDS{" "}
          </a>{" "}
          working as SDE-1 in the product team having 2+ years of experience.
        </p>
      </div>
      <div className="">
        <Image
          src={`/images/profilee.png`}
          alt="github"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ProfileSection;
