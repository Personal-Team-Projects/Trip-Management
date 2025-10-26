"use client";

import { useState } from "react";
import { Form, Input, Button, Card, Checkbox, Empty } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import Link from "next/link";

interface PackingItem {
  id: string;
  category: string;
  item: string;
  packed: boolean;
}

export default function PackingPage() {
  const [form] = Form.useForm();
  const [items, setItems] = useState<PackingItem[]>([
    {
      id: "1",
      category: "Clothing",
      item: "T-Shirts",
      packed: false,
    },
    {
      id: "2",
      category: "Clothing",
      item: "Jeans",
      packed: false,
    },
    {
      id: "3",
      category: "Essentials",
      item: "Toothbrush",
      packed: false,
    },
  ]);
  const [currentStep] = useState(4);

  const onFinish = (values: any) => {
    const newItem: PackingItem = {
      id: Date.now().toString(),
      category: values.category,
      item: values.item,
      packed: false,
    };
    setItems([...items, newItem]);
    form.resetFields();
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const togglePacked = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, PackingItem[]>);

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

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
              Your Packing List
            </h1>
            <p className="text-lg text-gray-600">
              Make sure you don't forget anything important
            </p>
          </div>

          {/* Packing Progress */}
          <Card className="mb-8 border-2 border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-2">
                  Packing Progress
                </div>
                <div className="text-3xl font-bold text-[#4A9EFF]">
                  {packedItems} / {totalItems} items packed
                </div>
              </div>
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                <ShoppingOutlined className="text-4xl text-[#4A9EFF]" />
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#4A9EFF] h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${(packedItems / totalItems) * 100}%`,
                  }}
                />
              </div>
            </div>
          </Card>

          {/* Add Item Form */}
          <div className="mb-8 border-b pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Add New Item
            </h2>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="grid grid-cols-1 md:grid-cols-5 gap-4"
            >
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  { required: true, message: "Please select a category" },
                ]}
                className="md:col-span-2"
              >
                <Input
                  placeholder="e.g., Clothing, Essentials"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="item"
                label="Item"
                rules={[{ required: true, message: "Please enter an item" }]}
                className="md:col-span-2"
              >
                <Input
                  placeholder="e.g., T-Shirts"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item className="md:col-span-1">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<PlusOutlined />}
                  className="bg-[#4A9EFF] rounded-lg w-full"
                  style={{ marginTop: 28 }}
                >
                  Add
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Packing List */}
          {items.length === 0 ? (
            <Empty
              image={<ShoppingOutlined className="text-6xl text-gray-300" />}
              imageStyle={{ height: 80 }}
              description="No items added yet. Start building your packing list!"
            />
          ) : (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">
                Your Packing List
              </h2>
              {Object.entries(groupedItems).map(([category, categoryItems]) => (
                <Card
                  key={category}
                  className="border-2"
                  title={
                    <span className="text-lg font-semibold text-gray-800">
                      {category}
                    </span>
                  }
                >
                  <div className="space-y-2">
                    {categoryItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 group transition-colors"
                      >
                        <Checkbox
                          checked={item.packed}
                          onChange={() => togglePacked(item.id)}
                          className="flex-1"
                        >
                          <span
                            className={
                              item.packed ? "line-through text-gray-400" : ""
                            }
                          >
                            {item.item}
                          </span>
                        </Checkbox>
                        <Button
                          type="text"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => deleteItem(item.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Link href="/create-trip/budget">
              <Button size="large" className="rounded-lg">
                <span className="px-2">&#60;</span> Previous
              </Button>
            </Link>
            <Link href="/create-trip/completion">
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
