import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import styles from '../styles/Test.module.css';

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
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // Optional: Refresh AOS on mount if needed
    AOS.refresh();
    
    // Cleanup AOS when the component unmounts (optional)
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.reviewTitle}>Customer Reviews</h2>
      <div className={styles.reviewGrid}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={styles.reviewCard}
            data-aos="flip-down" // Apply the AOS animation effect here
            data-aos-delay={index * 100} // Optional: Add a delay to stagger animations
            data-aos-duration="1000" // Duration of the animation
          >
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
