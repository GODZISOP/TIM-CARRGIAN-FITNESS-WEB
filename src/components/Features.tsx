import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Calendar, Users, Heart, Clock, Salad } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Features.module.css';

const features = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: 'Expert Training',
    description: 'Professional trainers to guide your fitness journey',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Flexible Schedule',
    description: 'Classes available morning through evening',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community',
    description: 'Join a supportive community of fitness enthusiasts',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Holistic Approach',
    description: 'Focus on both physical and mental wellness',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Progress Tracking',
    description: 'Track your improvements and milestones over time',
  },
  {
    icon: <Salad className="w-8 h-8" />,
    title: 'Nutrition Coaching',
    description: 'Get personalized nutrition advice to fuel your workouts and recovery',
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {features.map((feature, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          const direction = index % 2 === 0 ? -50 : 50; // Alternate left/right

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: direction, y: 50, scale: 0.95 }}
              animate={
                inView
                  ? { opacity: 1, x: 0, y: 0, scale: 1 }
                  : { opacity: 0, x: direction, y: -30, scale: 0.95 }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className={styles.card}
            >
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
