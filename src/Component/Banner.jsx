import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import img from "../assets/yeasins.png";
import Header from "./Header";
import Typewriter from "typewriter-effect";
import cv from "../../public/yeasin.pdf";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-primaryColor py-10">
      <Header className="" />
      <div className="container sm:mt-16 mx-auto lg:mt-20 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        {/* Left side */}
        <div
          className="space-y-6 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-up" // AOS animation for the left section
        >
          <h1 className="text-4xl md:text-6xl font-light">
            Yeasin <span className="font-bold text-black">Miah</span>
          </h1>
          <div className="text-2xl">
            <Typewriter
              options={{
                strings: ["I am a Frontend Developer", "with React.js"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <a
            href={cv}
            download="Yeasin.pdf"
            className="mt-4 w-40 h-12 bg-btnColor text-black shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center"
            data-aos="fade-up" // AOS animation for the button
          >
            Download CV
          </a>
        </div>

        {/* Right side */}
        <div
          style={{
            clipPath:
              "polygon(76% 0, 100% 51%, 75% 100%, 25% 100%, 0 55%, 21% 0)",
          }}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-btnColor"
          data-aos="zoom-in" // AOS animation for the image section
        >
          <img
            className="w-full h-full object-cover p-8 rounded-lg mt-8"
            src={img}
            alt="Yeasin Miah"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
