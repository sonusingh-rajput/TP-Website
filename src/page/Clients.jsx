import {
  Factory,
  Building2,
  Radio,
  Home,
  Building,
  Server,
  Zap,
  Warehouse,
} from "lucide-react";

import Bihar_Government from "../assets/Clients Logo/Bihar_Government_Banner.png";
import Breda_Firmenemblem from "../assets/Clients Logo/Breda_Firmenemblem.svg.png";
import JWS_Steel from "../assets/Clients Logo/JWS Steel.png";
import KEC_International from "../assets/Clients Logo/KEC_International-Logo.png";
import laxmi_agni from "../assets/Clients Logo/laxmi agni logo.png";
import Maso_Automotives from "../assets/Clients Logo/Maso Automotives.png";
import Reliance_retail from "../assets/Clients Logo/Reliance retail logo.png";
import Samsung_Logo from "../assets/Clients Logo/Samsung-Logo.wine.png";
import Suzlon_Logo from "../assets/Clients Logo/Suzlon-Logo.wine.png";
import Tata_Steel from "../assets/Clients Logo/Tata Steel.svg";
import Tata_logo from "../assets/Clients Logo/Tata_logo.svg.png";
import waaree_solar from "../assets/Clients Logo/waaree-solar-logo.png";

import Sarah_Johnson from "../assets/Clients Image/Client1.png";
import John_Smith from "../assets/Clients Image/Client2.png";
import Michael_Brown from "../assets/Clients Image/Client3.png";

import Telecom_Tower_Lightning_Protection from "../assets/Case Studies Images/Telecom Tower Lightning Protection.jpg";
import Industrial_Facility_Earthing_Solution from "../assets/Case Studies Images/Industrial Facility Earthing Solution.jpg";
import Commercial_Building_Protection from "../assets/Case Studies Images/Commercial Building Protection.jpg";

export default function Clients() {
  const clientLogos = [
    {
      name: "Tata Steel",
      logo: Tata_Steel,
    },
    {
      name: "Reliance Retail ",
      logo: Reliance_retail,
    },
    {
      name: "Bihar Government ",
      logo: Bihar_Government,
    },
    {
      name: "Breda Firmenemblem ",
      logo: Breda_Firmenemblem,
    },
    {
      name: "JWS Steel ",
      logo: JWS_Steel,
    },
    {
      name: "KEC International ",
      logo: KEC_International,
    },
    {
      name: "laxmi Agni ",
      logo: laxmi_agni,
    },
    {
      name: "Maso Automotives ",
      logo: Maso_Automotives,
    },
    {
      name: "Tata  ",
      logo: Tata_logo,
    },
    {
      name: "Samsung Logo ",
      logo: Samsung_Logo,
    },
    {
      name: "Suzlon Logo ",
      logo: Suzlon_Logo,
    },
    {
      name: "Waaree Solar ",
      logo: waaree_solar,
    },
  ];
  const testimonials = [
    {
      quote:
        "The lightning protection system installed by TPS has been extremely effective. We've had several lightning strikes in our area, but our facility remained completely protected.",
      author: "John Smith",
      position: "Facility Manager",
      company: "ABC Manufacturing",
      image: John_Smith,
    },
    {
      quote:
        "We've been using TPS earthing solutions for all our telecom towers. The quality of their products and the technical support they provide is exceptional.",
      author: "Sarah Johnson",
      position: "Infrastructure Head",
      company: "XYZ Telecom",
      image: Sarah_Johnson,
    },
    {
      quote:
        "The backfill compound from TPS significantly improved our earthing system's performance. We've seen a notable reduction in earth resistance values.",
      author: "Michael Brown",
      position: "Electrical Engineer",
      company: "Power Solutions Ltd.",
      image: Michael_Brown,
    },
  ];

  const caseStudies = [
    {
      title: "Telecom Tower Lightning Protection",
      description:
        "Implementation of ESE Lightning Arrestors and Copper Earthing Systems for a network of 50+ telecom towers, resulting in zero lightning-related incidents over a 5-year period.",
      image: Telecom_Tower_Lightning_Protection,
      results: [
        "100% protection against lightning strikes",
        "Reduced maintenance costs",
        "Extended equipment lifespan",
      ],
    },
    {
      title: "Industrial Facility Earthing Solution",
      description:
        "Complete earthing system upgrade for a large manufacturing facility, including GI Earthing Electrodes, Backfill Compound, and Earth Pit Covers, resulting in improved electrical safety and compliance with regulations.",
      image: Industrial_Facility_Earthing_Solution,
      results: [
        "Earth resistance reduced by 60%",
        "Compliance with safety regulations",
        "Enhanced protection for sensitive equipment",
      ],
    },
    {
      title: "Commercial Building Protection",
      description:
        "Comprehensive lightning protection and earthing solution for a high-rise commercial building, including ESE Lightning Arrestors and Pure Copper Earthing Electrodes.",
      image: Commercial_Building_Protection,
      results: [
        "Complete building protection",
        "Insurance premium reduction",
        "Peace of mind for tenants",
      ],
    },
  ];

  const industries = [
    {
      name: "Telecommunications",
      logo: <Factory className="h-10 w-10 text-amber-700" />,
    },
    {
      name: "Power & Energy",
      logo: <Zap className="h-10 w-10 text-amber-700" />,
    },
    {
      name: "Construction",
      logo: <Building className="h-10 w-10 text-amber-700" />,
    },
    {
      name: "Manufacturing",
      logo: <Radio className="h-10 w-10 text-amber-700" />,
    },
    {
      name: "Healthcare",
      logo: <Building2 className="h-10 w-10 text-amber-700" />,
    },
    {
      name: "Education",
      logo: <Server className="h-10 w-10 text-amber-700" />,
    },
    {
      name: "IT & Data Centers",
      logo: <Warehouse className="h-10 w-10 text-amber-700" />,
    },
    {
      name: "Real Estate",
      logo: <Home className="h-10 w-10 text-amber-700" />,
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Esteemed Clients</h1>
          <p className="text-xl max-w-3xl">
            We are proud to serve a diverse range of clients across various
            industries, providing them with reliable lightning protection and
            earthing solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Clients Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center"
              >
                <div className="relative  ">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="object-contain "
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-lg p-6 relative shadow-sm"
              >
                <div className="absolute top-6 left-6 text-6xl text-amber-200">
                  "
                </div>
                <div className="relative z-10">
                  <p className="text-gray-700 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Case Studies
          </h2>
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {caseStudy.description}
                    </p>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">
                        Results:
                      </h4>
                      <ul className="list-disc pl-6 text-gray-700">
                        {caseStudy.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Served */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                  {industry.logo}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {industry.name}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
