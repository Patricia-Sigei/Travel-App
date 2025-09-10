// import React from "react";
// import { StarIcon } from "../UI/Icons";
// import bgImage from "../../assets/background pic.png";

// function Home() {
//   return (
//     <section
//       className="relative flex flex-col items-center justify-center text-center text-white h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-[#0e223d]/72"></div>

//       <div className="relative z-10 max-w-3xl px-6">
//         {/* Rating */}
//         <div className="flex items-center justify-center space-x-2 mb-8">
//           <StarIcon className="text-yellow-400" />
//           <StarIcon className="text-yellow-400" />
//           <StarIcon className="text-yellow-400" />
//           <StarIcon className="text-yellow-400" />
//           <StarIcon className="text-yellow-400" />
//           <span className="text-sm font-medium">4.9/5 Customer Rating</span>
//         </div>

//         <h1 className="text-4xl sm:text-5xl font-bold mb-8">
//           Your Trusted <span className="text-green-400">Travel Agency</span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-2xl text-gray-200 mb-8">
//           Experience the world with confidence. We make your travel dreams come
//           true with personalized service and unbeatable prices.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-lg">
//           <p className="px-8 py-5 rounded-lg bg-green-400 text-white font-semibold transform transition-transform duration-300 hover:scale-110">
//             Plan Your Journey →
//           </p>
//           <a
//             href="https://wa.me/+254722206692"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-8 py-5 rounded-lg border border-white font-semibold hover:bg-white hover:text-black transition"
//           >
//             WhatsApp Us
//           </a>
//         </div>

//         {/* Stats */}
//         <div className="flex flex-col sm:flex-row justify-center gap-30 text-green-400 font-bold p-5 ">
//           <div>
//             <h2 className="text-3xl">1000+</h2>
//             <p className="text-gray-300 font-normal">Happy Customers</p>
//           </div>
//           <div>
//             <h2 className="text-3xl">50+</h2>
//             <p className="text-gray-300 font-normal">Destinations</p>
//           </div>
//           <div>
//             <h2 className="text-3xl">5+</h2>
//             <p className="text-gray-300 font-normal">Years Experience</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;
import React from "react";
import { StarIcon } from "../UI/Icons";
import bgImage from "../../assets/background pic.png";

function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0e223d]/70"></div>

      <div className="relative z-10 max-w-3xl px-4 sm:px-6">
        {/* Rating */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 text-sm sm:text-base">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5"
            />
          ))}
          <span className="font-medium">4.9/5 Customer Rating</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          Your Trusted <span className="text-green-400">Travel Agency</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
          Experience the world with confidence. We make your travel dreams come
          true with personalized service and unbeatable prices.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10 text-sm sm:text-lg">
          <button className="px-6 sm:px-8 py-3 sm:py-5 rounded-lg bg-green-400 text-white font-semibold transform transition-transform duration-300 hover:scale-110">
            Plan Your Journey →
          </button>
          <a
            href="https://wa.me/+254722206692"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-5 rounded-lg border border-white font-semibold hover:bg-white hover:text-black transition"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-green-400 font-bold p-4 sm:p-5">
          <div>
            <h2 className="text-2xl sm:text-3xl">1000+</h2>
            <p className="text-gray-300 font-normal text-sm sm:text-base">
              Happy Customers
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">50+</h2>
            <p className="text-gray-300 font-normal text-sm sm:text-base">
              Destinations
            </p>
          </div>
          <div>
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
