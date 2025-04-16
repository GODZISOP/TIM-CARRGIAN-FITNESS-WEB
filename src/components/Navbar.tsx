import React, { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Dumbbell className="w-8 h-8" />
          <span>FitLife</span>
        </div>

        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <a href="#" className={styles.link}>Home</a>
          <a href="#" className={styles.link}>Classes</a>
          <a href="#" className={styles.link}>Schedule</a>
          <a href="#" className={styles.link}>Trainers</a>
          <button className={styles.ctaButton}>Join Now</button>
        </div>
      </div>
    </nav>
  );
}