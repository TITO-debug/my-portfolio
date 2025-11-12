import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/custom.css";

const inlineSvgFallback = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
  <rect width='100%' height='100%' fill='%230d1117'/>
  <text x='50%' y='50%' fill='%2300ff88' font-family='Fira Code,monospace' font-size='22' text-anchor='middle' dy='.3em'>
    Image not found
  </text>
</svg>`;

const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const sections = {
    about: {
      title: "About Me",
      text:
        "I’m an aspiring cybersecurity specialist and full-stack developer who loves building secure, beautiful systems. I combine creativity and logic to craft apps that work flawlessly and defend against threats.",
      img: "/images/me.png",
    },
    python: {
      title: "Python Proficiency",
      text:
        "I use Python for automation, backend development, and cybersecurity scripting. Proficient with Flask/Django and writing tooling for pentests & automation.",
      img: "/images/python.png",
    },
    webdev: {
      title: "Web Development",
      text:
        "I build responsive, scalable web apps using React and Node. I focus on security-first development, clean components, and performant UI.",
      img: "/images/webdev.png",
    },
  };

  const handleImgError = (e) => {
    e.currentTarget.src = inlineSvgFallback;
  };

  return (
    <section id="about" className="about-section" data-aos="fade-right">
      <div className="about-container container">
        {/* LEFT: interactive text */}
        <div className="about-text">
          <p className="lead hero-subtitle" style={{ color: "#00ff88" }}>
            Hey — I’m Titus. Cybersecurity enthusiast & full-stack developer.
            Click the items below to reveal details and watch the card on the
            right transform.
          </p>

          {Object.keys(sections).map((key) => {
            const s = sections[key];
            const open = activeSection === key;

            return (
              <div
                key={key}
                className={`about-item ${open ? "active" : ""}`}
                onClick={() => setActiveSection(key)}
              >
                <div className="about-item-head d-flex align-items-center">
                  <span
                    className="about-arrow"
                    style={{
                      transform: open ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    ▶
                  </span>
                  <h5 style={{ color: "#00ff88", marginLeft: "10px" }}>
                    {s.title}
                  </h5>
                </div>

                {/* Accordion Text */}
                <AnimatePresence mode="wait">
                  {open && (
                    <motion.div
                      className="about-item-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p style={{ color: "#b3ffcc", margin: "10px 0 0 0" }}>
                        {s.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* RIGHT: animated card */}
        <div className="about-card" data-aos="fade-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              className="about-image-wrap"
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.02,
                boxShadow: "0 0 40px rgba(0,255,136,0.25)",
              }}
            >
              <img
                src={sections[activeSection].img}
                onError={handleImgError}
                alt={sections[activeSection].title}
                className="about-image"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div>
        <div className="skills-section">
  <h3 style={{ color: "#00ff88" }}>Languages & Skills</h3>
  {[
    { name: "Python", level: 100 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Kotlin", level: 70 },
  ].map((skill) => (
    <div key={skill.name} className="skill-bar">
      <span>{skill.name}</span>
      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default About;
