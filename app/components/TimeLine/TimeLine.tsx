"use client";
import { Check, CircleCheckBig } from "lucide-react";
import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }: any) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }: any) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <CircleCheckBig className="text-blue-500 mr-2" />

        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="12th Grade 🤘🏻">
        Completed 12th from LAXMI INTERNATINAL SCHOOL sarigam,vapi.
      </Step>
      <Step title="Head-Boy 🎖️">
        During my 12th Grade, I got Elected as the Head-Boy of the school. I was
        responsible for organizing and leading various activities and events.
      </Step>
      <Step title="Got Into an Internatinal  School 🎓">
        Not able to understand English as i was comming from HINDI background,
        Got weak in studies grades went down.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Moved to Gujarat - Vapi 🌆">
        I moved to Vapi from my Hometown(Varanasi) along with my father.
      </Step>

      <Step title="10th Grade 📜">
        Scored 9.4/10 CGPA in 10th Grade. For me it was huge.
      </Step>
      {/* <Step title="React Enthusiast ⚒">
        Was introducted to React, took up a course on Udemy to get the hang of
        it. I haven't stopped since then.
      </Step>
      <Step title="Open Source Contributions ⚙️">
        Started contributing to open source on a daily basis. Contributed to
        smaller projects to learn more on the contributing part.
      </Step> */}
    </ul>
    <Divider />

    {/* <Year>1998</Year>
    <ul>
      <Step title="First Enginner was Born in My entire Blood Line 👶🏼 🍼" />
    </ul> */}
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Life Milestones and Progress
      </h3>
      <Year>2024</Year>
      <ul>
        <Step title="Officially beacame an Engineer 👨‍💻">
          <a href="https://algochurn.com" target="__blank"></a> I honered with
          B-Tech Degree from NIT-Surat in the presence of Hon’ble President of
          India <span className="font-bold">Smt. Droupadi Murmu</span>
        </Step>
      </ul>
      <Divider />
      <Year>2023</Year>
      <ul>
        <Step title="SDE-1 at IDS 🎉">
          <a href="https://algochurn.com" target="__blank"></a> As a Software
          Development Engineer. Working on their Flagship products
        </Step>
      </ul>
      <ul>
        <Step title="Got  Internship-Remote 🌏 ">
          <a href="https://algochurn.com" target="__blank"></a> Started as a
          front-end Intern at IDS. I was able to learn a lot from the experience
          and the mentorship.
        </Step>
      </ul>

      <Divider />
      <Year>2022</Year>
      <ul>
        <Step title="Exploring web development ">
          Started exploring web development. I started learning HTML, CSS and
          Javascript. I was also introduced to ReactJs.
        </Step>
        <Step title="DSA and Competitive Programming 💻">
          Started learning DSA and partecipating in competitive programming
          contents.
        </Step>
        {/* <Step title="Algochurn crosses 200 users 🤌🏻">
          <a href="https://algochurn.com" target="__blank">
            Algochurn
          </a>{" "}
          is now helping 200+ registered users and 14,000+ monthly users.
        </Step>
        <Step title="1,000+ Followers on Twitter 🌟">
          Crossed 1,000 mark on{" "}
          <a
            href="https://www.twitter.com/mannupaaji"
            className="font-semibold"
            target="__blank"
          >
            Twitter
          </a>
          . You can help increase the count by following me. 😉
        </Step>
        <Step title="Built and launched Algochurn 🍾">
          Built{" "}
          <a href="https://algochurn.com" target="__blank">
            Algochurn
          </a>
          , A platform to practice DS ALgo along with front-end to ace your next
          technical interview.
        </Step>
        <Step title="Promoted to Senior Software Engineer 🎉">
          Promoted to Senior Software Engineer - Worked on applications handling
          20,000+ users per day. Working on Web, Mobile, and even TV
          applications. 🔥
        </Step> */}
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Build DroneFlight Controller 🤖">
          Built{" "}
          <a href="https://www.tailwindmasterkit.com">DroneFlight Controller</a>
          , A drone flight controller built using Arduino and a gyroscope. This
          initiative garnered recognition from the esteemed SVNIT technical
          club, Drishti.
        </Step>
        <Step title="Got Nick Name (Tony Stark) 😁">
          Automated my Hostel room including Fan, Light and Door locks was
          controlled by voice commands and APP. My friends and juniors got
          facinated and gave me Nick Name.
        </Step>
        {/* <Step title="Created Covid-19 Vaccination slots notification system 💉">
          Integrated Vaccination slots notification system in covidrescue web
          app. Notified people whenever vaccination slot was available in their
          area and city.
        </Step> */}
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Pandemic 💀">
          Was a very tough time, Despite not having Laptop tring to manage
          studies on Online-Mode and getting away from core understanding of
          Electronics and Communication.
        </Step>
        {/* <Step title="Cleared GATE 2019 💯">
          Cleared GATE 2019 after 8 months of continuous studies. I still hate
          Computer System Architecture & Organization.
        </Step>
        <Step title="Competitive Programming 🏆">
          Cleared Hackerrank and Hackerearth contests. Got a strong grip on
          Competitive Programming.
        </Step>
        <Step title="Taught programming to students🥳">
          Taught fundamental programming to school students. It included Basic C
          programming, Introduction to Web Development and logic building.
        </Step> */}
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="College NIT - SURAT 💻">
          Excited to start my College Jounery got ECE branch looking forward to
          become an <span className="font-bold">ECE-Engineer</span>.
        </Step>
        <Step title="Yeah - Cracked JEE Mains ✨">
          One year of preparation for JEE Mains. I was able to crack the exams
          and got a good grade.
        </Step>
        {/* <Step title="Full-Stack Applications 🚀">
          Started freelancing, developed full-stack applications for clients
          ranging from E-Commerce stores to static landing pages.
        </Step>
        <Step title="GATE Preparation ⚛️">
          Started preparing for GATE (Graduate Aptitute Test in Engineering).
          Learnt all the Computer Science subjects again from scratch.
        </Step> */}
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Timeline;
