import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { motion } from "framer-motion";
import "../styles/custom.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  // Fetch reviews live
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  // Add new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) {
      alert("Please fill all fields and select a rating.");
      return;
    }
    try {
      await addDoc(collection(db, "reviews"), {
        name,
        comment,
        rating,
        timestamp: serverTimestamp(),
      });
      setName("");
      setComment("");
      setRating(0);
      alert("Thank you for your feedback!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title" style={{ color: "#00ff88" }}>💬 Testimonials</h2>

        {/* Add Review Form */}
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <div className="rating">
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  cursor: "pointer",
                  color: rating >= star ? "#FFD700" : "#555",
                  fontSize: "22px",
                }}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit" className="btn-glow">Submit Review</button>
        </form>

        {/* Animated Testimonials Carousel */}
        <div className="testimonials-carousel-wrapper">
          <motion.div
            className="testimonials-carousel"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {reviews.concat(reviews).map((rev, index) => (
              <div key={index} className="testimonial-card">
                <h5 style={{ color: "#00ff88" }}>{rev.name}</h5>
                <div className="stars">
                  {"★".repeat(rev.rating)}
                  {"☆".repeat(5 - rev.rating)}
                </div>
                <p style={{ color: "#b3ffcc" }}>{rev.comment}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
