import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from '../styles/Contact.module.css';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://my-mark-neww.vercel.app/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setError(error.message || "An error occurred");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
  <div className={styles.contactHeader}>
    <h2>Contact Us</h2>
    <p>Get in touch with us via the form below.</p>
  </div>

  <form className={styles.contactForm} onSubmit={handleSubmit}>
    <div className={styles.formGroup}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
    </div>

    <button type="submit" className={styles.submitBtn} disabled={loading}>
      {loading ? "Sending..." : "Send Message"}
    </button>
  </form>

  {isSent && (
    <div className={styles.confirmationMessage}>
      <p>Thank you! Your message has been sent successfully.</p>
    </div>
  )}
  {error && (
    <div className={styles.errorMessage}>
      <p>{error}</p>
    </div>
  )}

  <div className={styles.socialIcons}>
    <a href="" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={30} />
    </a>
    <a href="" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={30} />
    </a>
    <a href="" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} />
    </a>
  </div>
</div>
  );
}
