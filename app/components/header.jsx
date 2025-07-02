"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">ThreadCraft</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#showcase" className="text-gray-700 hover:text-gray-900 transition-colors">
              Showcase
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#showcase" className="text-gray-700 hover:text-gray-900 transition-colors">
                Showcase
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
