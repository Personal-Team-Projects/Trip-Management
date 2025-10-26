import HomeBanner from "@/components/HomeBanner";
import FeaturesSection from "@/components/FeaturesSection";
import TravelReadySection from "@/components/TravelReadySection";
import FeaturedTripsSection from "@/components/FeaturedTripsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Home Banner Section */}
      <HomeBanner />

      {/* Features Section */}
      <FeaturesSection />

      {/* Travel Ready Section */}
      <TravelReadySection />

      {/* Featured Trips Section */}
      <FeaturedTripsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
