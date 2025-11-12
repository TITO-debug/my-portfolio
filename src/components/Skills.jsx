import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/custom.css";

const Skills = () => {
  const skills = [
    { name: "Python", level: 100 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Kotlin", level: 70 },
  ];

  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  return (
    <div ref={sectionRef} className="skills-section mt-5">
      <h3 style={{ color: "#00ff88", marginBottom: "1rem" }}>
        Languages & Skills
      </h3>

      {skills.map((skill) => (
        <div key={skill.name} className="skill-bar">
          <span>{skill.name}</span>
          <div className="bar-bg">
            <motion.div
              className="bar-fill"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
