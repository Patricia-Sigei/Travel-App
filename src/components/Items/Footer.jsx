import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPlane } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
function Footer() {
  return (
    <footer className="bg-blue-800 text-gray-200 pt-16 pb-10">
      <div className="container mx-auto px-12 grid md:grid-cols-4 gap-16">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <FaPlane className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Doogsan Enterprises
              </h3>
              <p className="text-base">Your Trusted Travel Agency</p>
            </div>
          </div>
          <p className="text-base leading-relaxed mb-6">
            We are committed to providing exceptional travel planning,
            ticketing, and tourism experiences that make your journeys memorable
            and hassle-free.
          </p>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.facebook.com/share/16GDkSeurq/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@doogsan_enterprise?_t=ZM-8zdJgyRiK3h&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
            >
              <AiFillTikTok />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3 text-base">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-5">
            Our Services
          </h4>
          <ul className="space-y-3 text-base">
            <li>Flight Booking</li>
            <li>Hotel Reservations</li>
            <li>Visa Processing</li>
            <li>Holiday Packages</li>
            <li>Airport Transfers</li>
            <li>Travel Insurance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-5">
            Contact Info
          </h4>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400 text-lg" />
              <span>Eastleigh, BBS Mall Nairobi</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400 text-lg" />
              <span>+254722206692</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-400 text-lg" />
              <span>info@doogsanenterprises.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-10"></div>

      {/* Bottom bar */}
      <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center text-base text-gray-300 text-sm">
        <p>© 2024 Doogsan Enterprises. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
