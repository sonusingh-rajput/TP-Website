import { Link } from "react-router"
import HeroImage from "../assets/Hero Images.jpg"

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Lightning Protection & Earthing Solutions</h1>
            <p className="text-xl mb-8">
              Protecting lives and infrastructure with state-of-the-art lightning arrestors and earthing systems. ISO
              9001:2015 certified solutions for all industries.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/products/lightning-protection"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md text-center"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-blue-800 border border-white font-semibold py-3 px-6 rounded-md text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative  rounded-lg overflow-hidden shadow-2xl">
            <img
              src={HeroImage}
              alt="Lightning Protection System"             
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {}
    </div>
  )
}

export default HeroSection
