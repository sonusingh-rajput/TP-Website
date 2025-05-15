import TPS_Earth_Pit_Covers from "../../assets/Product/Earth Pit Covers/TPS Earth Pit Covers.jpg"
import TPS_Earth_Pit_Covers_TPS_610 from "../../assets/Product/Earth Pit Covers/TPS Earth Pit Covers TPS 610.jpg"
import TPS_Earth_Pit_Covers_TPS_910 from "../../assets/Product/Earth Pit Covers/TPS Earth Pit Covers TPS 910.jpg"
export default function EarthPitCovers() {
  // Earth Pit Cover specifications
  const pitCovers = [
    {
      model: "TPS 610",
      material: "High-Density Polyethylene (HDPE)",
      dimensions: "300mm x 300mm",
      loadCapacity: "5 Tons",
      color: "Black/Yellow",
      features: ["UV resistant", "Twist-lock design", "Non-conductive", "Durable", "Easy installation"],
      image:TPS_Earth_Pit_Covers_TPS_610
    },
    {
      model: "TPS 910",
      material: "High-Density Polyethylene (HDPE)",
      dimensions: "450mm x 450mm",
      loadCapacity: "10 Tons",
      color: "Black/Yellow",
      features: ["Heavy-duty", "UV resistant", "Twist-lock design", "Non-conductive", "High visibility markings"],
      image:TPS_Earth_Pit_Covers_TPS_910
    },
  ]

  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Earth Pit Covers</h1>
          <p className="text-xl max-w-3xl">
            Durable and high-visibility earth pit covers designed to protect earthing installations while providing easy
            access for maintenance and testing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">TPS Earth Pit Covers</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our high-quality earth pit covers are designed to protect earthing installations from damage while
              providing easy access for maintenance and testing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Made from durable High-Density Polyethylene (HDPE), these covers are UV resistant, non-conductive, and
              designed to withstand heavy loads, making them suitable for various applications.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>High load-bearing capacity</li>
                <li>UV resistant and durable</li>
                <li>Non-conductive material</li>
                <li>High visibility markings</li>
                <li>Twist-lock design for secure closure</li>
                <li>Easy installation and maintenance</li>
              </ul>
            </div>
          </div>
          <div className="relative ">
            <img src={TPS_Earth_Pit_Covers} alt="Earth Pit Cover"  className="object-contain rounded-2xl" />
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Available Models</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="py-3 px-4 border-b text-left">Model</th>
                  <th className="py-3 px-4 border-b text-left">Material</th>
                  <th className="py-3 px-4 border-b text-left">Dimensions</th>
                  <th className="py-3 px-4 border-b text-left">Load Capacity</th>
                  <th className="py-3 px-4 border-b text-left">Color</th>
                </tr>
              </thead>
              <tbody>
                {pitCovers.map((cover, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 border-b font-medium">{cover.model}</td>
                    <td className="py-3 px-4 border-b">{cover.material}</td>
                    <td className="py-3 px-4 border-b">{cover.dimensions}</td>
                    <td className="py-3 px-4 border-b">{cover.loadCapacity}</td>
                    <td className="py-3 px-4 border-b">{cover.color}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {pitCovers.map((cover, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative ">
                <img
                  src={cover.image}
                  alt={`${cover.model} Earth Pit Cover`}
                  
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{cover.model}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Material</h4>
                    <p className="text-gray-800">{cover.material}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Dimensions</h4>
                    <p className="text-gray-800">{cover.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Load Capacity</h4>
                    <p className="text-gray-800">{cover.loadCapacity}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Color</h4>
                    <p className="text-gray-800">{cover.color}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Features:</h4>
                  <ul className="list-disc pl-5 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-1">
                    {cover.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Twist-Lock Design</h3>
            <p className="text-gray-700 mb-4">
              Our earth pit covers feature a unique twist-lock design that ensures secure closure while allowing easy
              access for maintenance and testing.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-amber-700 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Secure Closure</h4>
                  <p className="text-gray-600">
                    The twist-lock mechanism ensures that the cover remains securely in place, preventing accidental
                    opening.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-amber-700 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Easy Access</h4>
                  <p className="text-gray-600">
                    The cover can be easily opened for maintenance and testing by authorized personnel.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-amber-700 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Tamper Resistant</h4>
                  <p className="text-gray-600">The design helps prevent unauthorized access to the earthing system.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Applications</h3>
            <p className="text-gray-700 mb-4">
              Our earth pit covers are suitable for various applications across different industries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Industrial</h4>
                <p className="text-gray-600">
                  Heavy-duty covers for industrial facilities with high load requirements.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Commercial</h4>
                <p className="text-gray-600">Durable covers for commercial buildings and office complexes.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Residential</h4>
                <p className="text-gray-600">Compact covers for residential earthing installations.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Infrastructure</h4>
                <p className="text-gray-600">High-visibility covers for infrastructure projects like telecom towers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Complete Your Earthing System</h2>
          <p className="text-lg mb-6">
            Our earth pit covers are the perfect complement to your earthing system, providing protection and easy
            access for maintenance and testing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  )
}
