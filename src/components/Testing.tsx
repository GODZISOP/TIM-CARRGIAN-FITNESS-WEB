import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Classes.module.css';

gsap.registerPlugin(ScrollTrigger);

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      if (!el) return;
  
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
          x: -100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 30%',
            toggleActions: 'play reverse play reverse',
            scrub: false,
            once: false,
          },
        }
      );
      
      
      
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])
    return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {classes.map((classItem, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={classItem.image} alt={classItem.title} className={styles.image} />
              <div className={styles.overlay}>
                <button className={styles.button}>
                  Join Class
                </button>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{classItem.title}</h3>
              <div className={styles.info}>
                <span>{classItem.time}</span>
                <span>{classItem.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
