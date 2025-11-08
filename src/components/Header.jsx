import React, { useState } from "react";
import "../styles/custom.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <header className="main-header">
      <nav className="navbar container d-flex justify-content-between align-items-center py-3">
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
          className="hamburger"
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
