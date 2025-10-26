"use client";

import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/homeBanner.png"
          alt="Tropical Paradise"
          className="w-full h-full object-cover"
          width="2000"
          height="1000"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#0D0D0C80]" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl   p-8 md:p-12 rounded-lg">
            {/* Tagline */}
            <p className="text-white/90 text-lg md:text-xl mb-4 font-light italic">
              Get unforgettable pleasure with us
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turn Your Dream Trip Into a Real Adventure
            </h1>

            {/* Descriptive Text */}
            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Organize everything in one place from itineraries and budgets to
              packing lists and bookings. Share your experiences and inspire
              others to explore the world.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 bg-[#1CA8CB] hover:bg-[#3a8eef] text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform  "
              >
                Start Planning Your Trip
                <ArrowRightOutlined className="text-sm" />
              </Link>

              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 bg-white   hover:bg-white/70   font-medium px-8 py-4 rounded-lg transition-all duration-200 transform  "
              >
                Explore Public Trips
                <ArrowRightOutlined className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
