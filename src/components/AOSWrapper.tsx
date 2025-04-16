import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Repeat animation every time it comes into view
      mirror: true, // Allows animations to be triggered when scrolling up as well
    });

    // Refresh AOS after the window is loaded
    const handleLoad = () => {
      AOS.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Cleanup AOS refresh listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
      AOS.refresh(); // Ensure any updates are applied during cleanup
    };
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
