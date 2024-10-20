import { MdAddCall, MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import img1 from "../assets/download (4).png";

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-white">
      <h1 className="text-center text-3xl font-bold text-gray-400 mb-10">
        ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕎𝕚𝕥𝕙 𝕄𝕖
      </h1>

      <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-2 gap-8 px-4 lg:px-6">
        {/* Left-side (Contact Info) */}
        <div className="flex flex-col items-center lg:items-start">
          <div>
            <img
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover mb-6"
              src={img1}
              alt="Profile"
            />
          </div>
          <h1 className="text-2xl font-semibold mb-6 text-center lg:text-left">
            Want to work together?
          </h1>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="bg-btnColor p-4 rounded-2xl text-black">
                <MdAddCall size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Phone</h3>
                <p className="text-gray-700">+880 1910255376</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-btnColor p-4 rounded-2xl text-black">
                <MdOutlineMail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Email</h3>
                <p className="text-gray-700">yeasinmiah1272001@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-btnColor p-4 rounded-2xl text-black">
                <IoLocationOutline size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Location</h3>
                <p className="text-gray-700">Lalbag, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (Contact Form) */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[470px] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Contact Form
            </h2>

            <form className="flex flex-col">
              <input
                placeholder="Full Name"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-3 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                type="text"
              />
              <input
                placeholder="Email"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-3 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                type="email"
              />
              <input
                placeholder="Subject"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-3 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                type="text"
              />

              <textarea
                placeholder="Your message"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-3 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                name="feedback"
              ></textarea>

              <button
                className="bg-gradient-to-r bg-btnColor text-black font-semibold py-3 px-4 rounded-md mt-4 hover:from-indigo-600 hover:to-blue-600 transition duration-200"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
