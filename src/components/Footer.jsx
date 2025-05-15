import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TPS Lightning & Earthing</h3>
            <p className="text-gray-300 mb-4">
              Providing high-quality lightning protection and earthing solutions
              since 2005. ISO 9001:2015 certified company.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick as</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products/lightning-protection"
                  className="text-gray-300 hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/certifications"
                  className="text-gray-300 hover:text-white"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products/lightning-protection"
                  className="text-gray-300 hover:text-white"
                >
                  Lightning Protection
                </a>
              </li>
              <li>
                <a
                  href="/products/earthing-solutions"
                  className="text-gray-300 hover:text-white"
                >
                  Earthing Solutions
                </a>
              </li>
              <li>
                <a
                  href="/products/backfill-compound"
                  className="text-gray-300 hover:text-white"
                >
                  Backfill Compound
                </a>
              </li>
              <li>
                <a
                  href="/products/earth-pit-covers"
                  className="text-gray-300 hover:text-white"
                >
                  Earth Pit Covers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>+91 8800180828</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>technopowersolution1@gmail.com </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
                <span> F-211, F-Sector, P.C. Colony Kankarbagh, Bihar - 800020</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TPS Lightning & Earthing
            Solutions. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
