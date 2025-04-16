import React from 'react';
import styles from '../styles/Marque.module.css';

const features = [
  '🔥 Personal Training',
  '💪 Group Training',
  '⚡ HIIT Workouts',
  '🥗 Nutrition Plans',
  '🧘 Yoga & Mobility',
  '🏋️ Strength Coaching',
  '🚀 Bootcamp Sessions',
];

const FeatureMarquee = () => {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          {[...features, ...features].map((feature, index) => (
            <span className={styles.featureItem} key={index}>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureMarquee;
