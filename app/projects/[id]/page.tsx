'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import InteractiveCharts from '@/app/components/InteractiveCharts'
import { useEffect, useState } from 'react'

const projectsData = [
  {
    id: "kaggle-survival-prediction",
    title: "Kaggle Competition: Fairness-Aware Post-HCT Survival Prediction",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Achieved a top 10% ranking (Silver Medal) by developing an ensemble model that improved survival prediction fairness across racial groups while maintaining a high C-index of 0.67",
      "Enhanced model interpretability through statistical visualization (survival curves, hazard functions) and feature importance analysis, providing actionable insights for healthcare decision-making",
      "Implemented advanced survival analysis techniques, and ensemble models (LightGBM, XGBoost), to effectively handle censored medical data and enhance predictive accuracy",
      "Developed a fairness-focused modeling approach, using SurvivalGAN to generate synthetic survival data and reduce biases linked to race, socioeconomic status, and geography in predictions",
      "Actively contributed to the Kaggle community, sharing methodology improvements via discussion posts and notebooks to refine approaches for fairness-aware survival prediction"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "LightGBM",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn"
    ],
    challenges: [
      "Handling imbalanced data across different demographic groups",
      "Ensuring model fairness while maintaining high predictive accuracy",
      "Dealing with censored survival data",
      "Creating interpretable visualizations for complex medical data"
    ],
    outcomes: [
      "Top 10% ranking in competition",
      "Improved prediction fairness across racial groups",
      "High model interpretability through visualization",
      "Positive community impact through knowledge sharing"
    ]
  },
  {
    id: "streaming-platform-analytics",
    title: "Streaming Platform Data Pipeline & Analytics",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Analyzed trends in video categories and view distributions, uncovering factors behind variations and predicting future audience preferences to support strategic decisions",
      "Scraped JSON data from a streaming platform's must-watch series using Scrapy and Xpath, bypassing anti-crawling measures to gather 12 fields from 25,104 videos over 100 weeks",
      "Automated data storage in MySQL and Excel using Python, implementing filtering and cleaning to ensure data quality",
      "Created interactive Tableau dashboards to visualize key metrics and trends:",
      "- Video Category Distribution Dashboard showing the proportion of different content types",
      "- View Count Trends Dashboard tracking daily and weekly viewing patterns",
      "- Engagement Metrics Dashboard comparing likes, comments, and shares across categories",
      "- Geographic Distribution Map showing content popularity by region"
    ],
    technologies: [
      "Python",
      "Scrapy",
      "MySQL",
      "Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Tableau"
    ],
    challenges: [
      "Bypassing anti-crawling measures",
      "Handling large-scale data collection",
      "Ensuring data quality and consistency",
      "Creating efficient storage solutions",
      "Designing intuitive visualizations for complex data relationships"
    ],
    outcomes: [
      "Successfully collected data from 25,104 videos",
      "Automated data pipeline for continuous updates",
      "Improved strategic decision-making through trend analysis",
      "Enhanced data quality through automated cleaning processes",
      "Created interactive dashboards for stakeholder presentations"
    ]
  },
  {
    id: "social-network-analysis",
    title: "Social Network Analysis on Facebook Dataset",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Visualized relationships between key metrics like influence and connectivity, uncovering patterns in user interactions and feature correlations",
      "Applied algorithms to visualize influential users and communities within the network through Python",
      "Processed and analyzed large-scale graph data using Python (NetworkX, Gephi), generating interactive network visualizations for deeper insights"
    ],
    technologies: [
      "Python",
      "NetworkX",
      "Gephi",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    challenges: [
      "Processing large-scale network data efficiently",
      "Identifying meaningful community structures",
      "Creating clear visualizations of complex network relationships",
      "Optimizing graph algorithms for large datasets"
    ],
    outcomes: [
      "Successfully identified key influencers in the network",
      "Discovered meaningful community structures",
      "Created interactive network visualizations",
      "Provided actionable insights for network analysis"
    ]
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis with Pretrained Transformers",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Achieved 98.8% accuracy on the SST-2 sentiment classification task using pretrained Transformer models from Hugging Face",
      "Implemented and fine-tuned BERT and RoBERTa on Google Colab, optimizing hyperparameters for improved performance",
      "Leveraged Hugging Face's Transformers and PyTorch to streamline model training and evaluation, demonstrating state-of-the-art NLP capabilities"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "BERT",
      "RoBERTa",
      "Google Colab"
    ],
    challenges: [
      "Fine-tuning large transformer models efficiently",
      "Optimizing model performance while maintaining computational efficiency",
      "Handling large-scale text data preprocessing",
      "Implementing effective evaluation metrics"
    ],
    outcomes: [
      "98.8% accuracy on SST-2 sentiment classification",
      "Successful implementation of BERT and RoBERTa",
      "Optimized model training pipeline",
      "State-of-the-art NLP capabilities demonstration"
    ]
  }
]

export default function ProjectDetail() {
  const params = useParams()
  const project = projectsData.find(p => p.id === params.id)
  const [biliData, setBiliData] = useState<any[]>([])

  useEffect(() => {
    if (project?.id === 'streaming-platform-analytics') {
      // Load and parse the CSV data
      fetch('/bili_data.csv')
        .then(response => response.text())
        .then(text => {
          const rows = text.split('\n')
          const headers = rows[0].split(',')
          const data = rows.slice(1).map(row => {
            const values = row.split(',')
            return headers.reduce((obj: any, header, i) => {
              obj[header] = isNaN(Number(values[i])) ? values[i] : Number(values[i])
              return obj
            }, {})
          })
          setBiliData(data)
        })
    }
  }, [project?.id])

  if (!project) {
    return (
      <main className="min-h-screen text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Project Not Found</h1>
          <Link href="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen text-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-400">{project.period}</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.description.map((desc, index) => (
                <li key={index} className="text-gray-300">{desc}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-gray-300">{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Outcomes</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="text-gray-300">{outcome}</li>
              ))}
            </ul>
          </div>

          {project.id === 'streaming-platform-analytics' && biliData.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Interactive Data Analysis</h2>
              <InteractiveCharts data={biliData} />
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
} 