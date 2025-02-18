import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaFigma } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMysql, SiCplusplus } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
    { name: "RESTFul APIs", icon: <FaDatabase className="text-gray-700 text-4xl" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { name: "SQL (MySQL)", icon: <SiMysql className="text-blue-500 text-4xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600 text-4xl" /> },
    { name: "OOPs", icon: <FaDatabase className="text-gray-700 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-600 text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-around bg-gray-100 p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <span className="text-lg font-semibold mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
