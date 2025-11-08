import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <p className="mb-0">
        © {new Date().getFullYear()} Titus | Built by Tito a CyberSecurity Enthusiast and a Fullstack web dev
      </p>
    </footer>
  );
};

export default Footer;
