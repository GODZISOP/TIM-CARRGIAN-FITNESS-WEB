import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import trainerImg from '../images/OIP.jpeg';
import styles from '../styles/Train.module.css';

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
          <img src={trainerImg} alt="Trainer Alex Strong" className={styles.trainerImage} />
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
            <h2 className={styles.name}>Coach Alex Strong</h2>
            <div className={styles.titleDivider}></div>
            <h4 className={styles.title}>Certified Strength & Conditioning Specialist (CSCS)</h4>
          </div>

          <div className={styles.achievements}>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000">
              <span>🏆</span> 10+ Years Experience
            </div>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span>💪</span> NASM Certified
            </div>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <span>🥇</span> Olympic Lifting Coach
            </div>
            <div className={styles.achievementItem} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <span>🧠</span> Nutrition Specialist
            </div>
          </div>

          <div className={styles.philosophy}>
            <h3 className={styles.philosophyTitle} data-aos="fade-up" data-aos-duration="1000">
              <span className={styles.titleAccent}>My Training</span> Philosophy
            </h3>
            <p className={styles.philosophyText} data-aos="fade-up" data-aos-duration="1000">
              I believe fitness is more than just physical — it's about mindset, discipline, and building the best version of yourself. 
              My mission is to empower you with the tools, guidance, and motivation to crush your goals inside and outside the gym.
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
