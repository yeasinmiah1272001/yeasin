import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-btnColor   text-black py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-2xl font-semibold">Yeasin</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p>© yeasin 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
