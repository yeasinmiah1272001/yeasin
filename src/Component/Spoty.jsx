import img from "../assets/bg.png";
import img2 from "../assets/download (10).png";
import { SlSocialSpotify } from "react-icons/sl";

const Spoty = () => {
  return (
    <div
      className="lg:py-20 lg:mb-72"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center lg:mt-64 space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
        {[
          { count: "Mexicam Inn", label: "Cafe" },
          {
            icon: <SlSocialSpotify />,
            label: "Spotify",
          },
          { img: img2 },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-white items-center bg-black p-6 rounded-md w-[200px] transition-all transform hover:scale-105 hover:shadow-xl"
          >
            {/* Display image if available */}
            {item.img && (
              <img
                src={item.img}
                alt={item.label}
                className="w-16 h-14 object-cover mb-2"
              />
            )}

            {/* Display icon if available */}
            {item.icon && <div className="text-4xl mb-2">{item.icon}</div>}

            {/* Display title */}
            {item.count && (
              <h1 className="text-2xl font-bold flex">{item.count}</h1>
            )}

            {/* Display label */}
            {item.label && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spoty;
