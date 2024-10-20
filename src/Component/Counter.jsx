import img from "../assets/bg.png";

const Counter = () => {
  return (
    <div
      className=" lg:py-20"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center lg:mt-64 space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
        {[
          { count: "10+", label: "Frontend Project" },
          { count: "6+", label: "Full Stack Project" },
          { count: "15+", label: "Design" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-md w-[200px] transition-all transform hover:scale-105   hover:shadow-xl" // Adjusted width and shadow for better visibility
          >
            <h1 className="text-4xl font-bold text-black">{item.count}</h1>
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
