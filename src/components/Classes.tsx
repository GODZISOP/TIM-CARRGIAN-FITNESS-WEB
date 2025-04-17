import React, { useEffect } from 'react';
import { Clock, Users, ChevronRight } from 'lucide-react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import styles from '../styles/Classes.module.css';

const classes = [
  {
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80',
    title: 'High-Intensity Training',
    time: '45 mins',
    level: 'Intermediate',
  },
  {
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
    title: 'Yoga Flow',
    time: '60 mins',
    level: 'All Levels',
  },
  {
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80',
    title: 'Strength Training',
    time: '50 mins',
    level: 'Advanced',
  },
];

export default function Classes() {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({ duration: 1000, once: false });

    // Refresh AOS on mount
    AOS.refresh();

    // Optional: Cleanup AOS on unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {classes.map((classItem, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="flip-down" // You can change this to other animations like 'fade-up', 'zoom-in', etc.
            data-aos-delay={index * 100} // Stagger each card by 100ms
            data-aos-duration="1000" // Duration for AOS animation
            data-aos-offset="200"  // Ensure AOS triggers earlier or later
          >
            <div className={styles.imageWrapper}>
              <img
                src={classItem.image}
                alt={classItem.title}
                className={styles.image}
                loading="lazy" // Lazy load images for performance
              />
              <div className={styles.overlay}>
                <button className={styles.button}>
                  Join Class
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{classItem.title}</h3>
              <div className={styles.info}>
                <Clock className="w-4 h-4" />
                <span>{classItem.time}</span>
                <Users className="w-4 h-4 ml-4" />
                <span>{classItem.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
