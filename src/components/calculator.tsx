import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { Calculator } from 'lucide-react';

export function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => {
      AOS.refresh(); // Refresh AOS when the component unmounts or updates
    };
  }, []);

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
    <div className="py-24  bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-12 w-12 text-red-500 mx-auto mb-4" />
            {/* AOS fade-up animation */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              BMI Calculator
            </h2>
            <p className="text-gray-600">
              Calculate your Body Mass Index to get an idea of your fitness level
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* AOS fade-up animation for inputs */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mb-6 md:mb-0"
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
              </div>
              {/* AOS fade-up animation for inputs */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
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
              </div>
            </div>

            {/* AOS scale-up animation for button */}
            <button
              onClick={calculateBMI}
              data-aos="zoom-in"
              data-aos-delay="800"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              Calculate BMI
            </button>

            {bmi !== null && (
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="mt-8 text-center"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{bmi}</div>
                <div className="text-lg text-gray-600">
                  Your BMI indicates: <span className="font-semibold text-red-500">{category}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
