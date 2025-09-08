import React from "react";
import { FaHeart, FaAward, FaUsers, FaGlobe } from "react-icons/fa";
import aboutImage from "../../assets/about.png";

function About() {
  return (
    <div className="px-6 md:px-20 py-16 bg-white">
      {/* About Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          About Doogsan Enterprises
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a client-focused travel agency committed to providing
          exceptional travel planning, ticketing, and tourism experiences that
          make your journeys memorable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
            Founded with a passion for travel and a commitment to excellence,
            Doogsan Enterprises has been helping travelers explore the world for
            over 5 years. Our team of experienced travel professionals
            understands that every journey is unique.
          </p>
          <p className="text-gray-600 mb-4">
            We believe that travel should be accessible, affordable, and
            stress-free. That's why we work tirelessly to provide personalized
            service, competitive prices, and expert guidance for every aspect of
            your travel experience.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <FaHeart className="text-green-500 text-2xl" />
            <div>
              <h4 className="text-blue-800 font-semibold">Our Mission</h4>
              <p className="text-gray-600 text-sm">
                Making travel dreams come true for everyone
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={aboutImage}
            alt="Travel Destination"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
        <div>
          <FaAward className="text-green-500 text-3xl mx-auto mb-2" />
          <h3 className="text-blue-800 font-bold text-xl">5+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div>
          <FaUsers className="text-green-500 text-3xl mx-auto mb-2" />
          <h3 className="text-blue-800 font-bold text-xl">1000+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <FaGlobe className="text-green-500 text-3xl mx-auto mb-2" />
          <h3 className="text-blue-800 font-bold text-xl">50+</h3>
          <p className="text-gray-600">Destinations</p>
        </div>
        <div>
          <FaHeart className="text-green-500 text-3xl mx-auto mb-2" />
          <h3 className="text-blue-800 font-bold text-xl">99%</h3>
          <p className="text-gray-600">Satisfaction Rate</p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-10 mt-16">
        <h3 className="text-2xl font-bold text-blue-800 text-center mb-10">
          Our Core Values
        </h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Reliability</h4>
            <p className="text-gray-600 text-sm">
              We keep our promises and deliver exceptional service every time.
            </p>
          </div>
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Expertise</h4>
            <p className="text-gray-600 text-sm">
              Our travel specialists have extensive knowledge of destinations
              worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">
              Personalization
            </h4>
            <p className="text-gray-600 text-sm">
              Every journey is tailored to your unique preferences and budget.
            </p>
          </div>
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Support</h4>
            <p className="text-gray-600 text-sm">
              24/7 customer support ensures you're never alone on your travels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
