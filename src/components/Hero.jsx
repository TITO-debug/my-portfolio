import React from "react";
import Typed from "react-typed";
import "../styles/custom.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div data-aos="zoom-in" data-aos-duration="1000">
        <h1 className="hero-title">
          <Typed
            strings={[
              "Hey, I'm Titus",
              "A Full-Stack Developer",
              "I Build Elegant Digital Experiences",
            ]}
            typeSpeed={70}
            backSpeed={50}
            backDelay={1500}
            loop
          />
        </h1>
        <p className="hero-subtitle">
          I design, code, and deliver modern web solutions with creativity and precision.
        </p>
        <a href="#projects" className="btn btn-outline-dark mt-4 px-4 py-2">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
