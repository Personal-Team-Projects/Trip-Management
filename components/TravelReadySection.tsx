"use client";

import Link from "next/link";
import {
  ArrowRightOutlined,
  ApartmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function TravelReadySection() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left Side - Circular Images Stack */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Top Image */}
            <div className="absolute top-8 left-8 w-72 h-72 rounded-full overflow-hidden shadow-2xl z-10 transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e8?w=400&h=400&fit=crop"
                alt="Mountain hiking"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Middle Image */}
            <div className="absolute top-24 left-24 w-72 h-72 rounded-full overflow-hidden shadow-2xl z-20 transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop"
                alt="Kayaking"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Image */}
            <div className="absolute top-40 left-10 w-72 h-72 rounded-full overflow-hidden shadow-2xl z-30 transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop"
                alt="City exploration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              No matter where you're going, your trip is already ready!
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              With TripSmart, planning becomes effortless. Create custom
              itineraries, track your budget, and pack smarter – all before you
              even start your journey.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4A9EFF] flex items-center justify-center shrink-0">
                  <ApartmentOutlined className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Exclusive Trips
                  </h3>
                  <p className="text-gray-600">
                    Discover unique destinations and curated travel experiences
                    designed just for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4A9EFF] flex items-center justify-center shrink-0">
                  <UserOutlined className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Professional Guides
                  </h3>
                  <p className="text-gray-600">
                    Get expert travel insights and recommendations to make every
                    moment unforgettable.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-[#159F8A] hover:bg-[#0e8f7a] text-white font-semibold px-6 py-3 rounded-lg transition-colors group shadow-lg"
            >
              Learn More
              <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side - Man with Suitcase */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-white rounded-full p-8 shadow-xl">
                <img
                  src="/Home/guide.png"
                  alt="Traveler with suitcase"
                  className="w-64 h-auto rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
