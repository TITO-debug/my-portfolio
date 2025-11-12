import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminDashboard() {
  const [reviews, setReviews] = useState([]);
  const [passwordInput, setPasswordInput] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const adminPassword = "TitoAdmin123"; // Change if needed

  // Fetch testimonials
  useEffect(() => {
    if (authorized) {
      const fetchReviews = async () => {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        setReviews(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      };
      fetchReviews();
    }
  }, [authorized]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "testimonials", id));
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setAuthorized(true);
    } else {
      alert("Incorrect password!");
      setPasswordInput("");
    }
  };

  if (!authorized) {
    return (
      <div style={{ color: "white", padding: "50px", textAlign: "center" }}>
        <h2>🛡 Admin Login</h2>
        <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #555",
              width: "200px",
              marginRight: "10px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#00ff88",
              color: "#000",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ color: "white", padding: "30px", textAlign: "center" }}>
      <h2>🛠 Admin Dashboard</h2>
      <p>Manage testimonials below:</p>
      <div style={{ marginTop: "20px" }}>
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              border: "1px solid #444",
              padding: "15px",
              margin: "10px auto",
              width: "60%",
              borderRadius: "12px",
              backgroundColor: "#1a1a1a",
              boxShadow: "0 0 10px rgba(0,255,136,0.2)",
              transition: "0.3s",
            }}
          >
            <p>
              <strong>{review.name}</strong> ⭐ {review.rating}
            </p>
            <p>{review.comment}</p>
            <button
              onClick={() => handleDelete(review.id)}
              style={{
                backgroundColor: "#ff4b4b",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "6px 14px",
                cursor: "pointer",
                marginTop: "8px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff1a1a")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4b4b")}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
