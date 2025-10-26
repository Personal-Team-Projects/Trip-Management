"use client";

import { useState } from "react";
import { Form, Input, Button, Select, Card } from "antd";
import {
  DollarOutlined,
  PlusOutlined,
  DeleteOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Dropdown, Empty } from "antd";

const { TextArea } = Input;

interface Expense {
  id: string;
  category: string;
  amount: number;
  description: string;
}

export default function BudgetPage() {
  const [form] = Form.useForm();
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "1",
      category: "Hotel",
      amount: 333,
      description: "Hotel booking for 3 nights",
    },
  ]);
  const [totalBudget] = useState(3000);
  const [currentStep] = useState(3);

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = totalBudget - totalSpent;

  const onFinish = (values: {
    category: string;
    amount: number;
    description: string;
  }) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      category: values.category,
      amount: values.amount,
      description: values.description || "",
    };
    setExpenses([...expenses, newExpense]);
    form.resetFields();
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const menuItems = (id: string) => [
    {
      key: "edit",
      label: "Edit",
      icon: <DollarOutlined />,
    },
    {
      key: "delete",
      label: "Delete",
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => deleteExpense(id),
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
              Track Your Budget
            </h1>
            <p className="text-lg text-gray-600">
              Keep your spending organized and under control
            </p>
          </div>

          {/* Budget Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center border-2 border-blue-100">
              <div className="text-sm text-gray-600 mb-2">Total Budget</div>
              <div className="text-3xl font-bold text-[#4A9EFF]">
                ${totalBudget.toLocaleString()}
              </div>
            </Card>
            <Card className="text-center border-2 border-red-100">
              <div className="text-sm text-gray-600 mb-2">Total Spent</div>
              <div className="text-3xl font-bold text-red-500">
                ${totalSpent.toLocaleString()}
              </div>
            </Card>
            <Card className="text-center border-2 border-green-100">
              <div className="text-sm text-gray-600 mb-2">Remaining</div>
              <div className="text-3xl font-bold text-green-500">
                ${remaining.toLocaleString()}
              </div>
            </Card>
          </div>

          {/* Add Expense Form */}
          <div className="mb-8 border-b pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Add New Expense
            </h2>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  { required: true, message: "Please select a category" },
                ]}
              >
                <Select
                  placeholder="Select category"
                  size="large"
                  className="rounded-lg"
                >
                  <Select.Option value="Hotel">Hotel</Select.Option>
                  <Select.Option value="Transport">Transport</Select.Option>
                  <Select.Option value="Food">Food</Select.Option>
                  <Select.Option value="Activities">Activities</Select.Option>
                  <Select.Option value="Shopping">Shopping</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="amount"
                label="Amount ($)"
                rules={[{ required: true, message: "Please enter an amount" }]}
              >
                <Input
                  type="number"
                  placeholder="Enter amount"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: "Please enter a description" },
                ]}
              >
                <Input
                  placeholder="Enter description"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>
            </Form>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                icon={<PlusOutlined />}
                onClick={() => form.submit()}
                className="bg-[#4A9EFF] rounded-lg"
              >
                Add Expense
              </Button>
            </Form.Item>
          </div>

          {/* Expenses List */}
          {expenses.length === 0 ? (
            <Empty
              image={<DollarOutlined className="text-6xl text-gray-300" />}
              imageStyle={{ height: 80 }}
              description="No expenses recorded yet. Add your first expense above! Track everything from flights to coffee.'s most famous national park."
            />
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Your Expenses
              </h2>
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="p-4 bg-gray-50 rounded-lg flex items-center justify-between group hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <DollarOutlined className="text-[#4A9EFF] text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          {expense.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">
                          {expense.description}
                        </span>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-red-500">
                      ${expense.amount}
                    </div>
                  </div>
                  <Dropdown
                    menu={{ items: menuItems(expense.id) }}
                    trigger={["click"]}
                  >
                    <Button
                      type="text"
                      icon={<EllipsisOutlined />}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Dropdown>
                </div>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Link href="/create-trip/itinerary">
              <Button size="large" className="rounded-lg">
                <span className="px-2">&#60;</span> Previous
              </Button>
            </Link>
            <Link href="/create-trip/packing">
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
