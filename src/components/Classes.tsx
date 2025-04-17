import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Users, ChevronRight } from 'lucide-react';
import styles from '../styles/Classes.module.css';

// Register the ScrollTrigger plugin
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
    // Log for debugging
    console.log('Initializing GSAP and ScrollTrigger');

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      // Log the element being animated
      console.log('Animating card:', el);

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',  // Trigger the animation when the top of the card hits 80% of the viewport
            end: 'top 1%',
            toggleActions: 'play reverse play reverse', // Play when scrolling down, reverse when scrolling back up
            scrub: false,
            once: false, // Allow it to be triggered multiple times (on scroll up and down)
          },
        }
      );
    });

    // Cleanup ScrollTrigger on unmount
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
