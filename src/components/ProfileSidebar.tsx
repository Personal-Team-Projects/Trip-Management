"use client";

import { Avatar } from "antd";
import { UserOutlined, CameraOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      key: "/profile",
      href: "/profile",
      label: "Personal Information",
      icon: <UserOutlined />,
    },
    {
      key: "/profile/change-password",
      href: "/profile/change-password",
      label: "Change Password",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18,8h-1V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M8.9,6A3,3 0 0,1 12,3A3,3 0 0,1 15,6V8H8.9V6Z" />
        </svg>
      ),
    },
    {
      key: "/profile/trips",
      href: "/profile/my-trips",
      label: "My Trips",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22,7H20V21H4V7H2C1.45,7 1,6.55 1,6V3C1,2.45 1.45,2 2,2H8V0H10V2H14V0H16V2H22C22.55,2 23,2.45 23,3V6C23,6.55 22.55,7 22,7M4,9H20V19H4V9M3,4V5H21V4H3Z" />
        </svg>
      ),
    },
    {
      key: "/profile/saved",
      href: "/profile/saved-trips",
      label: "Saved Trips",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
        </svg>
      ),
    },
    {
      key: "logout",
      href: "/signin",
      label: "Logout",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <Avatar size={100} icon={<UserOutlined />} className="bg-blue-500" />
          <button className="absolute bottom-0 right-0 bg-[#4A9EFF] text-white rounded-full p-2 hover:opacity-80 transition-opacity">
            <CameraOutlined />
          </button>
        </div>
        <h3 className="text-xl font-semibold mt-4">David Backham</h3>
        <p className="text-gray-500 text-sm">demo@example.com</p>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#4A9EFF] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center justify-center w-5">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
