import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Chandan Gupta</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 font-medium px-4 py-2 shadow-xl rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-700 font-medium px-4 py-2 shadow-xl rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-700 font-medium px-4 py-2 shadow-xl rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="text-gray-700 font-medium px-4 py-2 shadow-xl rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 font-medium px-4 py-2 shadow-xl rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;