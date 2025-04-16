import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        stagger: 0.1,
        ease: 'easeOut',
        duration: 0.6,
      });
    } else {
      gsap.to(cardsRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.9,
        rotation: 10,
        stagger: 0.1,
        ease: 'easeInOut',
        duration: 0.4,
      });
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>What Our Members Say</h2>
          <p className={styles.headerSubtitle}>
            Real stories from real people who have transformed their lives with us.
          </p>
        </div>
        <div ref={ref} className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.testimonialCard}
              style={{ opacity: 0, transform: 'translateY(100px) scale(0.9) rotate(10deg)' }} // Initial state
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
