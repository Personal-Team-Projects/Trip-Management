"use client";

import Link from "next/link";
import {
  ArrowRightOutlined,
  EyeOutlined,
  CommentOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export default function FeaturedTripsSection() {
  const trips = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      user: "Sarah Johnson",
      location: "Thailand",
      title: "Langtang Valley Trekking",
      description:
        "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and an adventure you'll never forget.",
      views: 347058,
      comments: 347058,
      likes: 347058,
      price: "$1200",
      duration: "5 Days",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&h=400&fit=crop",
      user: "Sarah Johnson",
      location: "Thailand",
      title: "Langtang Valley Trekking",
      description:
        "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and an adventure you'll never forget.",
      views: 347058,
      comments: 347058,
      likes: 347058,
      price: "$1200",
      duration: "5 Days",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
      user: "Sarah Johnson",
      location: "Thailand",
      title: "Langtang Valley Trekking",
      description:
        "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and an adventure you'll never forget.",
      views: 347058,
      comments: 347058,
      likes: 347058,
      price: "$1200",
      duration: "5 Days",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
      user: "Sarah Johnson",
      location: "Thailand",
      title: "Langtang Valley Trekking",
      description:
        "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and an adventure you'll never forget.",
      views: 347058,
      comments: 347058,
      likes: 347058,
      price: "$1200",
      duration: "5 Days",
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Community Trips
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired by amazing journeys from fellow travelers
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trips.map((trip) => (
            <Link
              key={trip.id}
              href={`/explore/${trip.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {trip.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* User Avatar */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#4A9EFF] flex items-center justify-center text-white font-semibold text-sm">
                    SJ
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {trip.user}
                  </span>
                </div>

                {/* Location */}
                <p className="text-sm text-gray-500 mb-2">{trip.location}</p>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {trip.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {trip.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <EyeOutlined />
                    <span>{trip.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CommentOutlined />
                    <span>{trip.comments.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartOutlined />
                    <span>{trip.likes.toLocaleString()}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-[#4A9EFF]">
                  {trip.price}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 bg-[#4A9EFF] hover:bg-[#3a8eef] text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            View All Trips
            <ArrowRightOutlined className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
}
