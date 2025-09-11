import React from "react";
import { StarIcon } from "../UI/Icons";
import bgImage from "../../assets/background pic.png";
import { GoArrowRight } from "react-icons/go";

function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white min-h-screen bg-cover bg-center pt-24 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#0e223d]/72"></div>

      <div className="relative z-10 max-w-3xl w-full">
        {/* Rating */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm sm:text-base">
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <span className="font-medium">4.9/5 Customer Rating</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-snug">
          Your Trusted <span className="text-green-300">Travel Agency</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-2xl text-gray-200 mb-8">
          Experience the world with confidence. We make your travel dreams come
          true with personalized service and unbeatable prices.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-base sm:text-lg">
          <p className="px-6 flex items-center gap-2 sm:px-8 py-4 sm:py-5 rounded-lg bg-green-400 text-white font-semibold transform transition-transform duration-300 hover:scale-110">
            Plan Your Journey <GoArrowRight size={20} />
          </p>
          <a
            href="https://wa.me/+254722206692"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-4 sm:py-5 rounded-lg border border-white font-semibold hover:bg-white hover:text-black transition"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20 text-green-400 font-bold p-5">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl">1000+</h2>
            <p className="text-gray-300 font-normal text-sm sm:text-base">
              Happy Customers
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl">50+</h2>
            <p className="text-gray-300 font-normal text-sm sm:text-base">
              Destinations
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl">5+</h2>
            <p className="text-gray-300 font-normal text-sm sm:text-base">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
