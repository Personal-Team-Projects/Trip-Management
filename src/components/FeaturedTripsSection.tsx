"use client";

import Link from "next/link";
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  MessageOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import { Card, Avatar } from "antd";
import Image from "next/image";

interface Trip {
  id: number;
  title: string;
  description: string;
  location: string;
  guide: {
    name: string;
    avatar: string;
  };
  duration: string;
  price: number;
  likes: number;
  comments: number;
  image: string;
}

const mockTrips: Trip[] = [
  {
    id: 1,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unf...",
    location: "Thailand",
    guide: {
      name: "Sarah Johnson",
      avatar: "",
    },
    duration: "8 Days",
    price: 1200,
    likes: 342,
    comments: 56,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Annapurna Base Camp Trek",
    description:
      "Embark on an unforgettable journey through the Himalayas, passing traditional Sherpa villages and pristine mountain landscapes.",
    location: "Nepal",
    guide: {
      name: "Michael Chen",
      avatar: "",
    },
    duration: "12 Days",
    price: 1500,
    likes: 428,
    comments: 78,
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Bali Adventure Escape",
    description:
      "Experience tropical paradise with pristine beaches, ancient temples, and vibrant local culture in the heart of Indonesia.",
    location: "Indonesia",
    guide: {
      name: "Emma Williams",
      avatar: "",
    },
    duration: "10 Days",
    price: 950,
    likes: 312,
    comments: 45,
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Swiss Alps Exploration",
    description:
      "Journey through picturesque alpine villages, crystal-clear lakes, and snow-capped peaks in the heart of Europe.",
    location: "Switzerland",
    guide: {
      name: "David Mueller",
      avatar: "",
    },
    duration: "7 Days",
    price: 1800,
    likes: 521,
    comments: 92,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Safari in Serengeti",
    description:
      "Witness the great migration and experience Africa&apos;s incredible wildlife up close in Tanzania&apos;s most famous national park.",
    location: "Tanzania",
    guide: {
      name: "Amina Hassan",
      avatar: "",
    },
    duration: "9 Days",
    price: 2200,
    likes: 456,
    comments: 67,
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Japan Cultural Journey",
    description:
      "Explore ancient temples, modern cities, and traditional gardens while immersing in Japanese culture and cuisine.",
    location: "Japan",
    guide: {
      name: "Hiroshi Tanaka",
      avatar: "",
    },
    duration: "14 Days",
    price: 2800,
    likes: 389,
    comments: 54,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Patagonia Wilderness",
    description:
      "Discover rugged mountains, massive glaciers, and pristine wilderness at the end of the world in southern Chile and Argentina.",
    location: "Chile",
    guide: {
      name: "Carlos Rodriguez",
      avatar: "",
    },
    duration: "11 Days",
    price: 2400,
    likes: 402,
    comments: 61,
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Iceland Northern Lights",
    description:
      "Chase the aurora borealis, explore ice caves, and relax in geothermal hot springs under the Icelandic sky.",
    location: "Iceland",
    guide: {
      name: "Ingrid Jonsdottir",
      avatar: "",
    },
    duration: "6 Days",
    price: 1900,
    likes: 398,
    comments: 48,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
  },
];

export default function FeaturedTripsSection() {
  return (
    <div className=" bg-white py-20 px-6">
      <div className="max-w-[1600px]   mx-auto">
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
          {mockTrips.map((trip) => (
            <Link key={trip.id} href={`/explore/${trip.id}`}>
              <Card
                hoverable
                className="rounded-lg overflow-hidden border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                cover={
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {trip.duration}
                    </div>
                  </div>
                }
              >
                <Card.Meta
                  description={
                    <div className="space-y-3">
                      {/* Guide Info */}
                      <div className="flex items-center gap-2">
                        <Avatar
                          size={24}
                          icon={<UserOutlined />}
                          src={trip.guide.avatar}
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {trip.guide.name}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <EnvironmentOutlined />
                        <span>{trip.location}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
                        {trip.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {trip.description}
                      </p>

                      {/* Engagement & Price */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <HeartOutlined />
                            <span>{trip.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageOutlined />
                            <span>{trip.comments}</span>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-blue-600">
                          ${trip.price}
                        </span>
                      </div>
                    </div>
                  }
                />
              </Card>
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
