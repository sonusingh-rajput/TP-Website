import ISO_9001_2015 from '../assets/Certificate/ISO_9001-2015.svg.png'
import msme_Registration from '../assets/Certificate/msme-registration-certificate.png'
import NABL_Registration from '../assets/Certificate/NABL_Official_LOGO_Registered.png'
import RoHS_Registration from '../assets/Certificate/What-is-RoHS-Compliance.webp'

export default function Certifications() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "International standard for quality management systems",
      details:
        "Our ISO 9001:2015 certification demonstrates our commitment to providing products and services that meet customer and regulatory requirements. It ensures that we have established processes for continuous improvement and customer satisfaction.",
      image: ISO_9001_2015,
    },
    {
      name: "MSME Registered",
      description: "Micro, Small & Medium Enterprises Registration",
      details:
        "Our MSME registration recognizes our contribution to the economy as a small or medium-sized enterprise. It validates our business operations and provides us with certain benefits and protections under the MSME Development Act.",
      image: msme_Registration,
    },
    {
      name: "ROHS Compliant",
      description: "Restriction of Hazardous Substances Directive",
      details:
        "Our ROHS compliance certification confirms that our products do not contain restricted hazardous substances above the permitted levels. This ensures that our products are environmentally friendly and safe for use.",
      image: RoHS_Registration,
    },
    {
      name: "NABL Tested",
      description: "National Accreditation Board for Testing and Calibration Laboratories",
      details:
        "Our products are tested by NABL accredited laboratories, ensuring that the testing procedures and results are reliable and meet international standards. This provides assurance of the quality and performance of our products.",
      image: NABL_Registration,
    },
  ];

  const standards = [
    {
      name: "NFC 17-102 (2011)",
      description: "French standard for Early Streamer Emission lightning protection systems",
      details:
        "This standard specifies the requirements for the design, installation, and maintenance of Early Streamer Emission (ESE) lightning protection systems. Our ESE Lightning Arrestors comply with this standard, ensuring reliable protection against lightning strikes.",
      products: ["ESE Lightning Arrestors"],
    },
    {
      name: "IEC-62305",
      description: "International standard for lightning protection systems",
      details:
        "This standard provides comprehensive guidelines for the protection of structures against lightning, including risk assessment, physical damage, and electrical and electronic systems failure. Our conventional lightning arrestors and earthing systems comply with this standard.",
      products: ["Conventional Lightning Arrestors", "Earthing Systems"],
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Certifications & Standards</h1>
          <p className="text-xl max-w-3xl">
            Our commitment to quality and compliance is reflected in our certifications and adherence to international standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Certifications</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            We are proud to have received various certifications that validate our commitment to quality, safety, and environmental responsibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-48 md:h-full flex items-center justify-center p-4">
                    <img src={cert.image} alt={cert.name} className="object-contain max-h-full max-w-full" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 font-medium mb-4">{cert.description}</p>
                    <p className="text-gray-700">{cert.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance with Standards</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Our products comply with international standards, ensuring reliability, safety, and performance.
          </p>

          <div className="space-y-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{standard.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{standard.description}</p>
                <p className="text-gray-700 mb-4">{standard.details}</p>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Applicable Products:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {standard.products.map((product, i) => (
                      <li key={i}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Importance of Certifications & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-700">
                Certifications like ISO 9001:2015 ensure that our products and processes meet international quality standards. This provides assurance to our customers that they are receiving high-quality products that will perform reliably.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety & Reliability</h3>
              <p className="text-gray-700">
                Compliance with standards like NFC 17-102 and IEC-62305 ensures that our lightning protection and earthing systems provide effective protection against lightning strikes and electrical faults, safeguarding lives and infrastructure.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Environmental Responsibility</h3>
              <p className="text-gray-700">
                Certifications like ROHS compliance demonstrate our commitment to environmental responsibility by ensuring that our products do not contain harmful substances that could impact the environment or human health.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg mb-6">
            If you have any questions about our certifications or the standards our products comply with, please don't hesitate to contact us. Our team is here to help.
          </p>
          <p
            to="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md"
          >
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
}
