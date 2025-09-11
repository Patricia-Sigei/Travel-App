import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col">
      {/* Header */}
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Get In Touch</h2>
        <p className="text-gray-600 text-base">
          Ready to plan your next adventure? Contact us today for a personalized
          travel consultation
        </p>
      </div>

      {/* Content full width */}
      <div className="flex-1 grid md:grid-cols-2 gap-10 w-full px-12 pb-12 items-start">
        {/* Left side form */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center w-full">
          <h3 className="text-xl font-semibold text-blue-700 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5 w-full">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400"
              />
              <select className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400">
                <option>Select a destination</option>
                <option>Bali, Indonesia</option>
                <option>Tokyo, Japan</option>
                <option>Santorini, Greece</option>
                <option>Dubai, UAE</option>
                <option>Maldives</option>
                <option>Paris, France</option>
                <option>Other</option>
              </select>
            </div>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Tell us about your travel preferences, budget, or any special requirements..."
              className="w-full border border-gray-300 rounded-md p-3 h-32 focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold p-6 py-6 rounded-md flex items-center justify-center gap-2 text-base"
            >
              Send Message <IoIosSend className=" text-xl" />
            </button>
          </form>
        </div>

        {/* Right side contact info */}
        <div className="flex flex-col gap-10 w-full">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-5 flex-1">
            <h3 className="text-xl font-semibold text-blue-700">
              Contact Information
            </h3>
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-green-500 text-lg" />
              <span>Eastleigh, BBS Mall, Nairobi</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-green-500 text-lg" />
              <span>+254722206692</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-green-500 text-lg" />
              <span>info@doogsanenterprises.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaClock className="text-green-500 text-lg" />
              <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
            </div>
          </div>

          <div className="bg-blue-800 text-white rounded-xl shadow-lg p-8 text-center flex flex-col justify-center flex-1">
            <h4 className="font-semibold text-xl mb-3">
              Quick Response Guarantee
            </h4>
            <p className="text-sm mb-5">
              We respond to all inquiries within 24 hours. For urgent matters,
              call us directly or reach out via WhatsApp.
            </p>
            <div className="flex justify-center gap-4">
              <a
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md font-semibold text-sm"
                href="https://wa.me/+254722206692"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Now
              </a>
              <button className="bg-white text-blue-800 hover:bg-gray-200 px-6 py-3 rounded-md font-semibold text-sm">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
