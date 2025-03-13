'use client'

import { motion } from 'framer-motion'

const experienceData = [
  {
    company: "POIZON Inc.",
    location: "Shanghai, China",
    position: "Data Scientist Intern, Searching Algorithms Team",
    period: "Mar 2024 - June 2024",
    achievements: [
      "Boosted satisfaction metrics by 10% via data-driven insights and cross-functional collaboration, directly influencing marketing intelligence efforts",
      "Developed an interactive, real-time Tableau dashboard for detailed feedback tracking, enhancing user satisfaction strategies for weekly stakeholder meetings",
      "Built robust data pipelines with Python and SQL, leveraging advanced query optimization to ensure stable and reliable data quality for dashboards"
    ]
  },
  {
    company: "LALAMOVE",
    location: "Shanghai, China",
    position: "Data Scientist Intern, Carpooling Team",
    period: "Aug 2023 - Dec 2023",
    achievements: [
      "Increased driver engagement by 20% through data analysis of driver behavior metrics, identifying key trends in Tab usage",
      "Analyzed survey data alongside cohort and retention analysis using SQL, uncovering business insights that shaped targeted driver retention strategies",
      "Developed interactive heatmaps to visualize transportation capacity through Python, boosting strategic planning efficiency by 40%"
    ]
  },
  {
    company: "BOSCH",
    location: "Shanghai, China",
    position: "Data Scientist Intern, Automotive Team",
    period: "Feb 2023 - Aug 2023",
    achievements: [
      "Created a standardized workflow for data modeling, using statistical filtering to improve accuracy and help managing projects",
      "Used statistical methods like Gaussian filtering and thresholding to refine steady-state data, enabling clearer trend detection",
      "Built a Tkinter-based tool to automate data cleaning, increasing efficiency by 30% with a focus on responsibility and leadership"
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-16 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-gray-400">{exp.location}</p>
                  <p className="text-blue-400">{exp.position}</p>
                </div>
                <p className="text-gray-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300">{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 