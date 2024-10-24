import { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/bg.png";

const Counter = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures the animation happens only once
    });
  }, []);

  return (
    <div
      className="lg:py-20"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center lg:mt-64 space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
        {[
          { count: 10, label: "Frontend Projects" },
          { count: 6, label: "Full Stack Projects" },
          { count: 15, label: "Designs" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-md w-[200px] transition-all transform hover:scale-105 hover:shadow-xl"
            data-aos="fade-up" // AOS animation for each counter block
          >
            <h1 className="text-4xl font-bold text-black">
              <CountUp end={item.count} duration={2} />+
            </h1>
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
