'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  useEffect(() => {
    emailjs.init('XHCXsBMMIuQdH2WY9')
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: 'Oliver',
      }

      const result = await emailjs.send(
        'service_eq7e9lg',
        'template_9b0dhbm',
        templateParams
      )

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Get in Touch
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your message..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              {status.message && (
                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Connect with me</h2>
            <div className="space-y-6">
              <p className="text-gray-300">
                Feel free to reach out through any of these platforms. I'm always open to discussing data science projects, 
                collaboration opportunities, or just having a conversation about technology and innovation.
              </p>
              <div className="space-y-4">
                <a
                  href="https://github.com/OliverOuyang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition duration-300"
                >
                  <FaGithub className="text-2xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/oliver-ouyang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:ouyang2066@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition duration-300"
                >
                  <FaEnvelope className="text-2xl" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 