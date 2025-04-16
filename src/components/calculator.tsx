import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  // Scroll-trigger for the main BMI calculator section
  const { ref: calculatorRef, inView: calculatorInView } = useInView({
    triggerOnce: false, // Trigger multiple times
    threshold: 0.2,
  });

  // Scroll-trigger for the result section
  const { ref: resultRef, inView: resultInView } = useInView({
    triggerOnce: false, // Trigger multiple times
    threshold: 0.2,
  });

  // Scroll-trigger for the button animation
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: false, // Trigger multiple times
    threshold: 0.2,
  });

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBMI(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <div className="py-24 bg-white-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <motion.h2
              ref={calculatorRef}
              className={`text-3xl font-bold text-gray-900 mb-4 transition-opacity duration-700 ${
                calculatorInView ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: calculatorInView ? 1 : 0,
                x: calculatorInView ? 0 : -50,
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              BMI Calculator
            </motion.h2>
            <p className="text-gray-600">
              Calculate your Body Mass Index to get an idea of your fitness level
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: calculatorInView ? 1 : 0,
                  y: calculatorInView ? 0 : 50,
                }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter height"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: calculatorInView ? 1 : 0,
                  y: calculatorInView ? 0 : 50,
                }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter weight"
                />
              </motion.div>
            </div>

            <motion.button
              ref={buttonRef}
              onClick={calculateBMI}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
              initial={{ scale: 1 }}
              animate={{
                scale: buttonInView ? 1.05 : 1,
                opacity: buttonInView ? 1 : 0,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Calculate BMI
            </motion.button>

            {bmi !== null && (
              <motion.div
                ref={resultRef}
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: resultInView ? 1 : 0,
                  y: resultInView ? 0 : 50,
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{bmi}</div>
                <div className="text-lg text-gray-600">
                  Your BMI indicates: <span className="font-semibold text-red-500">{category}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
