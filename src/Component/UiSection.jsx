import { GiStarShuriken } from "react-icons/gi";
import Marquee from "react-fast-marquee";

const UiSection = () => {
  return (
    <div className="bg-btnColor dark:bg-btnColor dark:text-black py-6 lg:mt-4">
      <Marquee speed={50} gradient={false}>
        <div className="flex gap-x-4">
          {[
            "HTML5",
            "CSS3",
            "JAVASCRIPT",
            "REACT",
            "NEXT JS",
            "REDUX",
            "NODE JS",
            "EXPRESS JS",
            "FIREBASE",
            "MONGODB",
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 md:space-x-3 lg:space-x-5 text-lg md:text-xl text-black"
            >
              <h3 className="font-semibold text-center md:text-left border border-black p-2 px-6 rounded-md">
                {service}
              </h3>

              <span className="text-xl md:text-2xl">
                <GiStarShuriken />
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default UiSection;
