'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projectsData = [
  {
    id: "kaggle-survival-prediction",
    title: "Kaggle Competition: Fairness-Aware Post-HCT Survival Prediction",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Achieved a top 10% ranking (Silver Medal) by developing an ensemble model that improved survival prediction fairness across racial groups while maintaining a high C-index of 0.67",
      "Enhanced model interpretability through statistical visualization (survival curves, hazard functions) and feature importance analysis",
      "Implemented advanced survival analysis techniques and ensemble models to handle censored medical data"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "LightGBM",
      "XGBoost",
      "Pandas",
      "NumPy"
    ]
  },
  {
    id: "streaming-platform-analytics",
    title: "Streaming Platform Data Pipeline & Analytics",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Analyzed trends in video categories and view distributions, uncovering factors behind variations",
      "Scraped JSON data from a streaming platform using Scrapy and Xpath",
      "Automated data storage in MySQL and Excel using Python",
      "Created interactive Tableau dashboards for data visualization"
    ],
    technologies: [
      "Python",
      "Scrapy",
      "MySQL",
      "Excel",
      "Pandas",
      "Tableau"
    ]
  },
  {
    id: "social-network-analysis",
    title: "Social Network Analysis on Facebook Dataset",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Visualized relationships between key metrics like influence and connectivity",
      "Applied algorithms to visualize influential users and communities within the network",
      "Processed and analyzed large-scale graph data using Python (NetworkX, Gephi)"
    ],
    technologies: [
      "Python",
      "NetworkX",
      "Gephi",
      "Pandas",
      "Matplotlib"
    ]
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis with Pretrained Transformers",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Achieved 98.8% accuracy on the SST-2 sentiment classification task",
      "Implemented and fine-tuned BERT and RoBERTa on Google Colab",
      "Leveraged Hugging Face's Transformers and PyTorch for model training"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "BERT",
      "RoBERTa",
      "Hugging Face"
    ]
  }
]

export default function Projects() {
  return (
    <main className="min-h-screen text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Projects
        </motion.h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          A showcase of my data science projects, demonstrating expertise in machine learning, 
          data analysis, and problem-solving.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <p className="text-gray-400">{project.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-gray-300">{desc}</li>
                  ))}
                </ul>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 