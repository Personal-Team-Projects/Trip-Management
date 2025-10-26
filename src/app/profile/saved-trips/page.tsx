"use client";

import { useState } from "react";
import { Card, Avatar } from "antd";
import { HeartOutlined, MessageOutlined } from "@ant-design/icons";
import ProfileSidebar from "../../../components/ProfileSidebar";

const savedTripsData = [
  {
    id: 1,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unf...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    organizer: {
      name: "Sarah Johnson",
      location: "Thailand",
      avatar: "SJ",
    },
    duration: "8 Days",
    likes: 342,
    comments: 56,
    price: 1200,
  },
  {
    id: 2,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unf...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    organizer: {
      name: "Sarah Johnson",
      location: "Thailand",
      avatar: "SJ",
    },
    duration: "8 Days",
    likes: 342,
    comments: 56,
    price: 1200,
  },
  {
    id: 3,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unf...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    organizer: {
      name: "Sarah Johnson",
      location: "Thailand",
      avatar: "SJ",
    },
    duration: "8 Days",
    likes: 342,
    comments: 56,
    price: 1200,
  },
  {
    id: 4,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unf...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    organizer: {
      name: "Sarah Johnson",
      location: "Thailand",
      avatar: "SJ",
    },
    duration: "8 Days",
    likes: 342,
    comments: 56,
    price: 1200,
  },
  {
    id: 5,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unf...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    organizer: {
      name: "Sarah Johnson",
      location: "Thailand",
      avatar: "SJ",
    },
    duration: "8 Days",
    likes: 342,
    comments: 56,
    price: 1200,
  },
  {
    id: 6,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unf...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    organizer: {
      name: "Sarah Johnson",
      location: "Thailand",
      avatar: "SJ",
    },
    duration: "8 Days",
    likes: 342,
    comments: 56,
    price: 1200,
  },
];

export default function SavedTripsPage() {
  const [savedTrips] = useState(savedTripsData);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Saved Trips
                </h2>
                <p className="text-gray-500 mt-1">
                  Trips you&apos;ve saved for later
                </p>
              </div>

              {/* Trip Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedTrips.map((trip) => (
                  <Card
                    key={trip.id}
                    className="rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    cover={
                      <div className="relative">
                        <img
                          alt={trip.title}
                          src={trip.image}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full">
                          <span className="text-sm font-semibold text-gray-900">
                            {trip.duration}
                          </span>
                        </div>
                      </div>
                    }
                  >
                    {/* Organizer Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar size="small" className="bg-[#4A9EFF]">
                        {trip.organizer.avatar}
                      </Avatar>
                      <div>
                        <p className="text-xs font-semibold text-gray-900">
                          {trip.organizer.name}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                          </svg>
                          {trip.organizer.location}
                        </p>
                      </div>
                    </div>

                    {/* Trip Title */}
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                      {trip.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {trip.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span className="flex items-center gap-1">
                          <HeartOutlined />
                          {trip.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageOutlined />
                          {trip.comments}
                        </span>
                      </div>
                      <span className="text-[#4A9EFF] font-bold text-base">
                        ${trip.price}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              {savedTrips.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No saved trips yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
