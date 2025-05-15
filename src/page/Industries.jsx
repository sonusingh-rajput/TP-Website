
import { Factory, Building2, Radio, Home, Building, Server, Zap, Warehouse } from "lucide-react"
import Institutional from "../assets/Industries_Images/Institutional.jpg"
import Commercial_Buildings from "../assets/Industries_Images/Commercial Buildings.jpg"
import Data_Centers from "../assets/Industries_Images/Data Centers.jpg"
import Manufacturing from "../assets/Industries_Images/Manufacturing.jpg"
import Oil_And_Gas from "../assets/Industries_Images/Oil & Gas.jpg"
import Power_Generation_Distribution from "../assets/Industries_Images/Power Generation & Distribution.jpg"
import Residential from "../assets/Industries_Images/Residential.jpg"
import Telecommunications from "../assets/Industries_Images/Telecommunications.jpg"

export default function Industries() {
  // Industries we serve
  const industries = [
    {
      name: "Power Generation & Distribution",
      icon: <Zap className="h-10 w-10 text-amber-700" />,
      description:
        "Protecting power plants, substations, and distribution networks from lightning strikes and ensuring proper earthing for electrical safety.",
      products: ["ESE Lightning Arrestors", "Pure Copper Earthing", "GI Earthing Systems", "Backfill Compound"],
      image: Power_Generation_Distribution,
    },
    {
      name: "Telecommunications",
      icon: <Radio className="h-10 w-10 text-amber-700" />,
      description:
        "Safeguarding telecom towers, equipment shelters, and communication infrastructure against lightning damage and electrical surges.",
      products: [
        "ESE Lightning Arrestors",
        "Conventional Lightning Arrestors",
        "Copper Earthing Electrodes",
        "Earth Pit Covers",
      ],
      image: Telecommunications,
    },
    {
      name: "Manufacturing",
      icon: <Factory className="h-10 w-10 text-amber-700" />,
      description:
        "Protecting manufacturing facilities, machinery, and sensitive equipment from lightning strikes and electrical faults.",
      products: ["ESE Lightning Arrestors", "GI Earthing Systems", "Backfill Compound", "Earth Pit Covers"],
      image: Manufacturing,
    },
    {
      name: "Commercial Buildings",
      icon: <Building2 className="h-10 w-10 text-amber-700" />,
      description:
        "Ensuring the safety of office buildings, shopping malls, and commercial complexes with comprehensive lightning protection and earthing solutions.",
      products: ["ESE Lightning Arrestors", "Copper Earthing Electrodes", "GI Earthing Systems", "Earth Pit Covers"],
      image: Commercial_Buildings,
    },
    {
      name: "Residential",
      icon: <Home className="h-10 w-10 text-amber-700" />,
      description:
        "Protecting homes, residential complexes, and apartments from lightning strikes and ensuring electrical safety.",
      products: ["Conventional Lightning Arrestors", "Copper Earthing Electrodes", "Backfill Compound"],
      image: Residential,
    },
    {
      name: "Data Centers",
      icon: <Server className="h-10 w-10 text-amber-700" />,
      description:
        "Safeguarding critical data center infrastructure with advanced lightning protection and low-resistance earthing systems.",
      products: ["ESE Lightning Arrestors", "Pure Copper Earthing", "Backfill Compound", "Earth Pit Covers"],
      image: Data_Centers,
    },
    {
      name: "Oil & Gas",
      icon: <Warehouse className="h-10 w-10 text-amber-700" />,
      description:
        "Protecting refineries, storage facilities, and pipelines with specialized lightning protection and earthing solutions for hazardous environments.",
      products: ["ESE Lightning Arrestors", "GI Earthing Systems", "Backfill Compound", "Earth Pit Covers"],
      image: Oil_And_Gas,
    },
    {
      name: "Institutional",
      icon: <Building className="h-10 w-10 text-amber-700" />,
      description:
        "Providing lightning protection and earthing solutions for schools, universities, hospitals, and government buildings.",
      products: ["ESE Lightning Arrestors", "Copper Earthing Electrodes", "GI Earthing Systems", "Earth Pit Covers"],
      image: Institutional,
    },
  ]

  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl max-w-3xl">
            Our lightning protection and earthing solutions cater to a wide range of industries, ensuring safety and
            protection for various applications and environments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Solutions for Every Sector</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At TPS Lightning & Earthing Solutions, we understand that different industries have unique requirements when
            it comes to lightning protection and earthing. Our specialized solutions are designed to meet the specific
            needs of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative">
                <img src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-50 rounded-full p-3 mr-4">{industry.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800">{industry.name}</h3>
                </div>
                <p className="text-gray-700 mb-6">{industry.description}</p>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Recommended Products:</h4>
                  <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-1">
                    {industry.products.map((product, i) => (
                      <li key={i}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Why Choose Our Industry-Specific Solutions?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Tailored Approach</h4>
              <p className="text-gray-700">
                We understand that each industry has unique requirements. Our solutions are tailored to address the
                specific challenges and needs of your sector.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Compliance with Standards</h4>
              <p className="text-gray-700">
                Our products comply with industry-specific standards and regulations, ensuring that your installation
                meets all safety and compliance requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Expert Consultation</h4>
              <p className="text-gray-700">
                Our team of experts provides specialized consultation for your industry, helping you choose the right
                lightning protection and earthing solutions for your specific needs.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Assessment</h3>
              <p className="text-gray-600">
                We assess your facility's specific requirements and risk factors to determine the appropriate level of
                protection needed.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Design</h3>
              <p className="text-gray-600">
                Our experts design a customized lightning protection and earthing system tailored to your industry's
                specific needs.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Implementation</h3>
              <p className="text-gray-600">
                We provide high-quality products and guidance for proper installation to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">
                We offer ongoing support and maintenance recommendations to ensure the long-term effectiveness of your
                protection system.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need Industry-Specific Solutions?</h2>
          <p className="text-lg mb-6">
            Contact our team of experts to discuss your industry's specific lightning protection and earthing
            requirements. We'll help you find the right solution for your needs.
          </p>
          <p
            href="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md"
          >
            Get Expert Advice
          </p>
        </div>
      </div>
    </div>
  )
}
