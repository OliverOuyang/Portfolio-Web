import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Science Portfolio',
  description: 'A showcase of data science projects and expertise in machine learning, statistical analysis, and data visualization.',
  keywords: 'data science, machine learning, analytics, portfolio, python, SQL, tableau',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
} 