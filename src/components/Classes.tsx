import React, { useEffect, useRef } from 'react';
import { Clock, Users, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
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
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations

    // Backscroll effect with GSAP
    const isMobile = window.innerWidth <= 768;

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      // Basic scroll-triggered animation using GSAP
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
          duration: 0.75, // Smooth transition
          ease: 'power2.out', // Adjusted easing
          scrollTrigger: {
            trigger: el,
            start: 'top 85%', // Starts animation earlier
            end: 'bottom 50%', // Ends when it leaves the viewport
            toggleActions: 'play none none none', // Play on scroll down only
            scrub: 0.5, // Smooth scrolling effect
            markers: false, // Set to true for debugging
          },
        }
      );
    });

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
            data-aos="fade-up" // AOS fade-up animation
            data-aos-delay={index * 100} // Add delay to each card for staggered effect
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
