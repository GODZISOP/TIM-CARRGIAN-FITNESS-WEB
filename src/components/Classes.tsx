import React from 'react';
import { Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Classes.module.css';

const classes = [
  {
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80',
    title: 'High-Intensity Training',
    time: '45 mins',
    level: 'Intermediate'
  },
  {
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
    title: 'Yoga Flow',
    time: '60 mins',
    level: 'All Levels'
  },
  {
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80',
    title: 'Strength Training',
    time: '50 mins',
    level: 'Advanced'
  }
];

// Enhanced animation variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.95,
    rotate: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
  },
};

export default function Classes() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className={styles.section}>
      <div className={styles.grid} ref={ref}>
        {classes.map((classItem, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              duration: 0.8,  // Longer duration for smoother animation
              delay: index * 0.2,
              ease: [0.25, 0.8, 0.25, 1],  // Custom ease for a more dynamic feel
            }}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
