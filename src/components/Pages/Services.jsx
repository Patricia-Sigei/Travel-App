import React from "react";
import {
  PlaneIcon,
  PassportIcon,
  CarIcon,
  HeartIcon,
  ClockIcon,
  ShieldIcon,
  BeachIcon,
  HotelIcon,
} from "../UI/Icons";

function Services() {
  const services = [
    {
      icon: <PlaneIcon className="text-green-500 text-2xl" />,
      title: "Flight Booking",
      desc: "Compare and book flights from major airlines worldwide with best prices guaranteed.",
      points: ["Domestic & International", "Flexible Dates", "Group Bookings"],
    },
    {
      icon: <HotelIcon className="text-green-500 text-2xl" />,
      title: "Hotel Reservations",
      desc: "From budget stays to luxury resorts, find the perfect accommodation for your journey.",
      points: ["Best Rate Guarantee", "Instant Confirmation", "24/7 Support"],
    },
    {
      icon: <PassportIcon className="text-green-500 text-2xl" />,
      title: "Visa Processing",
      desc: "Hassle-free visa processing with expert guidance and document assistance.",
      points: ["Expert Guidance", "Document Support", "Fast Processing"],
    },
    {
      icon: <BeachIcon className="text-green-500 text-2xl" />,
      title: "Holiday Packages",
      desc: "Curated travel packages for families, couples, and solo travelers to exotic destinations.",
      points: ["All-Inclusive", "Customizable", "Local Guides"],
    },
    {
      icon: <CarIcon className="text-green-500 text-2xl" />,
      title: "Airport Transfers",
      desc: "Reliable and comfortable transportation to and from airports worldwide.",
      points: [
        "Professional Drivers",
        "On-Time Service",
        "Comfortable Vehicles",
      ],
    },
    {
      icon: <ShieldIcon className="text-green-500 text-2xl" />,
      title: "Travel Insurance",
      desc: "Comprehensive travel insurance coverage for peace of mind during your travels.",
      points: ["Medical Coverage", "Trip Cancellation", "Emergency Support"],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-16">
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Our Services</h2>
          <p className="text-gray-600 mt-2">
            Comprehensive travel solutions tailored to your needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition h-full transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-3">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">●</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bg-blue-800 text-white rounded-2xl p-10 mt-16 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <ClockIcon className="text-green-400 text-xl mr-3" />
            <div>
              <h4 className="font-bold">24/7 Customer Support</h4>
              <p className="text-sm">
                Our travel experts are always ready to help you
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <HeartIcon className="text-green-400 text-xl mr-3" />
            <div>
              <h4 className="font-bold">Trusted by 1000+ Travelers</h4>
              <p className="text-sm">Join our satisfied customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
