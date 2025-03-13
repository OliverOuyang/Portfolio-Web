import { motion } from 'framer-motion'

interface ProjectProps {
  title: string
  period: string
  description: string[]
}

const Project = ({ title, period, description }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const projectsData = [
  {
    title: "Kaggle Competition: Fairness-Aware Post-HCT Survival Prediction",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Achieved a top 10% ranking (Silver Medal) by developing an ensemble model that improved survival prediction fairness across racial groups while maintaining a high C-index of 0.67",
      "Enhanced model interpretability through statistical visualization (survival curves, hazard functions) and feature importance analysis, providing actionable insights for healthcare decision-making",
      "Implemented advanced survival analysis techniques, and ensemble models (LightGBM, XGBoost), to effectively handle censored medical data and enhance predictive accuracy",
      "Developed a fairness-focused modeling approach, using SurvivalGAN to generate synthetic survival data and reduce biases linked to race, socioeconomic status, and geography in predictions",
      "Actively contributed to the Kaggle community, sharing methodology improvements via discussion posts and notebooks to refine approaches for fairness-aware survival prediction"
    ]
  },
  {
    title: "Streaming Platform Data Pipeline & Analytics",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Analyzed trends in video categories and view distributions, uncovering factors behind variations and predicting future audience preferences to support strategic decisions",
      "Scraped JSON data from a streaming platform's must-watch series using Scrapy and Xpath, bypassing anti-crawling measures to gather 12 fields from 25,104 videos over 100 weeks",
      "Automated data storage in MySQL and Excel using Python, implementing filtering and cleaning to ensure data quality"
    ]
  }
]

const Projects = () => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          period={project.period}
          description={project.description}
        />
      ))}
    </div>
  )
}

export default Projects 