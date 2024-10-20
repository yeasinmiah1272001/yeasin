import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-btnColor   text-black py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-2xl font-semibold">Yeasin</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yeasinmiah1272001"
            className="hover:text-blue-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/ysm.yasin.5"
            className="hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
        </div>
        <p>© yeasin 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
