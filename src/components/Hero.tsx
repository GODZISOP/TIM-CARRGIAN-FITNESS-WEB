import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen is mobile-sized
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use requestAnimationFrame for smooth scroll animations
  useEffect(() => {
    let animationFrameId: number; // Explicitly typing animationFrameId as number

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up the animation frame on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simple animation logic based on scroll position
  const scrollStyle = {
    opacity: isMobile ? 1 : 1 - scrollY / 500,
    transform: isMobile ? 'translateY(0)' : `translateY(${scrollY * 0.1}px)`, // Light move for desktop, none for mobile
  };

  // Mobile styles (lighter opacity and no big translate)
  const mobileStyle = {
    opacity: 1 - scrollY / 600, // Slight opacity change for mobile
    transform: 'translateY(0)', // No translateY for mobile
  };

  // Desktop styles (parallax effect for PC)
  const desktopStyle = {
    opacity: 1 - scrollY / 500,
    transform: `translateY(${scrollY * 0.1}px)`, // Parallax movement on scroll
  };

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          alt="Fitness background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div>
            <motion.div
              className="text-white text-xl font-bold"
              style={isMobile ? mobileStyle : desktopStyle}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span>FitLife</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={isMobile ? mobileStyle : desktopStyle}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Transform Your Body,<br />
              <span className="text-red-500">Transform Your Life</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg mb-8 max-w-lg"
              style={isMobile ? mobileStyle : desktopStyle}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Join our community of fitness enthusiasts and start your journey to a healthier you.
            </motion.p>

            <motion.div
              className="flex gap-4"
              style={isMobile ? mobileStyle : desktopStyle}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
              >
                Watch Video
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Join Today Section */}
          <div className="hidden md:flex justify-center">
            <motion.div
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 w-full max-w-md"
              style={isMobile ? mobileStyle : desktopStyle}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Join Today</h3>
              <p className="text-gray-300 mb-6">
                Start your fitness journey with our 7-day free trial. No credit card required.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Start Free Trial
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
