import React from "react";
import { StarIcon } from "../UI/Icons";
import bgImage from "../../assets/background pic.png";

function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-white bg-opacity-50"></div> */}

      <div className="relative z-10 max-w-3xl px-6">
        {/* Rating */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <span className="text-sm font-medium">4.9/5 Customer Rating</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Your Trusted <span className="text-green-400">Travel Agency</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-200 mb-6">
          Experience the world with confidence. We make your travel dreams come
          true with personalized service and unbeatable prices.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#plan"
            className="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            Plan Your Journey →
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white font-semibold hover:bg-white hover:text-black transition"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-green-400 font-bold">
          <div>
            <h2 className="text-2xl">1000+</h2>
            <p className="text-gray-300 font-normal">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-2xl">50+</h2>
            <p className="text-gray-300 font-normal">Destinations</p>
          </div>
          <div>
            <h2 className="text-2xl">5+</h2>
            <p className="text-gray-300 font-normal">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
