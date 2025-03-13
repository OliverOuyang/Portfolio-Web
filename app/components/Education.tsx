'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    school: "University of California, Berkeley",
    degree: "Master of Analytics",
    period: "2024 - 2025",
    description: "Focusing on advanced data science, machine learning, and business analytics. Participating in various data science projects and research initiatives."
  },
  {
    school: "Shanghai University of Finance and Economics",
    degree: "Bachelor of Data Science",
    period: "2020 - 2024",
    description: "Completed coursework in statistics, machine learning, data structures, and algorithms. Participated in multiple research projects and maintained a high GPA."
  }
]

export default function Education() {
  return (
    <section className="py-16 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                  <p className="text-gray-400">{edu.degree}</p>
                </div>
                <p className="text-gray-400">{edu.period}</p>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 