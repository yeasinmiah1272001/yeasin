import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  const counts = [
    { count: 10, label: "Frontend Projects" },
    { count: 6, label: "Full Stack Projects" },
    { count: 15, label: "Designs" },
  ];

  return (
    <div
      style={{
        clipPath: "polygon(76% 0, 100% 51%, 75% 100%, 25% 100%, 0 55%, 21% 0)",
      }}
      className="bg-btnColor py-8 px-4 flex flex-col sm:flex-row justify-center items-center sm:gap-8 gap-4"
    >
      {counts.map((item, index) => (
        <div
          key={index}
          className="text-center bg-white shadow-lg p-4 rounded-lg w-3/4 sm:w-48"
        >
          <h2 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={item.count} duration={2} />
          </h2>
          <p className="text-gray-600 text-lg">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
