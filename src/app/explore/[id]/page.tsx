"use client";

import { useState } from "react";
import { Button, Avatar, Input, Badge, Collapse } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
  HeartOutlined,
  BookOutlined,
  ShareAltOutlined,
  UserOutlined,
  EyeOutlined,
  SendOutlined,
  DownOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Panel } = Collapse;

interface TripDetailsProps {
  params: { id: string };
}

export default function ExploreDetailsPage({ params }: TripDetailsProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [likes, setLikes] = useState(342);
  const [comment, setComment] = useState("");

  const tripData = {
    id: params.id,
    title: "Island Paradise in Thailand",
    location: "Phuket & Krabi, Thailand",
    duration: "7 days",
    budget: "$1200",
    detailedBudget: 1250,
    likes: likes,
    author: {
      name: "Sarah Johnson",
      avatar: "",
      bio: "Travel enthusiast | 23 countries visited",
      trips: 23,
    },
    overview: `Experience the best of Thailand&apos;s island paradise! This carefully crafted itinerary takes you through stunning beaches, vibrant markets, and unforgettable cultural experiences. From snorkeling in crystal-clear waters to watching breathtaking sunsets, this trip has it all. Indulge in authentic Thai cuisine and explore hidden gems known only to locals. Get ready for an adventure filled with relaxation, discovery, and memories that will last a lifetime.`,
    budgetBreakdown: [
      { category: "Accommodation", amount: 400, percentage: 40 },
      { category: "Transportation", amount: 100, percentage: 10 },
      { category: "Food", amount: 200, percentage: 20 },
      { category: "Activities", amount: 200, percentage: 20 },
      { category: "Others", amount: 100, percentage: 10 },
    ],
    packingList: [
      "Passport & Travel Documents",
      "Sunscreen SPF 50+",
      "Swimsuit",
      "Beach Towel",
      "Flip Flops",
      "Camera",
      "Snorkel Gear",
      "Light Clothing",
    ],
    itinerary: [
      {
        day: "1",
        title: "Tuesday, July 15",
        activities: [
          {
            time: "10:00 am",
            title: "Arrival at Phuket Airport",
            description:
              "Welcome to the tropical paradise! Upon landing at Phuket International Airport, you&apos;ll be greeted by the warm tropical breeze. Our driver will meet you at arrivals and transfer you to your beachfront resort. Check-in and unwind as you take in the stunning ocean views from your room. Spend your first evening exploring the nearby beach and enjoying a traditional Thai dinner.",
          },
          {
            time: "11:00 am",
            title: "Check-in at Beach Resort",
            description:
              "Settle into your luxurious beachfront accommodation. The resort features modern amenities, infinity pool overlooking the Andaman Sea, and direct beach access. Take some time to relax, have a refreshing swim, or simply soak in the breathtaking views. In the afternoon, we'll have an optional orientation meeting to discuss your itinerary and answer any questions.",
          },
        ],
      },
      {
        day: "2",
        title: "Island Hopping Adventure",
        activities: [
          {
            time: "8:00 am",
            title: "Speedboat to Phi Phi Islands",
            description:
              "Embark on an unforgettable island hopping adventure to the famous Phi Phi Islands. Visit Maya Bay, the stunning location featured in 'The Beach,' snorkel in crystal-clear waters teeming with tropical fish, and enjoy a delicious beachside lunch. The day includes stops at multiple islands, each more beautiful than the last.",
          },
        ],
      },
    ],
    comments: [
      {
        id: 1,
        author: "John Doe",
        initials: "JD",
        message:
          "Amazing itinerary! I'm planning a similar trip next month. Thanks for sharing!",
        timeAgo: "2 days ago",
      },
      {
        id: 2,
        author: "Alice Smith",
        initials: "AS",
        message:
          "The photos are stunning! How was the weather during your visit?",
        timeAgo: "5 days ago",
      },
      {
        id: 3,
        author: "Bob Wilson",
        initials: "BW",
        message:
          "Great budget breakdown. Very helpful for planning my own trip!",
        timeAgo: "1 week ago",
      },
    ],
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (comment.trim()) {
      console.log("New comment:", comment);
      setComment("");
    }
  };

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "itinerary", label: "Itinerary" },
    { key: "budget", label: "Budget" },
    { key: "packing", label: "Packing" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/cover.jpg"
          alt={tripData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Header Navigation */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🌐</span>
            </div>
            <span className="text-white font-semibold">Explorer Circle</span>
          </Link>
          <div className="flex items-center gap-6 text-white">
            <a href="#" className="hover:text-teal-300">
              Home
            </a>
            <a href="#" className="hover:text-teal-300">
              About us
            </a>
            <a href="#" className="hover:text-teal-300">
              Explore Trips
            </a>
            <a href="#" className="hover:text-teal-300">
              Contact
            </a>
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <UserOutlined />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">
              {tripData.title}
            </h1>
            <div className="flex items-center gap-6 text-white mb-6">
              <div className="flex items-center gap-2">
                <EnvironmentOutlined />
                <span>{tripData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarOutlined />
                <span>{tripData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarOutlined />
                <span>{tripData.budget}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interaction Buttons */}
        <div className="absolute bottom-6 right-6 z-10 flex gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <HeartOutlined /> {tripData.likes}
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
            <BookOutlined />
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
            <ShareAltOutlined />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-6 mb-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-4 px-2 font-medium transition-colors ${
                    activeTab === tab.key
                      ? "text-teal-500 border-b-2 border-teal-500"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {tripData.overview}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">Photo Gallery</h2>
                      <Button type="link" className="text-teal-500">
                        View All <EyeOutlined />
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="relative h-48 rounded-lg overflow-hidden"
                        >
                          <Image
                            src="/cover.jpg"
                            alt={`Gallery ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Itinerary Tab */}
              {activeTab === "itinerary" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Daily Itinerary</h2>
                  <Collapse
                    ghost
                    expandIcon={({ isActive }) => (
                      <DownOutlined
                        rotate={isActive ? 180 : 0}
                        className="text-gray-400"
                      />
                    )}
                  >
                    {tripData.itinerary.map((day, index) => (
                      <Panel
                        key={day.day}
                        header={
                          <span className="text-lg font-semibold">
                            Day {day.day}: {day.title}
                          </span>
                        }
                        className="bg-gray-50 mb-4 rounded-lg"
                      >
                        <div className="space-y-6 pl-4">
                          {day.activities.map((activity, actIndex) => (
                            <div
                              key={actIndex}
                              className="border-l-2 border-teal-500 pl-4"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <Badge
                                  count={activity.time}
                                  className="bg-teal-500"
                                />
                                <h4 className="font-semibold text-lg">
                                  {activity.title}
                                </h4>
                              </div>
                              <p className="text-gray-600 leading-relaxed">
                                {activity.description}
                              </p>
                              {actIndex === 0 && (
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                  {[1, 2, 3].map((i) => (
                                    <div
                                      key={i}
                                      className="relative h-32 rounded-lg overflow-hidden"
                                    >
                                      <Image
                                        src="/cover.jpg"
                                        alt={`Activity ${i}`}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </Panel>
                    ))}
                  </Collapse>
                </div>
              )}

              {/* Budget Tab */}
              {activeTab === "budget" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Budget Breakdown</h2>
                  <div className="space-y-4">
                    {tripData.budgetBreakdown.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.category}</span>
                          <span className="text-gray-600">
                            ${item.amount} ({item.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-teal-500 h-3 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-2xl font-bold text-teal-500">
                        Total: $1000
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Packing Tab */}
              {activeTab === "packing" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Packing List</h2>
                  <p className="text-gray-600 mb-6">
                    Recommended items for this trip
                  </p>
                  <div className="space-y-2">
                    {tripData.packingList.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <CheckCircleOutlined className="text-teal-500 text-lg" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Comments Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-6">
                Comments ({tripData.comments.length})
              </h2>
              <div className="mb-6">
                <TextArea
                  rows={4}
                  placeholder="Share your thoughts or ask a question..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="rounded-lg mb-3"
                />
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={handleComment}
                  className="bg-teal-500 hover:bg-teal-600 border-0 rounded-lg"
                >
                  Post Comment
                </Button>
              </div>

              <div className="space-y-4">
                {tripData.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <Avatar
                      size={40}
                      style={{
                        backgroundColor: "#0d9488",
                        color: "#fff",
                      }}
                    >
                      {comment.initials}
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-semibold">{comment.author}</span>
                        <span className="text-sm text-gray-500">
                          {comment.timeAgo}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar
                    size={60}
                    src="/signup/singUp.png"
                    icon={<UserOutlined />}
                    className="border-2 border-teal-500"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">
                      {tripData.author.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {tripData.author.bio}
                    </p>
                  </div>
                </div>
                <Button
                  type="primary"
                  className="w-full bg-teal-500 hover:bg-teal-600 border-0 rounded-lg"
                >
                  Follow
                </Button>
              </div>

              {/* Trip Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Trip Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{tripData.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Budget</span>
                    <span className="font-semibold">
                      ${tripData.detailedBudget}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Destination</span>
                    <span className="font-semibold">{tripData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
