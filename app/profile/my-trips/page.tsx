"use client";

import { useState } from "react";
import { Card, Tag, Button, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ProfileSidebar from "@/components/ProfileSidebar";

const tripData = [
  {
    id: 1,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unforgettable adventures. Experience the magic of untouched paradises and create memories that will last a lifetime.",
    status: "published",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  },
  {
    id: 2,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unforgettable adventures. Experience the magic of untouched paradises and create memories that will last a lifetime.",
    status: "draft",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  },
  {
    id: 3,
    title: "Langtang Valley Trekking",
    description:
      "Discover hidden islands, vibrant street markets, and breathtaking sunsets that paint the sky in gold. Immerse yourself in rich culture, friendly locals, and unforgettable adventures. Experience the magic of untouched paradises and create memories that will last a lifetime.",
    status: "published",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  },
];

export default function MyTripsPage() {
  const [trips, setTrips] = useState(tripData);

  const handleDelete = (id: number) => {
    setTrips(trips.filter((trip) => trip.id !== id));
    message.success("Trip deleted successfully");
  };

  const handleEdit = (id: number) => {
    message.info("Edit functionality coming soon");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "green";
      case "draft":
        return "red";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

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
                <h2 className="text-2xl font-bold text-gray-900">My Trips</h2>
                <p className="text-gray-500 mt-1">
                  Manage and view your created trips
                </p>
              </div>

              {/* Trip Cards Grid */}
              <div className="grid grid-cols-1 gap-6">
                {trips.map((trip) => (
                  <Card
                    key={trip.id}
                    className="rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Tag
                          color={getStatusColor(trip.status)}
                          className="text-sm font-semibold"
                        >
                          {getStatusLabel(trip.status)}
                        </Tag>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {trip.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {trip.description}
                      </p>
                      <div className="flex justify-end gap-3 border-t pt-4">
                        <Button
                          type="default"
                          icon={<EditOutlined />}
                          onClick={() => handleEdit(trip.id)}
                          className="rounded-lg"
                        >
                          Edit
                        </Button>
                        <Popconfirm
                          title="Delete Trip"
                          description="Are you sure you want to delete this trip?"
                          onConfirm={() => handleDelete(trip.id)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button
                            type="default"
                            danger
                            icon={<DeleteOutlined />}
                            className="rounded-lg"
                          >
                            Delete
                          </Button>
                        </Popconfirm>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {trips.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No trips created yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
