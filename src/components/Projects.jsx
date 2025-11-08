import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio built with React and Bootstrap, showcasing skills, experience, and creative works.",
    },
    {
      title: "E-commerce App",
      description: "A fully functional online shop featuring product listings, shopping cart, and checkout using Node.js and React.",
    },
    {
      title: "Chatbot Assistant",
      description: "An intelligent chatbot built with Python and NLP for handling real-time conversations.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container py-5">
        <h2 className="text-center mb-5 glow" style={{ color: "#00ff88" }} data-aos="fade-up">My Projects</h2>
        <div className="row g-4">
          {projectList.map((project, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="card project-card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: "#00ff88" }}>{project.title}</h5>
                  <p className="card-text" style={{ color: "#9da5b4" }}>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
