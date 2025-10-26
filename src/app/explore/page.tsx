"use client";

import { useState } from "react";
import { Input, Select, Card, Avatar, Badge } from "antd";
import Image from "next/image";
import {
  SearchOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  HeartOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import HeroSection from "../../components/HeroSection";

const { Search } = Input;
const { Option } = Select;

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
    image: "/cover.jpg",
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
    image: "/cover.jpg",
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
    image: "/cover.jpg",
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
    image: "/cover.jpg",
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
    image: "/cover.jpg",
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
    image: "/cover.jpg",
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
    image: "/cover.jpg",
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
    image: "/cover.jpg",
  },
];

export default function ExplorePage() {
  const [searchText, setSearchText] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");

  const destinations = [
    "All Destinations",
    "Thailand",
    "Nepal",
    "Indonesia",
    "Switzerland",
    "Tanzania",
    "Japan",
    "Chile",
    "Iceland",
  ];
  const budgets = [
    "All Budgets",
    "Under $1000",
    "$1000 - $2000",
    "$2000 - $3000",
    "Over $3000",
  ];

  const filteredTrips = mockTrips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().includes(searchText.toLowerCase()) ||
      trip.location.toLowerCase().includes(searchText.toLowerCase());
    const matchesDestination =
      selectedDestination === "all" || trip.location === selectedDestination;
    const matchesBudget =
      selectedBudget === "all" || checkBudgetMatch(trip.price, selectedBudget);

    return matchesSearch && matchesDestination && matchesBudget;
  });

  function checkBudgetMatch(price: number, budget: string): boolean {
    switch (budget) {
      case "Under $1000":
        return price < 1000;
      case "$1000 - $2000":
        return price >= 1000 && price <= 2000;
      case "$2000 - $3000":
        return price >= 2000 && price <= 3000;
      case "Over $3000":
        return price > 3000;
      default:
        return true;
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection title="Explore Trips" breadcrumb="Home > Explore Trips" />

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <Search
                placeholder="Search trips..."
                size="large"
                prefix={<SearchOutlined className="text-gray-400" />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Destination Filter */}
            <Select
              size="large"
              placeholder="All Destinations"
              value={selectedDestination}
              onChange={setSelectedDestination}
              className="w-full md:w-[200px]"
              suffixIcon={<EnvironmentOutlined />}
            >
              {destinations.map((dest) => (
                <Option
                  key={dest}
                  value={dest === "All Destinations" ? "all" : dest}
                >
                  {dest}
                </Option>
              ))}
            </Select>

            {/* Budget Filter */}
            <Select
              size="large"
              placeholder="All Budgets"
              value={selectedBudget}
              onChange={setSelectedBudget}
              className="w-full md:w-[200px]"
              suffixIcon={<DollarOutlined />}
            >
              {budgets.map((budget) => (
                <Option
                  key={budget}
                  value={budget === "All Budgets" ? "all" : budget}
                >
                  {budget}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      {/* Trip Listings */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTrips.map((trip) => (
              <Card
                key={trip.id}
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
                    <Badge
                      count={trip.duration}
                      className="absolute top-2 right-2 bg-blue-600"
                    />
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
            ))}
          </div>

          {/* No Results */}
          {filteredTrips.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No trips found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchText("");
                  setSelectedDestination("all");
                  setSelectedBudget("all");
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
