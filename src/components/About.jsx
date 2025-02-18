import React from "react";
import profileImage from "../assets/images/profile1.jpg"; // Import the image

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Add the image here */}
          <img
            src={profileImage} // Use the imported image
            alt="Chandan Gupta"
            className="w-[250px] rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
          />
          <div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hello! I'm <strong>Chandan Gupta</strong>, a passionate Frontend Developer with experience in creating dynamic, responsive websites and web applications. My primary focus is on writing clean, efficient, and scalable code using HTML, CSS, JavaScript, and React. I am constantly learning and growing in the tech field, always striving to stay updated with the latest web development trends. I am excited to contribute to building great user experiences and work on projects that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            I believe in continuous improvement and always look for opportunities to expand my skills and knowledge. Feel free to reach out if you'd like to collaborate or connect!
          </p>
            {/* <p className="text-gray-700 mb-4">
              Passionate Front-End Developer skilled in React.js, JavaScript (ES6+), HTML5, CSS3, and API integration.
            </p>
            <p className="text-gray-700 mb-4">
              Strong understanding of performance optimization, UI/UX principles, and state management.
            </p>
            <p className="text-gray-700">
              Enthusiastic about solving complex problems and continuously learning new technologies.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;