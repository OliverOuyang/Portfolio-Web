'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Ouyang Yi
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
            Data Science Portfolio
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            A passionate Data Scientist with expertise in machine learning, statistical analysis, 
            and data visualization. Currently pursuing Master's in Analytics at UC Berkeley.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 