import React from "react";

function Destinations() {
  const destinations = [
    {
      name: "Santorini, Greece",
      description:
        "Iconic white buildings and breathtaking sunsets over the Aegean Sea",
      highlights: ["Sunset Views", "White Architecture"],
      duration: "5-7 Days",
      season: "April - October",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Paris, France",
      description:
        "City of love with iconic landmarks, world-class museums, and exquisite cuisine",
      highlights: ["Iconic Landmarks", "Art & Culture", "Fine Dining"],
      duration: "4-6 Days",
      season: "April - June, September - October",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      name: "Rome, Italy",
      description:
        "Eternal city with ancient history, magnificent architecture, and authentic Italian culture",
      highlights: ["Ancient History", "Vatican City", "Italian Cuisine"],
      duration: "4-5 Days",
      season: "April - June, September - November",
      image: "https://images.unsplash.com/photo-1526481280690-7f74b8ec0e1c",
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
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    },
    {
      name: "Amsterdam, Netherlands",
      description:
        "Charming city with historic canals, world-class museums, and vibrant culture",
      highlights: ["Historic Canals", "World Class Museums", "Evening Culture"],
      duration: "3-5 Days",
      season: "April - September",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      name: "Prague, Czech Republic",
      description:
        "Fairy-tale city with medieval architecture, historic castles, and rich cultural heritage",
      highlights: ["Medieval Architecture", "Historic Castles", "Rich Culture"],
      duration: "3-4 Days",
      season: "April - June, September - October",
      image: "https://images.unsplash.com/photo-1543340713-8b1f04a3f5c1",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            European Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the charm and beauty of Europe with our carefully curated
            travel packages
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Destination Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="h-48 w-full object-cover"
              />

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {destination.name}
                </h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>

                <div className="mb-4">
                  {destination.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center mb-1">
                      <span className="text-blue-800 mr-2">•</span>
                      <span className="font-medium text-gray-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span>{destination.duration}</span>
                  <span>{destination.season}</span>
                </div>

                {/* Cohesive Blue Button */}
                <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  View Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            View All European Destinations
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
