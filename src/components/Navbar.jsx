"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Logo from "../assets/LogoTP.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src={Logo} className="w-12" />
              <span className="ml-2 text-gray-800 font-semibold">Lightning & Earthing</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-700 font-medium">
              Home
            </a>

            <div className="relative">
              <button
                onClick={toggleProducts}
                className="text-gray-700 hover:text-blue-700 font-medium flex items-center"
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <a
                      href="/products/lightning-protection"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Lightning Protection
                    </a>
                    <a
                      href="/products/earthing-solutions"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Earthing Solutions
                    </a>
                    <a
                      href="/products/backfill-compound"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Backfill Compound
                    </a>
                    <a
                      href="/products/earth-pit-covers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Earth Pit Covers
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-gray-700 hover:text-blue-700 font-medium">
              About Us
            </a>

            <a href="/industries" className="text-gray-700 hover:text-blue-700 font-medium">
              Industries
            </a>

            <a href="/certifications" className="text-gray-700 hover:text-blue-700 font-medium">
              Certifications
            </a>

            <a href="/clients" className="text-gray-700 hover:text-blue-700 font-medium">
              Clients
            </a>

            <a href="/contact" className="text-gray-700 hover:text-blue-700 font-medium">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Home
            </a>

            <button
              onClick={toggleProducts}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 flex items-center"
            >
              Products <ChevronDown className={`ml-1 h-4 w-4 ${isProductsOpen ? "transform rotate-180" : ""}`} />
            </button>

            {isProductsOpen && (
              <div className="pl-6 space-y-1">
                <a
                  href="/products/lightning-protection"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-700"
                >
                  Lightning Protection
                </a>
                <a
                  href="/products/earthing-solutions"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-700"
                >
                  Earthing Solutions
                </a>
                <a
                  href="/products/backfill-compound"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-700"
                >
                  Backfill Compound
                </a>
                <a
                  href="/products/earth-pit-covers"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-700"
                >
                  Earth Pit Covers
                </a>
              </div>
            )}

            <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              About Us
            </a>

            <a
              href="/industries"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
            >
              Industries
            </a>

            <a
              href="/certifications"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
            >
              Certifications
            </a>

            <a href="/clients" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Clients
            </a>

            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
