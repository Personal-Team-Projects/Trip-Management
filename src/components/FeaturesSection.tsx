"use client";

import {
  CalendarOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  UploadOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function FeaturesSection() {
  const features = [
    {
      icon: <CalendarOutlined className="text-[#4A9EFF] text-2xl" />,
      title: "Itinerary Builder",
      description:
        "Plan your trip day by day with our easy-to-use itinerary builder and make the most of your journey.",
    },
    {
      icon: <DollarOutlined className="text-[#4A9EFF] text-2xl" />,
      title: "Budget Calculator",
      description:
        "Track expenses and stay within budget with our smart expense tracker and financial insights.",
    },
    {
      icon: <CheckCircleOutlined className="text-[#4A9EFF] text-2xl" />,
      title: "Packing Checklist",
      description:
        "Track luggage and stay well-thought through with our smart packing lists tailored for any trip type.",
    },
    {
      icon: <UploadOutlined className="text-[#4A9EFF] text-2xl" />,
      title: "Booking Import",
      description:
        "Easily import your flight and hotel bookings through confirmation emails and keep everything organized.",
    },
    {
      icon: <ShareAltOutlined className="text-[#4A9EFF] text-2xl" />,
      title: "Trip Sharing",
      description:
        "Share your adventures and memories with the community, and get inspired by other travelers.",
    },
    {
      icon: <EnvironmentOutlined className="text-[#4A9EFF] text-2xl" />,
      title: "Discover Destinations",
      description:
        "Explore featured trips and destination guides shared by fellow adventurers worldwide.",
    },
  ];

  return (
    <div className="w-full  py-[100px] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[40px] font-bold text-[#113D48] mb-4 font-[Poppins]">
            Everything You Need to Plan Your Journey
          </h2>
          <p className="text-lg md:text-xl  max-w-3xl mx-auto text-[#717182]">
            Powerful tools to help you organize every aspect of your trip
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-[#0000001A] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#1CA8CB] text-white rounded-lg flex items-center justify-center mb-6 border border-gray-200">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
