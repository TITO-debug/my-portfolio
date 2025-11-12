import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>
              <Header />
              <Hero />
              <About />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
              <WhatsAppButton />
            </div>
          }
        />

        {/* Secured Admin Page */}
        <Route path="/nyabiya" element={<AdminDashboard />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
