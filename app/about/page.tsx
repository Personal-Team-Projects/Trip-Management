import HeroSection from "@/components/HeroSection";
import {
  CalendarOutlined,
  DollarOutlined,
  CheckOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection title="About Us" breadcrumb="Home > About us" />

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Explorer Circle was born from a simple idea: travel planning
                  shouldn't be stressful. Our team of passionate travelers and
                  tech enthusiasts created a platform that combines powerful
                  planning tools with the inspiration of a travel community.
                  Today, thousands of travelers use Explorer Circle to plan
                  their perfect journeys and share their adventures with the
                  world.
                </p>
                <p>
                  We are dedicated to making travel planning easier, more
                  organized, and more enjoyable for everyone, helping travelers
                  plan trips efficiently while connecting with like-minded
                  explorers.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cover.jpg"
                alt="Beautiful beach destination"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Smarter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Text and Image */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Travel Smarter with Explorer Circle
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Make every trip effortless with easy-to-use tools to plan your
                itinerary, track your budget, and pack efficiently. Get inspired
                by a community of fellow travelers and make every journey
                unforgettable.
              </p>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/cover.jpg"
                  alt="Scenic travel destination"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CalendarOutlined className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Intuitive Itinerary Builder
                </h3>
                <p className="text-gray-600">
                  Easily organize your trip day by day, adding activities,
                  destinations, and notes in a simple, visual planner.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarOutlined className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Budget Tracking
                </h3>
                <p className="text-gray-600">
                  Track your spending, set limits, and calculate costs so you
                  can enjoy your trip without worrying about overspending.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckOutlined className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Packing Checklists
                </h3>
                <p className="text-gray-600">
                  Build packing lists that fit your trip perfectly, ensuring you
                  never forget essential items.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BulbOutlined className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Inspiration from Others
                </h3>
                <p className="text-gray-600">
                  Browse travel ideas, tips, and experiences shared by a
                  community of like-minded explorers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower travelers with intuitive planning
                tools and a supportive community, making every journey easier,
                more organized, and memorable. Our vision is to become the
                world's leading platform for effortless travel planning,
                inspiring explorers everywhere to connect, share, and create
                unforgettable experiences.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cover.jpg"
                alt="Traveler with backpack"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
