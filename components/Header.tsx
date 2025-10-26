import Link from "next/link";
import { Menu, Avatar } from "antd";
import { HomeOutlined, UserOutlined, GlobalOutlined } from "@ant-design/icons";

export default function Header() {
  const menuItems = [
    {
      key: "home",
      label: <Link href="/">Home</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "about",
      label: <Link href="/about">About us</Link>,
    },
    {
      key: "trips",
      label: <Link href="/explore">Explore Trips</Link>,
      icon: <GlobalOutlined />,
    },
    {
      key: "contact",
      label: <Link href="/contact">Contact</Link>,
    },
  ];

  return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-white/0 backdrop-blur-sm">
    <header className="fixed top-0 left-0 right-0 z-50  bg-white ">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#4A9EFF" />
              <path
                d="M20 12L15 17L20 18L17 23L20 24L25 19L20 18L23 13L20 12Z"
                fill="white"
              />
            </svg>
            <span className="text-xl font-bold text-white">TripSmart</span>
          </Link>

          {/* Navigation */}
          <Menu
            mode="horizontal"
            items={menuItems}
            className="hidden md:flex pb-5 bg-transparent flex-1 justify-end"
            style={{ borderBottom: "none", color: "#4B5563" }}
          />

          <Link href="/signin" className="flex items-center gap-2">
            {/* User Avatar */}
            <Avatar
              icon={<UserOutlined />}
              size={40}
              className="bg-[#4A9EFF] border-2 border-white cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
