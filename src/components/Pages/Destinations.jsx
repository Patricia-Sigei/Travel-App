// import React from "react";

// function Destinations() {
//   const destinations = [
//     {
//       name: "Santorini, Greece",
//       description:
//         "Iconic white buildings and breathtaking sunsets over the Aegean Sea",
//       highlights: ["Sunset Views", "White Architecture"],
//       duration: "5-7 Days",
//       season: "April - October",
//       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//     },
//     {
//       name: "Paris, France",
//       description:
//         "City of love with iconic landmarks, world-class museums, and exquisite cuisine",
//       highlights: ["Iconic Landmarks", "Art & Culture", "Fine Dining"],
//       duration: "4-6 Days",
//       season: "April - June, September - October",
//       image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
//     },
//     {
//       name: "Rome, Italy",
//       description:
//         "Eternal city with ancient history, magnificent architecture, and authentic Italian culture",
//       highlights: ["Ancient History", "Vatican City", "Italian Cuisine"],
//       duration: "4-5 Days",
//       season: "April - June, September - November",
//       image:
//         "https://plus.unsplash.com/premium_photo-1661963265512-73e8d1053b9a?q=80&w=1455&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       name: "Barcelona, Spain",
//       description:
//         "Vibrant city with unique Gaudi architecture, beautiful beaches, and lively culture",
//       highlights: [
//         "Gaudi Architecture",
//         "Mediterranean Beaches",
//         "Vibrant Nightlife",
//       ],
//       duration: "4-6 Days",
//       season: "May - September",
//       image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
//     },
//     {
//       name: "Amsterdam, Netherlands",
//       description:
//         "Charming city with historic canals, world-class museums, and vibrant culture",
//       highlights: ["Historic Canals", "World Class Museums", "Evening Culture"],
//       duration: "3-5 Days",
//       season: "April - September",
//       image:
//         "https://images.unsplash.com/photo-1728253144653-d71509e10276?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       name: "Prague, Czech Republic",
//       description:
//         "Fairy-tale city with medieval architecture, historic castles, and rich cultural heritage",
//       highlights: ["Medieval Architecture", "Historic Castles", "Rich Culture"],
//       duration: "3-4 Days",
//       season: "April - June, September - October",
//       image:
//         "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             European Destinations
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover the charm and beauty of Europe with our carefully curated
//             travel packages
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinations.map((destination, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//             >
//               {/* Destination Image */}
//               <img
//                 src={destination.image}
//                 alt={destination.name}
//                 className="h-48 w-full object-cover"
//               />

//               {/* Card Content */}
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                   {destination.name}
//                 </h2>
//                 <p className="text-gray-600 mb-4">{destination.description}</p>

//                 <div className="mb-4">
//                   {destination.highlights.map((highlight, i) => (
//                     <div key={i} className="flex items-center mb-1">
//                       <span className="text-blue-800 mr-2">•</span>
//                       <span className="font-medium text-gray-700">
//                         {highlight}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-between text-sm text-gray-500 mb-6">
//                   <span>{destination.duration}</span>
//                   <span>{destination.season}</span>
//                 </div>

//                 {/* Cohesive Blue Button */}
//                 <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
//                   View Package
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <button className="bg-green-800 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
//             View All European Destinations
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Destinations;

import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

function Destinations() {
  const destinations = [
    {
      name: "Santorini, Greece",
      description:
        "Iconic white buildings and breathtaking sunsets over the Aegean Sea",
      highlights: ["Stunning Sunsets", "Volcanic Views", "White Architecture"],
      duration: "5-7 Days",
      season: "April - October",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Paris, France",
      description:
        "City of love with iconic landmarks, world-class museums, and exquisite cuisine",
      highlights: ["Iconic Landmarks", "Art & Culture", "Fine Dining"],
      duration: "4-6 Days",
      season: "April - June, September - October",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      name: "Rome, Italy",
      description:
        "Eternal city with ancient history, magnificent architecture, and authentic Italian culture",
      highlights: ["Ancient History", "Vatican City", "Italian Cuisine"],
      duration: "4-5 Days",
      season: "April - June, September - November",
      rating: 4.7,
      image:
        "https://plus.unsplash.com/premium_photo-1661963265512-73e8d1053b9a?q=80&w=1455&auto=format&fit=crop",
    },
    {
      name: "Barcelona, Spain",
      description:
        "Vibrant city with unique Gaudi architecture, beautiful beaches, and lively culture",
      highlights: [
        "Gaudi Architecture",
        "Mediterranean Beaches",
        "Vibrant Nightlife",
      ],
      duration: "4-6 Days",
      season: "May - September",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    },
    {
      name: "Amsterdam, Netherlands",
      description:
        "Charming city with historic canals, world-class museums, and vibrant culture",
      highlights: ["Historic Canals", "World Class Museums", "Evening Culture"],
      duration: "3-5 Days",
      season: "April - September",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1728253144653-d71509e10276?q=80&w=687&auto=format&fit=crop",
    },
    {
      name: "Prague, Czech Republic",
      description:
        "Fairy-tale city with medieval architecture, historic castles, and rich cultural heritage",
      highlights: ["Medieval Architecture", "Historic Castles", "Rich Culture"],
      duration: "3-4 Days",
      season: "April - June, September - October",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            European Destinations
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover the charm and beauty of Europe with our carefully curated
            travel packages
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Destination Image */}
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-48 w-full object-cover"
                />
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center shadow">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold">
                    {destination.rating}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt className="text-green-600" />
                  {destination.name}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  {destination.description}
                </p>

                {/* Highlights as pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Duration and Season */}
                <div className="flex justify-between text-gray-500 text-sm mb-6">
                  <span className="flex items-center gap-1">
                    <FaClock /> {destination.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {destination.season}
                  </span>
                </div>

                {/* Button */}
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  View Package <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View All European Destinations
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
