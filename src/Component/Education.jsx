import React, { useEffect } from "react";
import { RiSingleQuotesL } from "react-icons/ri";
import img1 from "../assets/img.jpg";
import img2 from "../assets/p.png";
import img3 from "../assets/po.png";
import certificate from "../../public/certificate.pdf";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Education = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="education" className="py-16 bg-[#EFEEFC]">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-600 mb-8 md:mb-12">
        Educational Qualifications
      </h1>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {/* First Card */}
        <div
          className="relative w-full p-6 md:p-8 bg-white shadow-lg rounded-[40px] flex flex-col items-center border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:border-btnColor"
          style={{ borderRadius: "0% 100% 1% 99% / 79% 3% 97% 21%" }}
          data-aos="fade-up" // AOS animation
        >
          <img
            className="mt-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-md object-cover"
            src={img1}
            alt="Habiganj Polytechnic"
          />
          <h1 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 text-center">
            Habiganj Polytechnic Institute
          </h1>
          <h2 className="mt-3 text-black text-sm sm:text-base font-semibold text-center">
            Diploma in Computer Engineering (2021-2024)
          </h2>
          <p className="text-center text-gray-500 italic mt-4 sm:mt-6 px-2">
            <RiSingleQuotesL className="inline-block text-2xl text-btnColor mr-2" />
            Graduated with comprehensive knowledge in computer engineering,
            hands-on projects, and a strong foundation.
          </p>
          {/* Certification Button */}
          <a
            href="https://example.com/certification1" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-btnColor hover:bg-black hover:text-white text-black py-2 px-4 rounded-full text-sm transition-all duration-300 hover:bg-opacity-90"
          >
            View Certification
          </a>
        </div>

        {/* Second Card */}
        <div
          className="relative w-full p-6 md:p-8 bg-white shadow-lg rounded-[40px] flex flex-col items-center border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:border-btnColor"
          style={{ borderRadius: "0% 100% 1% 99% / 79% 3% 97% 21%" }}
          data-aos="fade-up" // AOS animation
        >
          <img
            className="mt-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-md object-cover"
            src={img2}
            alt="PeopleNTech IT Institute"
          />
          <h1 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 text-center">
            PeopleNTech IT Institute
          </h1>
          <h2 className="mt-3 text-black text-sm sm:text-base font-semibold text-center">
            MERN Stack Development
          </h2>
          <p className="text-center text-gray-500 italic mt-4 sm:mt-6 px-2">
            <RiSingleQuotesL className="inline-block text-2xl text-btnColor mr-2" />
            Gained full-stack web development skills with a focus on the MERN
            stack. Completed in October 2024.
          </p>
          {/* Certification Button */}
          <a
            href="https://example.com/certification2" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-btnColor text-black hover:bg-black hover:text-white py-2 px-4 rounded-full text-sm transition-all duration-300 hover:bg-opacity-90"
          >
            View Certification
          </a>
        </div>

        {/* Third Card */}
        <div
          className="relative w-full p-6 md:p-8 bg-white shadow-lg rounded-[40px] flex flex-col items-center border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:border-btnColor"
          style={{ borderRadius: "0% 100% 1% 99% / 79% 3% 97% 21%" }}
          data-aos="fade-up" // AOS animation
        >
          <img
            className="mt-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-md object-cover"
            src={img3}
            alt="Programming Hero Institute"
          />
          <h1 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 text-center">
            Programming Hero Institute
          </h1>
          <h2 className="mt-3 text-black text-sm sm:text-base font-semibold text-center">
            Frontend Development
          </h2>
          <p className="text-center text-gray-500 italic mt-4 sm:mt-6 px-2">
            <RiSingleQuotesL className="inline-block text-2xl text-btnColor mr-2" />
            Focused on modern frontend development, including HTML, CSS,
            JavaScript, and React.
          </p>
          {/* Certification Button */}
          <a
            href={certificate} // Replace with actual link
            download="yeasinPh.pdf"
            rel="noopener noreferrer"
            className="mt-4 bg-btnColor duration-300 hover:bg-black hover:text-white text-black py-2 px-4 rounded-full text-sm transition-all  hover:bg-opacity-90"
          >
            View Certification
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
