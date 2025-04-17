import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Debounce function to optimize performance on resize events
const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(), delay);
  };
};

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

    const handleResize = debounce(() => {
      AOS.refresh(); // Refresh animations on window resize
    }, 200); // Debounced delay time in milliseconds

    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handleResize);

    // Cleanup AOS refresh listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      AOS.refresh(); // Ensure any updates are applied during cleanup
    };
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
