"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  TimePicker,
  Upload,
  Card,
  Empty,
  Menu,
  Dropdown,
} from "antd";
import {
  ClockCircleOutlined,
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { TextArea } = Input;

interface Activity {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  photos?: string[];
}

export default function ItineraryPage() {
  const [form] = Form.useForm();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentStep] = useState(2);

  const onFinish = (values: {
    day: string;
    time: string;
    activityTitle: string;
    description: string;
  }) => {
    const newActivity: Activity = {
      id: Date.now().toString(),
      day: values.day,
      time: values.time,
      title: values.activityTitle,
      description: values.description || "",
    };
    setActivities([...activities, newActivity]);
    form.resetFields();
  };

  const deleteActivity = (id: string) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const groupedActivities = activities.reduce((acc, activity) => {
    if (!acc[activity.day]) {
      acc[activity.day] = [];
    }
    acc[activity.day].push(activity);
    return acc;
  }, {} as Record<string, Activity[]>);

  const menuItems = (id: string) => [
    {
      key: "edit",
      label: "Edit",
      icon: <ClockCircleOutlined />,
    },
    {
      key: "delete",
      label: "Delete",
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => deleteActivity(id),
    },
  ];

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
              Plan Your Itinerary
            </h1>
            <p className="text-lg text-gray-600">
              Add activities for your trip
            </p>
          </div>

          {/* Activity Form */}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item
                name="day"
                label="Day"
                rules={[{ required: true, message: "Please select a day" }]}
              >
                <Select
                  placeholder="Select a day"
                  size="large"
                  className="rounded-lg"
                >
                  <Select.Option value="Day 1">Day 1</Select.Option>
                  <Select.Option value="Day 2">Day 2</Select.Option>
                  <Select.Option value="Day 3">Day 3</Select.Option>
                  <Select.Option value="Day 4">Day 4</Select.Option>
                  <Select.Option value="Day 5">Day 5</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="time"
                label="Time"
                rules={[{ required: true, message: "Please select a time" }]}
              >
                <TimePicker
                  size="large"
                  className="w-full rounded-lg"
                  format="h:mm A"
                  placeholder="Select time"
                />
              </Form.Item>

              <Form.Item
                name="activityTitle"
                label="Activity Title"
                rules={[
                  {
                    required: true,
                    message: "Please enter an activity title",
                  },
                ]}
              >
                <Input
                  placeholder="e.g., Visit Eiffel Tower"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>
            </div>

            <Form.Item name="description" label="Description (optional)">
              <TextArea
                rows={4}
                placeholder="Add any notes or details"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item label="Photos (Optional)">
              <Upload
                listType="picture-card"
                maxCount={3}
                className="rounded-lg"
              >
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Add Photo</div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                icon={<PlusOutlined />}
                className="bg-[#4A9EFF] rounded-lg"
              >
                Add Activity
              </Button>
            </Form.Item>
          </Form>

          {/* Activities List */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {activities.length} Activities Planned
            </h2>

            {activities.length === 0 ? (
              <Empty
                image={
                  <ClockCircleOutlined className="text-6xl text-gray-300" />
                }
                imageStyle={{ height: 80 }}
                description="No activities added yet. Add your first activity above! Don't worry, you can always add more later."
              />
            ) : (
              <div className="space-y-6">
                {Object.entries(groupedActivities).map(
                  ([day, dayActivities]) => (
                    <div key={day} className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#4A9EFF] text-white flex items-center justify-center font-medium text-sm">
                          {day.replace("Day ", "")}
                        </span>
                        {day}
                      </h3>

                      {dayActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="mb-4 p-4 bg-gray-50 rounded-lg relative group"
                        >
                          <div className="flex items-start gap-3">
                            <ClockCircleOutlined className="text-[#4A9EFF] mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-[#4A9EFF]">
                                  {activity.time}
                                </span>
                                <Dropdown
                                  menu={{ items: menuItems(activity.id) }}
                                  trigger={["click"]}
                                >
                                  <Button
                                    type="text"
                                    icon={<EllipsisOutlined />}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  />
                                </Dropdown>
                              </div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {activity.title}
                              </h4>
                              {activity.description && (
                                <p className="text-gray-600 text-sm mb-3">
                                  {activity.description}
                                </p>
                              )}
                              {activity.photos &&
                                activity.photos.length > 0 && (
                                  <div className="flex gap-2">
                                    {activity.photos.map((photo, index) => (
                                      <img
                                        key={index}
                                        src={photo}
                                        alt="Activity photo"
                                        className="w-20 h-20 object-cover rounded"
                                      />
                                    ))}
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Link href="/create-trip">
              <Button size="large" className="rounded-lg">
                <span className="px-2">&#60;</span> Previous
              </Button>
            </Link>
            <Link href="/create-trip/budget">
              <Button
                type="primary"
                size="large"
                className="bg-[#4A9EFF] rounded-lg"
              >
                Next <span className="px-2">&#62;</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
