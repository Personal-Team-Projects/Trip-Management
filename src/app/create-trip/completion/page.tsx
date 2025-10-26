"use client";

import { useState } from "react";
import { Button, Card, Typography } from "antd";
import {
  CheckCircleOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  DollarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Title, Text, Paragraph } = Typography;

export default function CompletionPage() {
  const [currentStep] = useState(5);
  const [tripData] = useState({
    tripName: "Summer Beach Vacation",
    destination: "Bali, Indonesia",
    startDate: "June 1, 2024",
    endDate: "June 7, 2024",
    budget: 3000,
    members: ["You", "John Doe"],
    activities: 5,
    expenses: 3,
    packedItems: 8,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-12">
          {[
            { label: "Basic Info", number: 1 },
            { label: "Itinerary", number: 2 },
            { label: "Budget", number: 3 },
            { label: "Packing", number: 4 },
            { label: "Complete", number: 5 },
          ].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep === step.number
                      ? "bg-green-500 text-white"
                      : currentStep > step.number
                      ? "bg-green-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  ✓
                </div>
                {step.label && (
                  <span className="ml-2 font-medium text-green-600">
                    {step.label}
                  </span>
                )}
              </div>
              {index < 4 && <div className="w-24 h-1 mx-2 bg-green-500" />}
            </div>
          ))}
        </div>

        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 rounded-full bg-green-100 mx-auto mb-6 flex items-center justify-center">
            <CheckCircleOutlined className="text-5xl text-green-500" />
          </div>
          <Title level={1} className="!text-4xl !mb-4">
            Trip Created Successfully!
          </Title>
          <Paragraph className="text-xl text-gray-600">
            Your trip is all set. Let&apos;s review what you&apos;ve planned.
          </Paragraph>
        </div>

        {/* Trip Summary Card */}
        <Card className="shadow-xl border-2 border-green-100 mb-8">
          <Title level={2} className="!mb-6 !text-gray-900">
            Trip Summary
          </Title>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <Text type="secondary" className="text-sm">
                  Trip Name
                </Text>
                <div className="text-xl font-semibold text-gray-900 mt-1">
                  {tripData.tripName}
                </div>
              </div>

              <div>
                <Text type="secondary" className="text-sm">
                  Destination
                </Text>
                <div className="text-xl font-semibold text-gray-900 mt-1">
                  {tripData.destination}
                </div>
              </div>

              <div>
                <Text type="secondary" className="text-sm">
                  Travel Dates
                </Text>
                <div className="text-xl font-semibold text-gray-900 mt-1">
                  {tripData.startDate} - {tripData.endDate}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Text type="secondary" className="text-sm">
                  Total Budget
                </Text>
                <div className="text-2xl font-bold text-[#4A9EFF] mt-1">
                  ${tripData.budget.toLocaleString()}
                </div>
              </div>

              <div>
                <Text type="secondary" className="text-sm">
                  Trip Members
                </Text>
                <div className="mt-2">
                  {tripData.members.map((member, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center border-2 border-purple-100 hover:shadow-lg transition-shadow">
            <ClockCircleOutlined className="text-4xl text-purple-500 mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {tripData.activities}
            </div>
            <div className="text-gray-600">Activities Planned</div>
          </Card>

          <Card className="text-center border-2 border-green-100 hover:shadow-lg transition-shadow">
            <ShoppingOutlined className="text-4xl text-green-500 mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">
              {tripData.packedItems}
            </div>
            <div className="text-gray-600">Items Packed</div>
          </Card>

          <Card className="text-center border-2 border-red-100 hover:shadow-lg transition-shadow">
            <DollarOutlined className="text-4xl text-red-500 mb-3" />
            <div className="text-3xl font-bold text-red-600 mb-2">
              {tripData.expenses}
            </div>
            <div className="text-gray-600">Expenses Tracked</div>
          </Card>
        </div>

        {/* What's Next Section */}
        <Card className="shadow-xl mb-8">
          <Title level={3} className="!mb-4 !text-gray-900">
            What&apos;s Next?
          </Title>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <CheckCircleOutlined className="text-blue-500 text-xl mt-1" />
              <div>
                <Text strong className="block mb-1">
                  Review Your Itinerary
                </Text>
                <Text type="secondary">
                  Check all your planned activities and make any adjustments
                  needed.
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircleOutlined className="text-green-500 text-xl mt-1" />
              <div>
                <Text strong className="block mb-1">
                  Track Your Expenses
                </Text>
                <Text type="secondary">
                  Continue adding expenses as you plan your trip to stay on
                  budget.
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircleOutlined className="text-purple-500 text-xl mt-1" />
              <div>
                <Text strong className="block mb-1">
                  Complete Your Packing
                </Text>
                <Text type="secondary">
                  Add more items to your packing list as you think of them.
                </Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            type="default"
            size="large"
            icon={<FileTextOutlined />}
            className="rounded-lg"
          >
            Download PDF Summary
          </Button>
          <Link href="/explore">
            <Button
              type="primary"
              size="large"
              className="bg-[#4A9EFF] rounded-lg"
            >
              View Your Trips
            </Button>
          </Link>
          <Link href="/">
            <Button size="large" className="rounded-lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
