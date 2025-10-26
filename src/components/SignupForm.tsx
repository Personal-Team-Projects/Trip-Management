"use client";

import Link from "next/link";
import { Form, Input, Button, Divider, Checkbox } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

interface AuthFormProps {
  mode?: "signup" | "signin";
}

export default function AuthForm({ mode = "signup" }: AuthFormProps) {
  const [form] = Form.useForm();

  const onFinish = (values: Record<string, unknown>) => {
    if (mode === "signup") {
      console.log("Signup form submitted:", values);
    } else {
      console.log("Signin form submitted:", values);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="23" fill="#4A9EFF" opacity="0.2" />
          <path
            d="M24 12L28 20L36 24L28 28L24 36L20 28L12 24L20 20L24 12Z"
            fill="#4A9EFF"
          />
          <path
            d="M24 18L25.5 22.5L30 24L25.5 25.5L24 30L22.5 25.5L18 24L22.5 22.5L24 18Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-3xl  text-center font-bold text-gray-800 mb-2">
        {mode === "signup" ? "Welcome Back" : "Welcome Back"}
      </h1>

      <p className="text-gray-600  text-center  mb-8">
        Plan your next adventure with us
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <Link
          href="/signin"
          className={`flex-1 py-3 px-6 text-center rounded-lg transition-colors ${
            mode === "signin"
              ? "bg-white border border-gray-300 text-gray-800 font-medium"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className={`flex-1 py-3 px-6 text-center rounded-lg transition-colors ${
            mode === "signup"
              ? "bg-white border border-gray-300 text-gray-800 font-medium"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Sign Up
        </Link>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="ant-form-custom"
      >
        {mode === "signup" && (
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              placeholder="Your name"
              size="large"
              className="rounded-lg"
            />
          </Form.Item>
        )}

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            placeholder="you@example.com"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter your password" },
            ...(mode === "signup"
              ? [{ min: 6, message: "Password must be at least 6 characters" }]
              : []),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter your password"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        {/* Remember me and Forgot password - only for signin */}
        {mode === "signin" && (
          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link
              href="/forgot-password"
              className="text-teal-500 hover:text-teal-600"
            >
              Forgot password?
            </Link>
          </div>
        )}
        {/* Submit Button */}
        <div className="mt-5 ">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="bg-teal-500 hover:bg-teal-600"
            >
              {mode === "signup" ? "Sign Up" : "Sign In"}
            </Button>
          </Form.Item>
        </div>
      </Form>

      {/* Separator */}
      <Divider plain>or</Divider>

      {/* Social Login Buttons */}
      <div className="  flex gap-3">
        <Button
          block
          size="large"
          icon={<GoogleOutlined />}
          className="flex items-center justify-center"
        >
          Google
        </Button>

        <Button
          block
          size="large"
          icon={<FacebookOutlined />}
          className="flex items-center justify-center"
        >
          Facebook
        </Button>
      </div>
    </div>
  );
}
