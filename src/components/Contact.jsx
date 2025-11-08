import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_h8eb7gc", // Replace with your EmailJS service ID
        "template_r6jheer", // Replace with your EmailJS template ID
        formData,
        "WeirvFMs05EmDInK-" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        () => {
          alert("Failed to send message ❌. Try again.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container text-center" data-aos="fade-up">
        <h2 className="mb-4 glow">🤝 Let’s Connect</h2>
        <p className="lead mb-5" style={{ color: "#9da5b4" }}>
          Have a project in mind or just want to say hi?  
          I’d love to hear from you — let’s build something amazing together.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="p-4 shadow-lg rounded"
              style={{ backgroundColor: "#161b22", border: "1px solid #00ff88" }}
              data-aos="zoom-in"
            >
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-bold"
                disabled={sending}
              >
                {sending ? "Sending..." : "✉️ Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-5" data-aos="fade-up" data-aos-delay="400">
          <a href="mailto:yourname@email.com" className="mx-3 fs-4">
            <FaEnvelope style={{ color: "#00ff88" }} />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="mx-3 fs-4">
            <FaGithub style={{ color: "#00ff88" }} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="mx-3 fs-4">
            <FaLinkedin style={{ color: "#00ff88" }} />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="mx-3 fs-4">
            <FaTwitter style={{ color: "#00ff88" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
