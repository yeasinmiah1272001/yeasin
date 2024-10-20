import img1 from "../assets/portfolio/download (1).png";
import img2 from "../assets/portfolio/download (2).png";
import img3 from "../assets/portfolio/download (3).png";

import img4 from "../assets/download (1).png";
import img5 from "../assets/download (2).png";
import img6 from "../assets/download (3).png";

const Blog = () => {
  return (
    <div className="py-20 bg-[#EFEEFC]">
      <h1 className="text-center text-4xl font-extrabold text-gray-400 mb-12">
        ℝ𝕖𝕔𝕖𝕟𝕥 𝔹𝕝𝕠𝕘
      </h1>
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center lg:justify-between gap-10">
        {[img1, img2, img3].map((image, index) => (
          <div
            key={index}
            className="bg-white w-[370px] h-[472px] rounded-[28px] overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative">
              <img
                className="w-full p-8 rounded"
                src={image}
                alt="Blog Post Image"
              />
              <div className="absolute top-0 left-0 bg-btnColor text-black font-semibold px-2 py-1 m-2 rounded-md text-sm">
                SALE
              </div>
              <div className="absolute top-0 right-0  text-black px-2 py-1 m-2 rounded-md text-sm font-semibold">
                25 October 2021
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Triathlete Defends 200-mile Lockdown Ride
              </h3>

              <div className="flex items-center mt-4">
                <img
                  className="w-10 h-10 rounded-full mr-3"
                  src={[img4, img5, img6][index]}
                  alt="Author"
                />
                <div className="text-sm">
                  <span className="block font-bold text-gray-700">
                    by Jonib Smith
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
