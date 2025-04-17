import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Test.module.css';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'John Doe',
    text: 'This workout routine is amazing! I’ve been following it for a few weeks and already feel stronger. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    text: 'I loved the Yoga Flow class! It was so relaxing and a great way to unwind. Can’t wait for the next session.',
    rating: 4,
  },
  {
    name: 'Tom Brown',
    text: 'The High-Intensity Training was challenging but super effective. I’m seeing great results!',
    rating: 4,
  },
];

const getStars = (rating: number) => {
  const fullStars = Array(rating).fill('★');
  const emptyStars = Array(5 - rating).fill('☆');
  return [...fullStars, ...emptyStars].join(' ');
};

export default function Reviews() {
  useEffect(() => {
    // Animation logic for reviews using gsap
    const reviewCards = document.querySelectorAll(`.${styles.reviewCard}`);
    reviewCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 30%',
            toggleActions: 'play reverse play reverse',
            scrub: false,
            once: false,
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.reviewTitle}>Customer Reviews</h2>
      <div className={styles.reviewGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className={styles.reviewContent}>
              <div className={styles.reviewText}>
                <p>{review.text}</p>
                <div className={styles.reviewRating}>
                  <span>{getStars(review.rating)}</span>
                </div>
              </div>
              <div className={styles.reviewFooter}>
                <span>- {review.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
