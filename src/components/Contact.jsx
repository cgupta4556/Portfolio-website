import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-blue-500" />
          <a
            href="mailto:cgupta4556@gmail.com"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            cgupta4556@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaPhone className="text-blue-500" />
          <a
            href="tel:+918737915298"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            +91 8737915298
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-blue-500" />
          <p className="text-gray-700">Alpha-1, Greater Noida, Uttar Pradesh, India</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://linkedin.com/in/chandan-gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://github.com/cgupta4556"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://leetcode.com/u/Chandan-g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          <FaCode className="text-3xl" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
