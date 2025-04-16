import React, { useEffect, useRef } from 'react';
import { Clock, Users, ChevronRight } from 'lucide-react';
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
    const isMobile = window.innerWidth <= 768; // Check if the device is mobile

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: isMobile ? 50 : index % 2 === 0 ? 100 : -100,
          x: isMobile ? 0 : index % 2 === 0 ? -100 : 50,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.75,  // Reduced duration for smoother effect
          ease: 'power2.out',  // Adjusted easing for smoother transitions
          scrollTrigger: {
            trigger: el,
            start: 'top 85%', // Start the animation earlier when the element comes into view
            end: 'bottom 50%', // Ends animation when it leaves the viewport
            toggleActions: 'play none none none', // Play only when scrolling down
            scrub: 0.5, // Adjust scrub value for better smoothness
            markers: false, // Set to true for debugging the scrollTrigger positions
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
