import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    package: "Bali Honeymoon Package",
    initials: "SJ",
    feedback:
      "Doogsan Enterprises made our honeymoon in Bali absolutely perfect. Every detail was handled with care, and their customer service was outstanding. We couldn’t have asked for a better experience!",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    package: "Tokyo Business Trip",
    initials: "MC",
    feedback:
      "I've used many travel agencies before, but Doogsan stands out for their attention to detail and personalized service. They found us the perfect hotel in Tokyo and helped with all our visa requirements.",
  },
  {
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    package: "Dubai Family Vacation",
    initials: "ER",
    feedback:
      "Planning a family vacation for 8 people seemed overwhelming, but Doogsan made it seamless. They got us great group rates and organized everything perfectly. Our kids are already asking when we can travel with them again!",
  },
  {
    name: "David Wilson",
    location: "London, UK",
    package: "Maldives Luxury Package",
    initials: "DW",
    feedback:
      "Exceptional service from start to finish. When our flight got cancelled, they immediately found us alternative arrangements and handled all the rebooking. Their 24/7 support really saved our vacation.",
  },
];

function Customers() {
  return (
    <div className="px-6 md:px-20 py-16 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied travelers
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-10 w-full sm:w-[95%] md:w-[90%] lg:w-[90%] mx-auto px-6 ">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 py-8 relative"
          >
            <div className="flex items-center text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <p className="text-gray-700 italic">“{t.feedback}”</p>
            <FaQuoteRight className="absolute bottom-6 right-6 text-green-100 text-4xl" />

            <div className="flex items-center mt-6">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                {t.initials}
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-blue-800">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.location}</p>
                <p className="text-green-600 text-sm font-medium">
                  {t.package}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-blue-800 text-center py-10 rounded-xl">
        <h3 className="text-white text-2xl font-bold">
          Ready to Start Your Journey?
        </h3>
        <p className="text-blue-100 mt-2">
          Join thousands of satisfied travelers who trust Doogsan Enterprises
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl">
            Get Your Quote
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-blue-700">
            View Our Packages
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customers;
