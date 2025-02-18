import resumeLink from "../assets/Resume/ChandanGupta-FrontEnd-Resume.pdf";
const Hero = () => {
    return (
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Chandan Gupta</h1>
          <p className="text-xl mt-4">Front-End Developer (React.js)</p>
          {/* <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300">
            View My Work
          </button> */}
          <a
          href={resumeLink} // Link to your resume
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="mr-4 mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300 inline-block"
        >
          View My Resume
        </a>
        <a
          href={resumeLink}
          download="Chandan_Gupta_Resume.pdf" // Optional: Specify the downloaded file name
          className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300 inline-block"
          >
          Download Resume
        </a>
        </div>
      </section>
    );
  };
  
  export default Hero;