import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/logo/logo.png"
              alt="TripSmart Logo"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Navigation */}
          <Menu
            mode="horizontal"
            items={menuItems}
            className="hidden md:flex pb-5 bg-transparent flex-1 justify-end"
            style={{ borderBottom: "none", color: "#4B5563" }}
          />

          <div>
            <Link href="/profile" className="flex items-center gap-2">
              {/* User Avatar */}
              <Avatar
                icon={<UserOutlined />}
                size={40}
                className="bg-[#4A9EFF] border-2 border-white cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
