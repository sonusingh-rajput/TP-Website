import Pure_Copper_Earthing_Electrodes from '../../assets/Product/Earthing Solutions/Pure Copper Earthing Electrodes.jpg'
import Pure_Copper_Earthing_Electrodes_TPS_10 from '../../assets/Product/Earthing Solutions/Pure Copper Earthing Electrodes TPS 10.jpg'
import Pure_Copper_Earthing_Electrodes_TPS_15 from '../../assets/Product/Earthing Solutions/Pure Copper Earthing Electrodes TPS 15.jpg'
import Pure_Copper_Earthing_Electrodes_TPS_25 from '../../assets/Product/Earthing Solutions/Pure Copper Earthing Electrodes TPS 25.jpg'
import GI_Earthing_Electrodes from '../../assets/Product/Earthing Solutions/GI Earthing Electrodes.jpg'
import GI_Earthing_Electrodes_48_TPS_GI from '../../assets/Product/Earthing Solutions/GI Earthing Electrodes 48 TPS GI.jpg'
import GI_Earthing_Electrodes_58_TPS_GI from '../../assets/Product/Earthing Solutions/GI Earthing Electrodes 58 TPS GI.jpg'
import GI_Earthing_Electrodes_88_TPS_GI from '../../assets/Product/Earthing Solutions/GI Earthing Electrodes 88 TPS GI.jpg'

export default function EarthingSolutions() {
  // Copper Earthing Electrodes specifications
  const copperElectrodes = [
    {
      model: "TPS 25",
      diameter: "25mm",
      length: "3m",
      weight: "14.5kg",
      terminal: "50x6mm",
      features: ["High conductivity", "Corrosion resistant", "Long service life", "Low earth resistance"],
      image:Pure_Copper_Earthing_Electrodes_TPS_25
    },
    {
      model: "TPS 15",
      diameter: "15mm",
      length: "3m",
      weight: "8.2kg",
      terminal: "50x6mm",
      features: ["Medium duty applications", "Excellent conductivity", "Corrosion resistant", "Cost-effective"],
      image:Pure_Copper_Earthing_Electrodes_TPS_15
    },
    {
      model: "TPS 10",
      diameter: "10mm",
      length: "3m",
      weight: "5.5kg",
      terminal: "50x6mm",
      features: ["Light duty applications", "Good conductivity", "Corrosion resistant", "Economical solution"],
      image:Pure_Copper_Earthing_Electrodes_TPS_10
    },
  ]

  // GI Earthing Electrodes specifications
  const giElectrodes = [
    {
      model: "48 TPS GI",
      pipeSize: "48mm",
      length: "3m",
      thickness: "3mm",
      terminal: "50x6mm",
      innerStrip: "25x3mm",
      features: ["Heavy duty applications", "Hot-dip galvanized", "CCM compound filled", "Corrosion resistant"],
      image:GI_Earthing_Electrodes_48_TPS_GI
    },
    {
      model: "58 TPS GI",
      pipeSize: "58mm",
      length: "3m",
      thickness: "3mm",
      terminal: "50x6mm",
      innerStrip: "25x3mm",
      features: ["Extra heavy duty", "Hot-dip galvanized", "CCM compound filled", "Superior performance"],
      image:GI_Earthing_Electrodes_58_TPS_GI
    },
    {
      model: "88 TPS GI",
      pipeSize: "88mm",
      length: "3m",
      thickness: "4mm",
      terminal: "50x6mm",
      innerStrip: "25x3mm",
      features: ["Industrial applications", "Hot-dip galvanized", "CCM compound filled", "Maximum conductivity"],
      image:GI_Earthing_Electrodes_88_TPS_GI
    },
  ]

  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Earthing Solutions</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive range of earthing systems designed to provide low-resistance paths to ground, ensuring safety
            and protection for electrical systems and lightning protection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section id="copper" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pure Copper Earthing Electrodes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our pure copper earthing electrodes provide superior conductivity and corrosion resistance, ensuring
                long-lasting and reliable earthing for your electrical systems and lightning protection.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Made from high-quality copper, these electrodes offer low earth resistance and excellent
                current-carrying capacity, making them ideal for critical applications.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Superior electrical conductivity</li>
                  <li>Excellent corrosion resistance</li>
                  <li>Long service life (25+ years)</li>
                  <li>Low earth resistance</li>
                  <li>Suitable for all soil conditions</li>
                  <li>Minimal maintenance requirements</li>
                </ul>
              </div>
            </div>
            <div className="relative ">
              <img
                src={Pure_Copper_Earthing_Electrodes}
                alt="Pure Copper Earthing Electrode"
                className="object-contain rounded-2xl"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Available Models</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="py-3 px-4 border-b text-left">Model</th>
                    <th className="py-3 px-4 border-b text-left">Diameter</th>
                    <th className="py-3 px-4 border-b text-left">Length</th>
                    <th className="py-3 px-4 border-b text-left">Weight</th>
                    <th className="py-3 px-4 border-b text-left">Terminal Size</th>
                  </tr>
                </thead>
                <tbody>
                  {copperElectrodes.map((electrode, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b font-medium">{electrode.model}</td>
                      <td className="py-3 px-4 border-b">{electrode.diameter}</td>
                      <td className="py-3 px-4 border-b">{electrode.length}</td>
                      <td className="py-3 px-4 border-b">{electrode.weight}</td>
                      <td className="py-3 px-4 border-b">{electrode.terminal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {copperElectrodes.map((electrode, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={electrode.image}
                    alt={`${electrode.model} Copper Electrode`}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{electrode.model}</h3>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>
                      <span className="font-medium">Diameter:</span> {electrode.diameter}
                    </li>
                    <li>
                      <span className="font-medium">Length:</span> {electrode.length}
                    </li>
                    <li>
                      <span className="font-medium">Weight:</span> {electrode.weight}
                    </li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Features:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      {electrode.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Installation Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Pit Preparation</h4>
                <p className="text-gray-700">
                  Dig a pit of at least 10 feet depth and 2 feet diameter. The depth may vary based on soil conditions
                  and the required earth resistance value.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Backfill Compound</h4>
                <p className="text-gray-700">
                  Use our specialized backfill compound around the electrode to reduce soil resistivity and enhance the
                  performance of the earthing system.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Connections</h4>
                <p className="text-gray-700">
                  Ensure proper connections between the electrode and the earth conductor using appropriate connectors
                  and joints to prevent high-resistance connections.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Testing</h4>
                <p className="text-gray-700">
                  After installation, test the earth resistance using a calibrated earth tester. The resistance should
                  be below the specified value for the application.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gi" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 relative ">
              <img src={GI_Earthing_Electrodes} alt="GI Earthing Electrode" className="object-contain rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GI Earthing Electrodes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Galvanized Iron (GI) earthing electrodes provide a cost-effective and reliable earthing solution for
                various applications. The hot-dip galvanization process ensures excellent corrosion resistance.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                These electrodes are filled with our special CCM compound, which enhances conductivity and reduces earth
                resistance, ensuring optimal performance in all soil conditions.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Cost-effective solution</li>
                  <li>Hot-dip galvanized for corrosion resistance</li>
                  <li>CCM compound filled for enhanced performance</li>
                  <li>Available in various sizes for different applications</li>
                  <li>Compliant with industry standards</li>
                  <li>Long service life</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Available Models</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="py-3 px-4 border-b text-left">Model</th>
                    <th className="py-3 px-4 border-b text-left">Pipe Size</th>
                    <th className="py-3 px-4 border-b text-left">Length</th>
                    <th className="py-3 px-4 border-b text-left">Thickness</th>
                    <th className="py-3 px-4 border-b text-left">Terminal Size</th>
                    <th className="py-3 px-4 border-b text-left">Inner Strip</th>
                  </tr>
                </thead>
                <tbody>
                  {giElectrodes.map((electrode, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b font-medium">{electrode.model}</td>
                      <td className="py-3 px-4 border-b">{electrode.pipeSize}</td>
                      <td className="py-3 px-4 border-b">{electrode.length}</td>
                      <td className="py-3 px-4 border-b">{electrode.thickness}</td>
                      <td className="py-3 px-4 border-b">{electrode.terminal}</td>
                      <td className="py-3 px-4 border-b">{electrode.innerStrip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {giElectrodes.map((electrode, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative ">
                  <img
                    src={electrode.image}
                    alt={`${electrode.model} GI Electrode`}                   
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{electrode.model}</h3>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>
                      <span className="font-medium">Pipe Size:</span> {electrode.pipeSize}
                    </li>
                    <li>
                      <span className="font-medium">Length:</span> {electrode.length}
                    </li>
                    <li>
                      <span className="font-medium">Thickness:</span> {electrode.thickness}
                    </li>
                    <li>
                      <span className="font-medium">Inner Strip:</span> {electrode.innerStrip}
                    </li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Features:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      {electrode.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">CCM Compound Technology</h3>
            <p className="text-gray-700 mb-4">
              Our GI earthing electrodes are filled with a special Conductive Cement Material (CCM) compound that
              significantly enhances the performance of the earthing system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Enhanced Conductivity</h4>
                <p className="text-gray-700">
                  The CCM compound has high electrical conductivity, which helps in reducing the earth resistance and
                  improving the overall performance of the earthing system.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Moisture Retention</h4>
                <p className="text-gray-700">
                  The compound has excellent moisture retention properties, ensuring consistent performance even in dry
                  soil conditions or during seasonal variations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Corrosion Protection</h4>
                <p className="text-gray-700">
                  The CCM compound provides additional protection against corrosion, extending the service life of the
                  earthing electrode.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Stable Resistance</h4>
                <p className="text-gray-700">
                  The compound helps in maintaining stable earth resistance values over time, ensuring consistent
                  protection for your electrical systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Earthing Solution?</h2>
          <p className="text-lg mb-6">
            Our team of experts can help you select the most suitable earthing system for your specific requirements.
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
