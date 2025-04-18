import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Correct import for react-router-dom
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
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/contact" className={styles.link}>Contact</Link> {/* Correct link for contact */}
          <Link to="/schedule" className={styles.link}>Schedule</Link>
          <Link to="/trainers" className={styles.link}>Trainers</Link>
          <Link to="/join">
            <button className={styles.ctaButton}>Join Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
