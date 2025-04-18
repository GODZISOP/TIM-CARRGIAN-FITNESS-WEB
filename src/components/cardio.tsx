import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import trainerImg from "../images/OIP.jpeg"; // ✅ Imported image for all categories (You can change it to relevant images)
import trainerImg1 from "../images/run.jpeg"; // ✅ Imported image for all categories (You can change it to relevant images)
import trainerImg2 from "../images/strength.jpeg"; // ✅ Imported image for all categories (You can change it to relevant images)
import trainerImg3 from "../images/youth.jpeg"; // ✅ Imported image for all categories (You can change it to relevant images)

import "aos/dist/aos.css";

// Local image map using the imported trainerImg
const imageMap: Record<string, string> = {
  personalTrainer: trainerImg, // Image for Personal Trainer
  runningCoach: trainerImg1, // Image for Running Coach
  strengthAndConditioning: trainerImg2, // Image for Strength and Conditioning
  youthTraining: trainerImg3, // Image for Youth Training
};

// Updated tabContent with descriptions for each training type
const tabContent: Record<string, string[]> = {
  personalTrainer: [
    "Personalized fitness assessments and goal setting.",
    "Customized workout plans tailored to individual needs",
    "Expert guidance on proper form, injury prevention, and progression",
    "Motivational support to help you stay on track with your fitness goals",
  ],
  runningCoach: [
    "Customized running plans for beginners, intermediate, and advanced runners",
    "Guidance on improving running form and technique",
    "Pacing strategies for different race distances",
    "Injury prevention and recovery methods specific to running",
  ],
  strengthAndConditioning: [
    "Program design for strength, endurance, and power development",
    "Focus on functional movement patterns and mobility",
    "Strength training with a focus on compound lifts",
    "Periodization strategies to maximize performance and avoid plateaus",
  ],
  youthTraining: [
    "Age-appropriate fitness plans for younger individuals",
    "Focus on developing a strong foundation of movement patterns",
    "Incorporating fun and engaging activities to promote fitness",
    "Teaching healthy habits and fostering a positive attitude toward fitness",
  ],
};

const TailoredFitnessPrograms = () => {
  // Updated list of programs (tabs)
  const programs = ["personalTrainer", "runningCoach", "strengthAndConditioning", "youthTraining"];
  const [activeTab, setActiveTab] = useState("personalTrainer");

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-100"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
            Tailored Fitness Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our variety of specialized programs designed to meet your specific goals.
          </p>
        </div>

        {/* Program selection buttons */}
        <div
          className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto mb-12 gap-4"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          {programs.map((program) => (
            <button
              key={program}
              onClick={() => setActiveTab(program)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === program
                  ? "bg-red-500 text-white shadow"
                  : "bg-white text-red-500 border border-red-200 hover:bg-red-50"
              }`}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              {program.replace(/([A-Z])/g, " $1").toUpperCase()} {/* Formats to display in title case */}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text and description for active tab */}
          <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-3xl font-bold text-gray-800 capitalize">
              {activeTab.replace(/([A-Z])/g, " $1")}
            </h3> {/* Displays active tab name in title case */}
            <div className="space-y-4">
              {tabContent[activeTab].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
              Learn More
            </button>
          </div>

          {/* Image for active tab */}
          <div
            key={activeTab}
            className="relative w-full max-w-md mx-auto"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            {/* Rotated red gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-500 opacity-60 rounded-3xl transform -rotate-6 scale-105 -z-10" />

            {/* Image */}
            <img
              src={imageMap[activeTab]}
              alt={`${activeTab} Training`}
              className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredFitnessPrograms;
