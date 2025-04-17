import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { Clock, Users, ChevronRight } from 'lucide-react';
import styles from '../styles/Classes.module.css';

// Data for classes
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
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {classes.map((classItem, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="zoom-in-down" // AOS fade-up animation
            data-aos-duration="800" // Duration of animation
            data-aos-delay={index * 200} // Delay for each card
            data-aos-easing="ease-out" // Easing for smooth animation
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
