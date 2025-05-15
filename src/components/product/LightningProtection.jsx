import ESE_Lightning_Arrestors from '../../assets/Product/ESE Lightning Arrestors/ESE Lightning Arrestors.jpg'
import Conventional_Lightning_Arrestors from '../../assets/Product/ESE Lightning Arrestors/Conventional Lightning Arrestors.jpg'
import Copper_Bounded_Arrestor from '../../assets/Product/ESE Lightning Arrestors/Copper Bounded Arrestor.jpg'
import Custom_Solutions from '../../assets/Product/ESE Lightning Arrestors/Custom Solutions..jpg'
import Pure_Copper_Arrestor from '../../assets/Product/ESE Lightning Arrestors/Pure Copper Arrestor.jpg'

export default function LightningProtection() {
  // Protection radius table data for ESE Lightning Arrestors
  const protectionRadiusTable = [
    { height: 2, level1: 19, level2: 25, level3: 32 },
    { height: 3, level1: 28, level2: 35, level3: 43 },
    { height: 4, level1: 38, level2: 45, level3: 54 },
    { height: 5, level1: 48, level2: 55, level3: 63 },
    { height: 6, level1: 57, level2: 64, level3: 72 },
    { height: 8, level1: 60, level2: 72, level3: 79 },
    { height: 10, level1: 63, level2: 79, level3: 85 },
    { height: 15, level1: 79, level2: 87, level3: 95 },
    { height: 20, level1: 92, level2: 101, level3: 110 },
  ]

  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Lightning Protection Solutions</h1>
          <p className="text-xl max-w-3xl">
            Advanced lightning protection systems designed to safeguard your infrastructure from lightning strikes. Our
            solutions comply with international standards and provide reliable protection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section id="ese" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ESE Lightning Arrestors</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Early Streamer Emission (ESE) lightning arrestors provide advanced protection by emitting an upward
                leader earlier than conventional systems, creating a preferential point for lightning strikes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The Tesel D 20 model is designed in compliance with the NFC 17-102 (2011) standard and offers superior
                protection with an extended radius compared to conventional systems.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Early Streamer Emission technology</li>
                  <li>NFC 17-102 (2011) compliant</li>
                  <li>Extended protection radius</li>
                  <li>Maintenance-free design</li>
                  <li>Corrosion-resistant materials</li>
                  <li>Easy installation</li>
                </ul>
              </div>
            </div>
            <div className="relative ">
              <img src={ESE_Lightning_Arrestors} alt="ESE Lightning Arrestor" className="object-contain rounded-2xl" />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Protection Radius Table (Tesel D 20)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="py-3 px-4 border-b text-left">Height (m)</th>
                    <th className="py-3 px-4 border-b text-left">Level I (m)</th>
                    <th className="py-3 px-4 border-b text-left">Level II (m)</th>
                    <th className="py-3 px-4 border-b text-left">Level III (m)</th>
                  </tr>
                </thead>
                <tbody>
                  {protectionRadiusTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b">{row.height}</td>
                      <td className="py-3 px-4 border-b">{row.level1}</td>
                      <td className="py-3 px-4 border-b">{row.level2}</td>
                      <td className="py-3 px-4 border-b">{row.level3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Protection levels as per NFC 17-102 (2011) standard: Level I (high protection), Level II (medium
              protection), Level III (standard protection)
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Installation Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Positioning</h4>
                <p className="text-gray-700">
                  The ESE lightning arrestor should be installed at the highest point of the structure to be protected,
                  ensuring it extends at least 2 meters above the highest point.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Down Conductor</h4>
                <p className="text-gray-700">
                  Use a minimum of 70mm² copper conductor for the down conductor path, ensuring the most direct route to
                  the earth.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Earthing</h4>
                <p className="text-gray-700">
                  Connect to a dedicated earthing system with resistance less than 10 ohms, preferably using our copper
                  or GI earthing solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Testing</h4>
                <p className="text-gray-700">
                  Regular testing of the earthing system is recommended to ensure optimal performance of the lightning
                  protection system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="conventional" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 relative">
              <img
                src={Conventional_Lightning_Arrestors}
                alt="Conventional Lightning Arrestor"
                
                className="object-contain rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conventional Lightning Arrestors (Spike Type)</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our conventional lightning arrestors (spike type) provide reliable protection for structures by creating
                a preferred point for lightning strikes, directing the current safely to the ground.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Designed in compliance with IEC-62305 standards, these arrestors are available in various materials and
                dimensions to suit different applications.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Available Options:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Materials:</span> Pure Copper, Copper Bounded
                  </li>
                  <li>
                    <span className="font-medium">Diameters:</span> 12mm, 16mm, 19mm, 25mm
                  </li>
                  <li>
                    <span className="font-medium">Lengths:</span> 300mm, 500mm, 1000mm, 1500mm
                  </li>
                  <li>
                    <span className="font-medium">Standard:</span> IEC-62305 compliant
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative ">
                <img
                  src={Pure_Copper_Arrestor}
                  alt="Copper Lightning Arrestor"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pure Copper Arrestor</h3>
                <p className="text-gray-600 mb-4">
                  Made from high-conductivity pure copper for superior performance and corrosion resistance.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>
                    <span className="font-medium">Conductivity:</span> Excellent
                  </li>
                  <li>
                    <span className="font-medium">Corrosion Resistance:</span> High
                  </li>
                  <li>
                    <span className="font-medium">Lifespan:</span> 25+ years
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={Copper_Bounded_Arrestor}
                  alt="Copper Bounded Lightning Arrestor"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Copper Bounded Arrestor</h3>
                <p className="text-gray-600 mb-4">
                  Copper bounded design offers a balance of performance and cost-effectiveness.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>
                    <span className="font-medium">Conductivity:</span> Very Good
                  </li>
                  <li>
                    <span className="font-medium">Corrosion Resistance:</span> Good
                  </li>
                  <li>
                    <span className="font-medium">Lifespan:</span> 15-20 years
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={Custom_Solutions}
                  alt="Custom Lightning Arrestor"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed lightning arrestors for specific applications and requirements.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>
                    <span className="font-medium">Materials:</span> As per requirement
                  </li>
                  <li>
                    <span className="font-medium">Dimensions:</span> Custom specifications
                  </li>
                  <li>
                    <span className="font-medium">Applications:</span> Specialized structures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need Expert Advice on Lightning Protection?</h2>
          <p className="text-lg mb-6">
            Our team of specialists can help you choose the right lightning protection solution for your specific
            requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </div>
  )
}
