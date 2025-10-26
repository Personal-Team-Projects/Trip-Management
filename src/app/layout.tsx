import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ConfigProvider } from "antd";
import "./globals.css";
import "antd/dist/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explorer Circle - Your Complete Travel Companion",
  description: "Plan, share, and explore amazing journeys with Explorer Circle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ConfigProvider>
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="mt-[76px]">{children}</div>

          {/* Footer */}
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}
