"use client";

import Link from "next/link";
import {
  ArrowRightOutlined,
  ApartmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";

import { travelReady } from "../../public/allImage";

export default function TravelReadySection() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Side - Circular Images Stack */}
          <div className="relative h-[650px] flex items-center justify-center">
            {/* Top Image */}
            <div className="absolute top-8 left-8  -transparent overflow-hidden   z-10 transform   transition-transform">
              <Image
                src={travelReady}
                alt="Travel Ready"
                className="w-full h-full object-cover"
                width={654}
                height={650}
              />
            </div>
          </div>

          {/* Middle - Text Content */}
          <div className=" ">
            <h2 className="text-4xl md:text-5xl  font-bold text-gray-800 leading-tight">
              No matter where you&apos;re going, your trip is already ready!
            </h2>

            <p className=" text-gray-600 leading-relaxed">
              With TripSmart, planning becomes effortless. Create custom
              itineraries, track your budget, and pack smarter – all before you
              even start your journey.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 py-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4A9EFF] flex items-center justify-center shrink-0">
                  <ApartmentOutlined className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Exclusive Trips
                  </h3>
                  <p className="text-gray-600 w-[300px]">
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
                  <p className="text-gray-600 w-[300px]">
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
        </div>
      </div>
    </div>
  );
}
