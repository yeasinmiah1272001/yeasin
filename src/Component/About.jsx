import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/dev.jpg";
import cv from "../../public/yeasin.pdf";

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div id="about" className="py-10">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-4">
        {/* Left Side - Image */}
        <div
          // style={{
          //   clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          // }}
          className="w-[250px] h-[250px] sm:w-[300px] border-2  sm:h-[300px] lg:w-[400px] lg:h-[400px] flex-shrink-0"
          data-aos="fade-right" // AOS animation for image
        >
          <img
            className="w-full h-full object-cover p-4 rounded-lg"
            src={img}
            alt="Muhammed Faisal"
          />
        </div>

        {/* Right Side - About Information */}
        <div
          className="w-full lg:w-[486px] space-y-5 text-center lg:text-left"
          data-aos="fade-left" // AOS animation for text content
        >
          <h1 className="text-3xl sm:text-4xl font-bold border-b text-gray-400 border-gray-300 pb-2">
            𝔸𝕓𝕠𝕦𝕥 𝕄𝕖
          </h1>
          <p className="text-gray-600 border-b border-gray-300 pb-4">
            I'm a Frontend Developer skilled in HTML, CSS, and React.js,
            expanding my expertise in Next.js and TypeScript. I focus on
            creating responsive, user-friendly web applications using Tailwind
            CSS. I've worked across various industries, from agencies to
            startups, delivering modern solutions.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">
              <span className="text-gray-700">Name:</span> Md. Yeasin Miah
            </h3>

            <h3 className="font-semibold">
              <span className="text-gray-700">Phone:</span>+880 1910255376
            </h3>
            <h3 className="font-semibold">
              <span className="text-gray-700">E-mail:</span>{" "}
              yeasinmiah1272001@gmail.com
            </h3>
            <h3 className="font-semibold">
              <span className="text-gray-700">Address:</span> Lalbag kella,
              Dhaka, Bangladesh
            </h3>
          </div>
          <a
            href={cv}
            download="Yeasin.pdf"
            className="mt-4 w-40 h-12 bg-btnColor text-black shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center"
            data-aos="zoom-in" // AOS animation for the CV download button
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
