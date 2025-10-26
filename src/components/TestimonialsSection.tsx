"use client";

import { StarFilled } from "@ant-design/icons";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Doe",
      role: "Traveller",
      avatar: "MD",
      quote:
        "TripSmart made my vacation planning so simple! I built my entire 7-day itinerary in minutes. It saved me hours of research and kept everything perfectly organized.",
      rating: 5,
    },
    {
      name: "Angelina Rose",
      role: "Traveller",
      avatar: "AR",
      quote:
        "I love how easy it is to track my budget and checklist in one place. Total game-changer! I finally traveled without forgetting a single thing - even my charger!",
      rating: 5,
    },
    {
      name: "Andrew Simon",
      role: "Traveller",
      avatar: "AS",
      quote:
        "Finally, a travel tool that keeps everything organized - from bookings to packing. The interface is so clean and intuitive - it feels made just for travelers like me.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Travelers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See how TripSmart is helping explorers around the world plan
            smarter, stress less, and travel better.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg relative"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#4A9EFF] flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarFilled key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Large "99" Icon */}
              <div className="absolute bottom-4 right-4 text-6xl font-bold text-[#4A9EFF]/20">
                99
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 rounded-full transition-all ${
                dot === 1 ? "bg-[#4A9EFF]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
