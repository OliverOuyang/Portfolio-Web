'use client'

import { motion } from 'framer-motion'

const skills = {
  "Programming Languages": [
    "Python",
    "R",
    "SQL",
    "C++"
  ],
  "Data Science & ML": [
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "SciPy"
  ],
  "Data Visualization": [
    "Tableau",
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "Plotly"
  ],
  "Big Data & Cloud": [
    "Apache Spark",
    "Hadoop",
    "AWS",
    "Azure",
    "Google Cloud"
  ]
}

export default function Skills() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="bg-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 