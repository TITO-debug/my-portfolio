import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center py-3">
      <p className="mb-0">
        © {new Date().getFullYear()} <span className="neon-text">Titus</span> | Built by <span className="neon-text">Tito</span>, a CyberSecurity Enthusiast & Fullstack Web Dev
      </p>
    </footer>
  );
};

export default Footer;
