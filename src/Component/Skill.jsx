import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Skill = () => {
  // Set the first card (index 0) as the default active card
  const [activeCard, setActiveCard] = useState(0);

  const skills = [
    { icon: FaHtml5, title: "HTML", description: 90 },
    { icon: FaCss3Alt, title: "CSS", description: 90 },
    { icon: FaJsSquare, title: "JavaScript", description: 80 },
    { icon: SiTailwindcss, title: "TailwindCSS", description: 85 },
    { icon: FaReact, title: "React JS", description: 85 },
    { icon: SiFirebase, title: "Firebase", description: 85 },
    { icon: SiVercel, title: "Vercel", description: 50 },
    { icon: SiExpress, title: "Express JS", description: 50 },
    { icon: SiMongodb, title: "MongoDB", description: 50 },
  ];

  return (
    <div id="skill" className="bg-white py-10 lg:mx-20">
      <h1 className="text-center text-3xl font-bold text-gray-400 mb-8">
        My Skills
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {skills.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveCard(index)}
            className={`border-2 p-4 text-center w-full h-[250px] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
              activeCard === index ? "bg-btnColor text-white" : "bg-white"
            }`}
          >
            <div className="text-2xl mt-5 space-y-2 font-semibold mb-2 flex flex-col justify-center items-center">
              <span className="text-gray-500">
                {<service.icon size={70} />}
              </span>
              <h1 className="mt-2 text-2xl">{service.title}</h1>
            </div>

            {/* Animated CountUp for skill percentage */}
            <p className="text-gray-700 mb-4 text-xl">
              <CountUp start={0} end={service.description} duration={2} />%
            </p>

            <p className="text-black hover:underline flex justify-center items-center cursor-pointer">
              Explore <GoArrowUpRight size={16} className="ml-2" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
