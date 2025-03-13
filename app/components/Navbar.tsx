'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-white' : 'text-gray-300 hover:text-white'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Portfolio
          </Link>
          
          <div className="flex space-x-8">
            <Link href="/" className={`${isActive('/')} transition-colors duration-200`}>
              Home
            </Link>
            <Link href="/projects" className={`${isActive('/projects')} transition-colors duration-200`}>
              Projects
            </Link>
            <Link href="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 