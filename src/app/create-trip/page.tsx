"use client";

import { Form, Input, DatePicker, InputNumber, Button } from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";

export default function CreateTripPage() {
  const [form] = Form.useForm();
  const [members, setMembers] = useState<string[]>([]);
  const [currentStep] = useState(1);

  const onFinish = (values: {
    tripName: string;
    destination: string;
    startDate: string;
    endDate: string;
    budget: number;
    members: string[];
  }) => {
    console.log("Trip Info:", values);
  };

  const addMember = () => {
    const newMember = "";
    setMembers([...members, newMember]);
  };

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const parseCurrency = (value: string | undefined): number => {
    const numStr = value!.replace(/\$\s?|(,*)/g, "");
    return Number(numStr) || 0;
  };

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
            { label: "", number: 5 },
          ].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep === step.number
                      ? "bg-[#4A9EFF] text-white"
                      : currentStep > step.number
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {currentStep > step.number ? "✓" : step.number}
                </div>
                {step.label && (
                  <span
                    className={`ml-2 font-medium ${
                      currentStep === step.number
                        ? "text-[#4A9EFF]"
                        : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                )}
              </div>
              {index < 4 && (
                <div
                  className={`w-24 h-1 mx-2 ${
                    currentStep > step.number
                      ? "bg-green-500"
                      : currentStep === step.number
                      ? "bg-[#4A9EFF]"
                      : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Let&apos;s Start Your Trip
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your travel plans
            </p>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              budget: 0,
            }}
          >
            {/* Trip Name */}
            <Form.Item
              name="tripName"
              label="Trip Name"
              rules={[{ required: true, message: "Please enter a trip name" }]}
            >
              <Input
                placeholder="e.g., Summer Beach Vacation"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            {/* Destination */}
            <Form.Item
              name="destination"
              label="Destination"
              rules={[
                { required: true, message: "Please enter a destination" },
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined className="text-gray-400" />}
                placeholder="e.g., Bali, Indonesia"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="startDate"
                label="Start Date"
                rules={[
                  { required: true, message: "Please select a start date" },
                ]}
              >
                <DatePicker
                  suffixIcon={<CalendarOutlined />}
                  size="large"
                  className="w-full rounded-lg"
                  placeholder="Select start date"
                />
              </Form.Item>

              <Form.Item
                name="endDate"
                label="End Date"
                rules={[
                  {
                    required: true,
                    message: "Please select an end date",
                  },
                ]}
              >
                <DatePicker
                  suffixIcon={<CalendarOutlined />}
                  size="large"
                  className="w-full rounded-lg"
                  placeholder="Select end date"
                />
              </Form.Item>
            </div>

            {/* Budget */}
            <Form.Item
              name="budget"
              label="Total Budget ($)"
              rules={[
                {
                  required: true,
                  message: "Please enter your total budget",
                },
              ]}
            >
              <InputNumber
                className="w-full rounded-lg"
                size="large"
                min={0}
                placeholder="0"
                controls={true}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={parseCurrency as (value: string | undefined) => number}
              />
            </Form.Item>

            {/* Trip Members */}
            <div className="mt-6">
              <label className="block mb-3 text-sm font-semibold text-gray-700">
                Trip Members
              </label>

              {/* You Label */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#4A9EFF] flex items-center justify-center">
                  <UserOutlined className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">You</span>
              </div>

              {/* Members List */}
              {members.map((member, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Input
                    placeholder="Add a travel buddy"
                    size="large"
                    className="flex-1 rounded-lg"
                  />
                  <Button
                    onClick={() => removeMember(index)}
                    size="large"
                    danger
                    className="rounded-lg"
                  >
                    Remove
                  </Button>
                </div>
              ))}

              {/* Add Member Button */}
              <Button
                type="dashed"
                onClick={addMember}
                size="large"
                icon={<PlusOutlined />}
                block
                className="rounded-lg mt-2"
              >
                Add a travel buddy
              </Button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button size="large" className="rounded-lg">
                <span className="px-2">&#60;</span> Previous
              </Button>
              <Link href="/create-trip/itinerary">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="bg-[#4A9EFF] rounded-lg"
                >
                  Next <span className="px-2">&#62;</span>
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
