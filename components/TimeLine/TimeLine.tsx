"use client";
import { Check, CircleCheckBig } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import Divider from "../ui/divider";

const Year = ({ children }: any) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="mb-4 ">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <CircleCheckBig className="text-blue-500 mr-2" />
        <p className="font-medium  text-gray-900 dark:text-gray-100 ">
          {title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-8">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="12th Grade 🤘🏻">
        Graduated from LAXMI International School, Sarigam, Vapi. The struggle
        was real, but I made it!
      </Step>
      <Step title="Head-Boy 🎖️">
        Elected as the Head-Boy of the school—organizing events, leading
        activities, and feeling like a boss (sort of).
      </Step>
      <Step title="Entered an International School 🎓">
        Coming from a Hindi background, I found myself lost in translation.
        Struggled with English, grades took a dive, but hey, growth happens in
        tough times.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Moved to Gujarat - Vapi 🌆">
        Relocated from my hometown, Varanasi, to Vapi with my dad. A fresh start
        in a new place!
      </Step>
      <Step title="10th Grade 📜">
        Scored 9.4/10 CGPA in 10th Grade. Felt like a superhero in my own story.
      </Step>
    </ul>
    <Divider />
  </>
);

const Timeline = ({ className }: { className: string }) => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <div className={`${className}`}>
      <h3 className="font-bold text-lg lg:text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Life Milestones and Progress
      </h3>
      <Year>2024</Year>
      <ul>
        <Step title="Officially Became an Engineer (Convocation) 👨‍💻">
          Honored with a B.Tech Degree from NIT-Surat in the presence of the
          Hon’ble President of India,{" "}
          <span className="font-bold">Smt. Droupadi Murmu</span>. Achievement
          unlocked!
        </Step>
      </ul>
      <Divider />
      <Year>2023</Year>
      <ul>
        <Step title="SDE-1 at IDS 🎉">
          Joined as a Software Development Engineer. Working on their flagship
          products—feeling like a coding ninja.
        </Step>
        <Step title="Got an Internship-Remote 🌏">
          Started as a front-end intern at IDS. Learned a lot, broke some code,
          but gained invaluable experience.
        </Step>
      </ul>
      <Divider />
      <Year>2022</Year>
      <ul>
        <Step title="Explored Web Development">
          Dived into HTML, CSS, and JavaScript. Got introduced to ReactJS and
          never looked back!
        </Step>
        <Step title="DSA and Competitive Programming 💻">
          Began learning Data Structures and Algorithms while participating in
          competitive programming contests. A nerdy yet thrilling phase!
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Built a Drone Flight Controller 🤖">
          Built a <a href="">Drone Flight Controller</a> using Arduino and a
          gyroscope. Recognized by the prestigious SVNIT technical club,
          Drishti. Felt like Iron Man—almost.
        </Step>
        <Step title="Earned a Nickname 😁">
          Automated my hostel room with voice-controlled fans, lights, and door
          locks. Friends got fascinated and started calling me... wait for it...
          Marvel fans, unite!
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="The Beginning 🌞">
          Started programming with Arduino using C, later moved to Python for a
          face recognition project. Baby steps into the tech world!
        </Step>
        <Step title="Dhristi - Tech club 🌞">
          Selected in Dhristi-AERO Team 🛩️, I was always enthusiastic about
          planes and drones built them it is my <strong>'Hobby'</strong> now.
          later became mentor.
        </Step>
        <Step title="Pandemic Diaries 💀">
          Explored electronics and built projects on microcontrollers and
          microprocessors. Fell headfirst into the world of programming.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Once a cadet always a cadet 💪">
          Joined National Cadet Corps (NCC) Army-wing had an amazing experience
          for next 3 year.
        </Step>
        <Step title="Cracked JEE Mains ✨">
          After a year of rigorous preparation, I cracked JEE Mains and secured
          a good rank. A milestone that made all the hard work worth it!
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <Button
          text="See More"
          onClick={() => showFullTimeline(true)}
          icon={true}
        />
      )}
    </div>
  );
};

export default Timeline;
