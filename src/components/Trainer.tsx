import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import trainerImg from '../images/OIP.jpeg';
import styles from '../styles/Train.module.css';

const Trainerbio = () => {
  const [imgRef, imgInView] = useInView({ threshold: 0.3 });
  const [textRef, textInView] = useInView({ threshold: 0.3 });

  return (
    <section className={styles.bioSection}>
      <div className={styles.bioContainer}>

        {/* Image Animation */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 60 }}
          animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={styles.imageContainer}
        >
          <img src={trainerImg} alt="Trainer Alex Strong" className={styles.trainerImage} />
          <div className={styles.imageOverlay}></div>
        </motion.div>

        {/* Text Content Animation */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 40 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className={styles.bioContent}
        >
          <div className={styles.header}>
            <h2 className={styles.name}>Coach Alex Strong</h2>
            <div className={styles.titleDivider}></div>
            <h4 className={styles.title}>Certified Strength & Conditioning Specialist (CSCS)</h4>
          </div>

          <div className={styles.achievements}>
            <div className={styles.achievementItem}><span>🏆</span> 10+ Years Experience</div>
            <div className={styles.achievementItem}><span>💪</span> NASM Certified</div>
            <div className={styles.achievementItem}><span>🥇</span> Olympic Lifting Coach</div>
            <div className={styles.achievementItem}><span>🧠</span> Nutrition Specialist</div>
          </div>

          <div className={styles.philosophy}>
            <h3 className={styles.philosophyTitle}>
              <span className={styles.titleAccent}>My Training</span> Philosophy
            </h3>
            <p className={styles.philosophyText}>
              I believe fitness is more than just physical — it's about mindset, discipline, and building the best version of yourself. 
              My mission is to empower you with the tools, guidance, and motivation to crush your goals inside and outside the gym.
            </p>
          </div>

          <blockquote className={styles.quote}>
            <div className={styles.quoteMark}>“</div>
            <p>You don't have to be extreme, just consistent.</p>
            <div className={styles.quoteBar}></div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainerbio;
