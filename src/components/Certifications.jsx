const Certifications = () => {
    const certifications = [
      "Introduction to C++ and DSA in C++ by Coding Ninjas",
      "OOPs in C++ by Great Learning",
      "SQL Certification by HackerRank",
      "CSS3 and HTML5 by Great Learning",
      "JavaScript Basics by Great Learning",
      "React.js Tutorial by Great Learning",
    ];
  
    return (
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
          <ul className="list-disc list-inside">
            {certifications.map((cert, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Certifications;