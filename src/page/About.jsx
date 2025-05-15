import { CheckCircle, Award, Users } from "lucide-react"
import { Links } from "react-router"
import HeroImage from "../assets/Hero Images.jpg"
import FacalityImage from "../assets/Facality.jpg"
import ISO_9001_2015 from '../assets/Certificate/ISO_9001-2015.svg.png'
import msme_Registration from '../assets/Certificate/msme-registration-certificate.png'
import NABL_Registration from '../assets/Certificate/NABL_Official_LOGO_Registered.png'
import RoHS_Registration from '../assets/Certificate/What-is-RoHS-Compliance.webp'
export default function AboutPage() {
  // Company milestones
  const milestones = [
    { year: "2005", event: "Company founded with a focus on lightning protection systems" },
    { year: "2008", event: "Expanded product line to include earthing solutions" },
    { year: "2012", event: "Achieved ISO 9001:2015 certification" },
    { year: "2015", event: "Introduced ESE Lightning Arrestors compliant with NFC 17-102" },
    { year: "2018", event: "Expanded manufacturing facility to increase production capacity" },
    { year: "2020", event: "Launched new range of GI Earthing Electrodes with CCM technology" },
    { year: "2023", event: "Achieved MSME, ROHS, and NABL certifications" },
  ]

  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl">
            Learn about our journey, mission, and commitment to providing high-quality lightning protection and earthing
            solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 2005, TPS Lightning & Earthing Solutions has grown to become a leading provider of lightning
              protection and earthing systems in India. Our journey began with a simple mission: to protect lives and
              infrastructure from the devastating effects of lightning strikes.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, we have expanded our product range to include a comprehensive suite of lightning
              protection and earthing solutions, catering to various industries and applications. Our commitment to
              quality and innovation has earned us the trust of clients across the country.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Today, we continue to innovate and improve our products, staying at the forefront of technological
              advancements in the field of lightning protection and earthing.
            </p>
          </div>
          <div className="relative">
            <img src={HeroImage} alt="Company History" className=" rounded object-contain" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 rounded-full p-2 mr-3">
                  <CheckCircle className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To provide high-quality lightning protection and earthing solutions that safeguard lives and
                infrastructure, while maintaining the highest standards of quality and customer satisfaction.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 rounded-full p-2 mr-3">
                  <Award className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be the leading provider of lightning protection and earthing solutions in India, recognized for our
                innovation, quality, and commitment to customer satisfaction.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 rounded-full p-2 mr-3">
                  <Users className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Quality: We are committed to providing the highest quality products.</li>
                <li>• Innovation: We continuously strive to improve and innovate.</li>
                <li>• Integrity: We conduct our business with honesty and transparency.</li>
                <li>• Customer Focus: We prioritize customer satisfaction in all we do.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="relative h-24 w-24 mx-auto mb-4">
                <img
                  src={ISO_9001_2015}
                  alt="ISO 9001:2015"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">
                Our quality management system is certified to ISO 9001:2015, ensuring consistent quality in all our
                products and processes.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="relative h-24 w-24 mx-auto mb-4">
                <img
                  src={msme_Registration}
                  alt="MSME Registered"
                  
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">MSME Registered</h3>
              <p className="text-gray-600 text-sm">
                We are registered under the Micro, Small & Medium Enterprises Development Act, recognizing our
                contribution to the economy.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="relative h-24 w-24 mx-auto mb-4">
                <img
                  src={RoHS_Registration}
                  alt="ROHS Compliant"
                
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ROHS Compliant</h3>
              <p className="text-gray-600 text-sm">
                Our products comply with the Restriction of Hazardous Substances Directive, ensuring they are
                environmentally friendly.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="relative h-24 w-24 mx-auto mb-4">
                <img src={NABL_Registration} alt="NABL Tested" className=" object-contain h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NABL Tested</h3>
              <p className="text-gray-600 text-sm">
                Our products are tested by National Accreditation Board for Testing and Calibration Laboratories
                accredited labs.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div className="bg-white shadow-md rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-amber-700 mb-2">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Manufacturing Facility</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative ">
              <img
                src={FacalityImage}
                alt="Manufacturing Facility"
                className="object-contain h-full w-full rounded "
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-700 mb-4">
                Our state-of-the-art manufacturing facility is equipped with the latest technology and machinery,
                enabling us to produce high-quality lightning protection and earthing solutions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The facility follows strict quality control measures at every stage of production, ensuring that our
                products meet the highest standards of quality and reliability.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Facility Highlights:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Advanced production equipment</li>
                  <li>Stringent quality control processes</li>
                  <li>Skilled workforce</li>
                  <li>In-house testing facilities</li>
                  <li>Environmentally friendly practices</li>
                  <li>Efficient inventory management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-lg mb-6">
            Contact our team to discuss your lightning protection and earthing requirements. We're here to help you find
            the right solution for your needs.
          </p>
          <p
            href="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md"
          >
            Contact Us Today
          </p>
        </div>
      </div>
    </div>
  )
}
