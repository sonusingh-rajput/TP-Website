
import TPS_Backfill_Compound from "../../assets/Product/Backfill Compound/TPS Backfill Compound.jpg"
import Step_1_Pit_Preparation from "../../assets/Product/Backfill Compound/Step 1_ Pit Preparation.jpg"
import Step_2_Electrode_Placement from "../../assets/Product/Backfill Compound/Step 2_ Electrode Placement.jpg"
import Step_3_Compound_Application from "../../assets/Product/Backfill Compound/Step 3_ Compound Application.jpg"
import Step_4_Compaction_Testing from "../../assets/Product/Backfill Compound/Step 4_ Compaction & Testing.jpg"
export default function BackfillCompound() {
  // Technical specifications
  const technicalSpecs = [
    { property: "Resistivity", value: "< 0.12 Ohm-meter" },
    { property: "pH Value", value: "8.0 - 9.0" },
    { property: "Moisture Content", value: "< 5%" },
    { property: "Leaching Resistance", value: "Excellent" },
    { property: "Particle Size", value: "< 0.1mm" },
    { property: "Hygroscopic Property", value: "High" },
    { property: "Corrosive Nature", value: "Non-corrosive" },
    { property: "Thermal Stability", value: "-10°C to +60°C" },
  ]

  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Backfill Compound</h1>
          <p className="text-xl max-w-3xl">
            Specialized conductive compound designed to reduce soil resistivity and enhance the performance of earthing
            systems.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">TPS Backfill Compound</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our specialized backfill compound is designed to significantly reduce soil resistivity and enhance the
              performance of earthing systems in all soil conditions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The compound has excellent moisture retention properties, ensuring consistent performance even in dry soil
              conditions or during seasonal variations.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Significantly reduces earth resistance</li>
                <li>Excellent moisture retention</li>
                <li>Non-corrosive and environmentally friendly</li>
                <li>Long service life</li>
                <li>Suitable for all soil conditions</li>
                <li>Easy to apply</li>
              </ul>
            </div>
          </div>
          <div className="relative h-80 lg:h-96">
            <img src={TPS_Backfill_Compound} alt="Backfill Compound" className="object-contain rounded-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="py-3 px-4 border-b text-left">Property</th>
                    <th className="py-3 px-4 border-b text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b font-medium">{spec.property}</td>
                      <td className="py-3 px-4 border-b">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">How It Works</h3>
            <p className="text-gray-700 mb-4">
              The TPS Backfill Compound works by creating a conductive zone around the earthing electrode, effectively
              increasing its surface area and reducing the contact resistance with the soil.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-amber-700 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Reduces Soil Resistivity</h4>
                  <p className="text-gray-600">
                    The compound has significantly lower resistivity than natural soil, creating a low-resistance path
                    for electrical currents.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-amber-700 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Retains Moisture</h4>
                  <p className="text-gray-600">
                    The hygroscopic properties of the compound help retain moisture, ensuring consistent performance
                    even in dry conditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-amber-700 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Stabilizes Resistance</h4>
                  <p className="text-gray-600">
                    By creating a stable environment around the electrode, the compound helps maintain consistent earth
                    resistance values over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Application Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative ">
                <img src={Step_1_Pit_Preparation} alt="Pit Preparation"  className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 1: Pit Preparation</h4>
                <p className="text-gray-600">
                  Dig a pit of appropriate dimensions based on the earthing electrode size and the required earth
                  resistance value.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative ">
                <img src={Step_2_Electrode_Placement} alt="Electrode Placement"  className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 2: Electrode Placement</h4>
                <p className="text-gray-600">
                  Place the earthing electrode in the center of the pit, ensuring it is vertical and stable.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative ">
                <img src={Step_3_Compound_Application} alt="Compound Application" className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 3: Compound Application</h4>
                <p className="text-gray-600">
                  Mix the backfill compound with water as per instructions and pour it around the electrode, filling the
                  pit.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative ">
                <img src={Step_4_Compaction_Testing} alt="Final Setup"  className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 4: Compaction & Testing</h4>
                <p className="text-gray-600">
                  Compact the mixture and allow it to set. Test the earth resistance using a calibrated earth tester.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Packaging Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">25 KG Bag</h4>
              <p className="text-gray-600 mb-4">
                Suitable for small to medium earthing installations. Ideal for residential applications.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Coverage:</span> Approx. 1 electrode pit
                </li>
                <li>
                  <span className="font-medium">Shelf Life:</span> 2 years
                </li>
                <li>
                  <span className="font-medium">Storage:</span> Keep in dry place
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">50 KG Bag</h4>
              <p className="text-gray-600 mb-4">
                Ideal for medium to large installations. Cost-effective for commercial applications.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Coverage:</span> Approx. 2 electrode pits
                </li>
                <li>
                  <span className="font-medium">Shelf Life:</span> 2 years
                </li>
                <li>
                  <span className="font-medium">Storage:</span> Keep in dry place
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Bulk Orders</h4>
              <p className="text-gray-600 mb-4">
                Custom packaging available for large industrial projects and special requirements.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Minimum Order:</span> 500 KG
                </li>
                <li>
                  <span className="font-medium">Customization:</span> Available
                </li>
                <li>
                  <span className="font-medium">Delivery:</span> As per agreement
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Earthing System Performance</h2>
          <p className="text-lg mb-6">
            Our backfill compound can significantly improve the performance of your earthing system, ensuring better
            protection for your electrical installations.
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
