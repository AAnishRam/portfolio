"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillsShowcase = () => {
  const skills = {
    Frontend: ["React", "JavaScript", "HTML", "CSS", "TypeScript"],
    Backend: ["Java", "Python", "Spring Boot", "Node.js", "SQL"],
    "Tools & Cloud": ["AWS", "Git", "RDBMS", "Selenium", "DSA"],
    Specializations: [
      "Full Stack",
      "Malware Research",
      "NLP",
      "Web Development",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      className="py-16 px-8 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center font-poppins"
          variants={itemVariants}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(
            ([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Experience highlight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold mb-4 font-poppins">
            Current Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-cyan-400">
                Malware Research Intern
              </h4>
              <p className="text-gray-300">K7 Computing Pvt Ltd</p>
              <p className="text-sm text-gray-400">July 2024 - Present</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-cyan-400">
                B.E Computer Science
              </h4>
              <p className="text-gray-300">Sri Krishna College of Technology</p>
              <p className="text-sm text-gray-400">CGPA: 9.09/10</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-cyan-400">
                Certifications
              </h4>
              <p className="text-gray-300">
                Cloud Computing • Theory of Computation
              </p>
              <p className="text-sm text-gray-400">NPTEL Certified</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsShowcase;
