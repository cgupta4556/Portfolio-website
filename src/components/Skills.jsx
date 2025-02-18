const Skills = () => {
    const skills = [
      { name: "React.js", icon: "react" },
      { name: "JavaScript", icon: "js" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Redux", icon: "redux" },
      { name: "RESTFul APIs", icon: "sql" },
      { name: "Git/Github", icon: "git" },
      { name: "SQL(MySQL)", icon: "sql" },
      { name: "C++", icon: "C++" },
      { name: "OOPs", icon: "sql" },
      { name: "Figma", icon: "sql" },
    ];
  
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <i className={`fab fa-${skill.icon} text-4xl mb-4 text-blue-500`}></i>
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;