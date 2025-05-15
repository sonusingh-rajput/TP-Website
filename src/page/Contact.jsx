import { Phone, Mail, MapPin, Clock,DoorOpen } from "lucide-react";
import { Link } from "react-router";

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with our team for inquiries, quotes, or technical
            support. We're here to help you with all your lightning protection
            and earthing needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              You can also reach us directly using the contact information
              below.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-3 mr-4">
                  <DoorOpen className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Head Office
                  </h3>
                  <p className="text-gray-700">
                    H 1/164, Harmu,    
                    <br />
                    Housing Colony, 
                    <br />
                    Ranchi (Jharkhand) - 834001 
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Branch Office
                  </h3>
                  <p className="text-gray-700">
                    F-211, F-Sector,   
                    <br />
                     P.C. Colony Kankarbagh,
                    <br />
                    Patna, Bihar - 800020
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Phone Numbers
                  </h3>
                  <p className="text-gray-700">
                    Sales: +91 8800180828
                    <br />
                    Support: +91 7678118527
                    <br />
                    Office: +91 9971922450
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Email Addresses
                  </h3>
                  <p className="text-gray-700">
                    Sales: sales@tpslightning.com
                    <br />
                    Support: support@tpslightning.com
                    <br />
                    General: info@tpslightning.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden h-64 relative">
              
              <div className="w-full ">
                <span className="text-gray-500 text-lg font-medium">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7369320.416707852!2d75.3996956!3d25.5949129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed588f7f0290e9%3A0xbeaa0d8b63eedbe8!2sTECHNO%20POWER%20EARTHING!5e0!3m2!1sen!2sin!4v1747104705556!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What is the delivery timeframe?
              </h3>
              <p className="text-gray-700">
                Standard delivery time is 7-10 working days for stock items. For
                custom orders, the delivery time may vary depending on the
                specifications and quantity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do you provide installation services?
              </h3>
              <p className="text-gray-700">
                We provide technical guidance for installation. For full
                installation services, we can recommend certified installation
                partners in your area.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What warranty do you offer?
              </h3>
              <p className="text-gray-700">
                Our products come with a standard warranty of 2 years against
                manufacturing defects. Extended warranty options are available
                for certain products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-700">
                Yes, we ship our products internationally. Shipping costs and
                delivery times vary depending on the destination country.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your lightning protection and earthing
            requirements. Our team of experts is ready to help you find the
            right solution for your needs.
          </p>
          <Link
            href="/products/lightning-protection"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-md mx-2"
          >
            Explore Products
          </Link>
          <Link
            href="/about"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md mx-2"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
