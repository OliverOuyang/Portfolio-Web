'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    school: "University of California, Berkeley",
    degree: "Master of Analytics",
    period: "2024 - 2025",
    gpa: "3.86/4.0",
    description: "Focusing on advanced data science, machine learning, and business analytics. Participating in various data science projects and research initiatives.",
    courses: [
      "Deep Learning and Neural Networks",
      "Advanced Machine Learning",
      "Big Data Analytics",
      "Statistical Computing",
      "Data Visualization"
    ]
  },
  {
    school: "Shanghai University of Finance and Economics",
    degree: "Bachelor of Data Science",
    period: "2020 - 2024", 
    gpa: "3.77/4.0",
    description: "Completed coursework in statistics, machine learning, data structures, and algorithms. Participated in multiple research projects and maintained a high GPA.",
    courses: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Statistical Analysis",
      "Database Systems",
      "Linear Algebra",
      "Probability Theory"
    ]
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
                <div className="text-right">
                  <p className="text-gray-400">{edu.period}</p>
                  <p className="text-blue-400 font-medium">GPA: {edu.gpa}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{edu.description}</p>
              <div>
                <h4 className="text-white font-medium mb-2">Key Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 