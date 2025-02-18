const Projects = () => {
    const projects = [
      {
        title: "Food Delivery App",
        description: "Developed a scalable, responsive food delivery application using React.js and Parcel.js.",
        tech: "React.js, JavaScript, HTML5, CSS3, Parcel.js, RESTful API",
        liveDemo: "https://food-delivery-app.com",
        github: "https://github.com/cgupta4556/food-delivery-app",
      },
      {
        title: "Rock-Paper-Scissors Game",
        description: "Developed an interactive game with React.js, JavaScript, HTML5, and CSS3.",
        tech: "React.js, JavaScript, HTML5, CSS3",
        liveDemo: "https://rock-paper-scissors-game.com",
        github: "https://github.com/cgupta4556/rock-paper-scissors-game",
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-600 mb-4">
                  <strong>Tech:</strong> {project.tech}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;