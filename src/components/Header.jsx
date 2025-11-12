import React, { useState, useEffect } from "react";
import "../styles/custom.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Close mobile menu on window resize if > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(id);
    setMenuOpen(false); // Close menu after click on mobile
  };

  return (
    <header className="main-header">
      <nav className="navbar container">
        <h3 className="logo">
          Tito<span>Dev</span>
        </h3>

        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li
            className={activeLink === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className={activeLink === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
