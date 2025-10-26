"use client";

import { Form, Input, Button, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import HeroSection from "../../components/HeroSection";

const { TextArea } = Input;

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log("Form values:", values);
    message.success("Message sent successfully!");
    form.resetFields();
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection title="Contact Us" breadcrumb="Home > Contact us" />

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="ant-form-custom"
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    placeholder="Your name"
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

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

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[
                    { required: true, message: "Please enter a subject" },
                  ]}
                >
                  <Input
                    placeholder="How can we help?"
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <TextArea
                    placeholder="Your message..."
                    rows={6}
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-full rounded-lg bg-teal-500 hover:bg-teal-600 border-0"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8">
              {/* Get in Touch Section */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                      <MailOutlined className="text-2xl text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:support@tripsmart.com"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        support@tripsmart.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                      <PhoneOutlined className="text-2xl text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                      <EnvironmentOutlined className="text-2xl text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        Office
                      </p>
                      <p className="text-gray-700">
                        123 Travel Street, San Francisco, CA 94102, United
                        States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Section */}
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-3 text-gray-700">
                  <p className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
