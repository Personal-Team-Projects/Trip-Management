"use client";

import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import HeroSection from "@/components/HeroSection";

const { Panel } = Collapse;

const faqData: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is Explorer Circle?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        Explorer Circle is a comprehensive travel management platform that helps
        you plan, organize, and share your travel experiences. We provide tools
        for creating itineraries, managing budgets, tracking packing lists, and
        connecting with fellow travelers.
      </p>
    ),
  },
  {
    key: "2",
    label: "How do I create an account?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        Creating an account is simple! Click on the "Sign Up" button in the top
        right corner, fill in your information, and verify your email address.
        Once verified, you can start exploring our features immediately.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is Explorer Circle free to use?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        Yes! Explorer Circle offers a free tier with access to all core features
        including itinerary planning, budget tracking, and trip sharing. We also
        offer premium plans with additional features for power users.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I share my trips with friends?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        Absolutely! Explorer Circle allows you to share your trips with friends
        and family. You can invite them to collaborate on itineraries, view your
        travel plans, and plan group trips together.
      </p>
    ),
  },
  {
    key: "5",
    label: "How does the budget calculator work?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        Our budget calculator helps you estimate and track expenses for your
        trip. Simply input your planned expenses including accommodation,
        transportation, food, and activities. The calculator will help you stay
        on budget throughout your journey.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can I use Explorer Circle offline?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        Yes, you can download your trips and access them offline through our
        mobile app. Your itineraries, budgets, and packing lists will be
        available even without an internet connection.
      </p>
    ),
  },
  {
    key: "7",
    label: "Is my travel data secure?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        Your privacy and security are our top priorities. We use
        industry-standard encryption to protect your data, and we never share
        your personal information with third parties without your consent.
      </p>
    ),
  },
  {
    key: "8",
    label: "How do I cancel my subscription?",
    children: (
      <p className="text-gray-700 leading-relaxed">
        You can cancel your subscription at any time from your account settings.
        Your premium features will remain active until the end of your current
        billing period. After cancellation, your account will revert to the free
        tier.
      </p>
    ),
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection title="Frequently Asked Questions" breadcrumb="Home > FAQ" />

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Collapse
              items={faqData}
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              className="faq-collapse"
            />
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
