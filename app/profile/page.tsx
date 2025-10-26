"use client";

import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfilePage() {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      // Handle form submission here
      console.log("Profile updated:", values);
      message.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      message.error("Failed to update profile");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    form.resetFields();
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
                <h2 className="text-2xl font-bold text-gray-900">
                  Personal Information
                </h2>
                <p className="text-gray-500 mt-1">
                  Update your personal information and profile details
                </p>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                  fullName: "Sazzad Chowdhury",
                  email: "example@email.com",
                  phone: "+8801916333904",
                  bio: "Travel enthusiast exploring the world one destination at a time. 🌍✈️",
                }}
              >
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input
                    size="large"
                    disabled={!isEditing}
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input
                    size="large"
                    disabled={!isEditing}
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    disabled={!isEditing}
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label="Bio"
                  name="bio"
                  rules={[{ required: true, message: "Please enter your bio" }]}
                >
                  <Input.TextArea
                    rows={4}
                    size="large"
                    disabled={!isEditing}
                    className="rounded-lg"
                  />
                </Form.Item>

                {isEditing ? (
                  <div className="flex justify-center gap-4 mt-6">
                    <Button
                      size="large"
                      onClick={handleCancel}
                      className="rounded-lg px-8"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      className="bg-[#4A9EFF] rounded-lg px-8 hover:opacity-90"
                    >
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center mt-6">
                    <Button
                      type="primary"
                      size="large"
                      icon={<EditOutlined />}
                      onClick={handleEdit}
                      className="bg-[#4A9EFF] rounded-lg px-8 hover:opacity-90"
                    >
                      Edit Profile
                    </Button>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
