import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.logo}>
            <Dumbbell className="w-8 h-8" />
            <span>FitLife</span>
          </div>
          <p className={styles.description}>
            Transform your life through fitness. Join our community and achieve your health goals.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink}><Instagram /></a>
            <a href="#" className={styles.socialLink}><Facebook /></a>
            <a href="#" className={styles.socialLink}><Twitter /></a>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Quick Links</h3>
          <a href="#" className={styles.link}>About Us</a>
          <a href="#" className={styles.link}>Classes</a>
          <a href="#" className={styles.link}>Schedule</a>
          <a href="#" className={styles.link}>Contact</a>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Hours</h3>
          <p className={styles.text}>Monday - Friday: 6am - 10pm</p>
          <p className={styles.text}>Saturday: 7am - 8pm</p>
          <p className={styles.text}>Sunday: 8am - 6pm</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Contact</h3>
          <p className={styles.text}>137 Erin Lane</p>
          <p className={styles.text}>Brodheadsville, PA 18322</p>
          <p className={styles.text}>timc491@gmail.com</p>
          <p className={styles.text}>(+1)6107519921</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; 2024 FitLife. All rights reserved.</p>
      </div>
    </footer>
  );
}