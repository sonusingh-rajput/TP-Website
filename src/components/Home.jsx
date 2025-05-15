import { Shield, Zap, Award, Users } from "lucide-react"
import { Link } from "react-router"
import HeroSection from "./Hero-Section"
import ProductCard from "./Product-Card"
import CertificationBadge from "./certification-badge"
import ESE_Lightning_Arrestors from '../assets/Product_Image/ESE Lightning Arrestors.jpg'
import Pure_Copper_Earthing from '../assets/Product_Image/Pure Copper .jpg'
import GI_Earthing_Electrode from '../assets/Product_Image/GI Earthing Electrode.jpg'
import Backfill_Compound from '../assets/Product_Image/Backfill Compound.jpg'
import ISO_9001_2015 from '../assets/Certificate/ISO_9001-2015.svg.png'
import msme_Registration from '../assets/Certificate/msme-registration-certificate.png'
import NABL_Registration from '../assets/Certificate/NABL_Official_LOGO_Registered.png'
import RoHS_Registration from '../assets/Certificate/What-is-RoHS-Compliance.webp'


export default function Home() {
  const featuredProducts = [
    {
      title: "ESE Lightning Arrestors",
      description:
        "Advanced Early Streamer Emission technology for superior lightning protection. NFC 17-102 compliant.",
      imageSrc: ESE_Lightning_Arrestors,
      link: "/products/lightning-protection",
    },
    {
      title: "Pure Copper Earthing",
      description:
        "Corrosion-resistant pure copper earthing electrodes for optimal conductivity and long service life.",
      imageSrc: Pure_Copper_Earthing,
      link: "/products/earthing-solutions",
    },
    {
      title: "GI Earthing Systems",
      description: "Galvanized Iron earthing systems with CCM compound filling for enhanced performance.",
      imageSrc: GI_Earthing_Electrode,
      link: "/products/earthing-solutions",
    },
    {
      title: "Backfill Compound",
      description: "Specialized compound to reduce soil resistivity and enhance earthing system performance.",
      imageSrc: Backfill_Compound,
      link: "/products/backfill-compound",
    },
  ]

  return (
    <>
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Featured Products</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive range of lightning protection and earthing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                link={product.link}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products/lightning-protection"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-md"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Industry-leading expertise in lightning protection and earthing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">ISO 9001:2015 certified products that meet international standards</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge solutions based on the latest research and development</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
              <p className="text-gray-600">Products compliant with NFC 17-102 and IEC-62305 standards</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated team of professionals for consultation and installation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Certifications</h2>
            <p className="mt-4 text-xl text-gray-600">Committed to quality and international standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CertificationBadge
              title="ISO 9001:2015"
              imageSrc={ISO_9001_2015}
              description="Quality Management System Certification"
            />
            <CertificationBadge
              title="MSME Registered"
              imageSrc={msme_Registration}
              description="Micro, Small & Medium Enterprises Registration"
            />
            <CertificationBadge
              title="ROHS Compliant"
              imageSrc={RoHS_Registration}
              description="Restriction of Hazardous Substances Directive"
            />
            <CertificationBadge
              title="NABL Tested"
              imageSrc={NABL_Registration}
              description="National Accreditation Board for Testing and Calibration Laboratories"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="/certifications"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-md"
            >
              View All Certifications
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team of experts for a consultation and get the best lightning protection and earthing solutions
            for your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
