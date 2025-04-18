import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import trainerImg from '../images/OIP.jpeg';
import styles from '../styles/Train.module.css';
import trainerImg1 from "../images/WhatsApp Image 2025-04-18 at 21.11.10_912c5b32.jpg"; // ✅ Imported image

const Trainerbio = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.bioSection}>
      <div className={styles.bioContainer}>

        {/* Image Animation with AOS */}
        <div
          className={styles.imageContainer}
          data-aos="zoom-in" // Apply zoom-in animation for image
          data-aos-duration="1000" // Duration of the animation
          data-aos-easing="ease-out" // Ease-out for a smoother animation
        >
          <img src={trainerImg1} alt="Trainer Alex Strong" className={styles.trainerImage} />
          <div className={styles.imageOverlay}></div>
        </div>

        {/* Text Content Animation with AOS */}
        <div
          className={styles.bioContent}
          data-aos="fade-up" // AOS fade-up animation
          data-aos-delay="100" // Optional delay for the text animation
          data-aos-duration="1000" // Duration of the animation
        >
          <div className={styles.header}>
            <h2 className={styles.name}>Coach Tim Carrigan</h2>
            <div className={styles.titleDivider}></div>
            <h4 className={styles.title}> .</h4>
          </div>CERTIFIED PERSONAL TRAINER, CERTIFIED RUNNING COACH, CERTIFIED STRENGTH AND CONDITIONING COACH

          <div className={styles.achievements}>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000">
              <span>🏆</span> 3+ Years Experience
            </div>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span>💪</span> Certified Personal Trainer
            </div>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <span>🥇</span> Performance Optimization Expert
            </div>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <span>🧠</span> Goal-Focused Coaching Approach.
            </div>
          </div>

          <div className={styles.philosophy}>
            <h3 className={styles.philosophyTitle} data-aos="fade-up" data-aos-duration="1000">
              <span className={styles.titleAccent}>My Training</span> Philosophy
            </h3>
            <p className={styles.philosophyText} data-aos="fade-up" data-aos-duration="1000">
            I believe training should be purposeful, progressive, and personalized. As a certified personal trainer, running coach, and strength & conditioning specialist, my approach is rooted in science, built on discipline, and focused on long-term results. Whether you're chasing a faster mile, building muscle, or just moving better — I'm here to guide you every step of the way.
            </p>
          </div>

          <blockquote className={styles.quote} data-aos="fade-up" data-aos-duration="1000">
            <div className={styles.quoteMark}>“</div>
            <p>You don't have to be extreme, just consistent.</p>
            <div className={styles.quoteBar}></div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Trainerbio;
