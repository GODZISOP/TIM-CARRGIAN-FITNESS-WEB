import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Test.module.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'The trainers here are amazing! I\'ve achieved results I never thought possible.',
    rating: 5,
  },
  {
    name: 'Mike Thompson',
    role: 'Marathon Runner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    quote: 'The facilities and support have helped me reach new personal records.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Yoga Practitioner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'Found my fitness community here. The classes are challenging and fun!',
    rating: 5,
  }
];

export function Test() {
  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>What Our Members Say</h2>
          <p className={styles.headerSubtitle}>
            Real stories from real people who have transformed their lives with us.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => {
            const [ref, inView] = useInView({
              triggerOnce: false,  // Allows animation when scrolling down and up
              threshold: 0.2,  // Trigger when 20% of the element is visible
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.9,
                  rotate: 10,  // Add slight rotation for more dynamic animation
                }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: 1, rotate: 20 }
                    : { opacity: 0, y: 150, scale: 0.90, rotate: 20 }
                }
                transition={{
                  duration: inView ? 1 : 0.2,  // Shorter duration for scroll-back animation
                  ease: "easeInOut",
                  delay: index * 0.2,  // Delay for staggered animation
                }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialHeader}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.testimonialImage}
                  />
                  <div>
                    <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                    <p className={styles.testimonialRole}>{testimonial.role}</p>
                  </div>
                </div>
                <div className={styles.starRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={styles.quote}>"{testimonial.quote}"</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Test;
