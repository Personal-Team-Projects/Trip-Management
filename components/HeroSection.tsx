import Image from "next/image";

interface HeroSectionProps {
  title: string;
  breadcrumb: string;
}

export default function HeroSection({ title, breadcrumb }: HeroSectionProps) {
  return (
    <div className="relative h-[200px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/coverPage.jpg/coverPage.jpg"
          alt={`${title} Background`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-800/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg">{breadcrumb}</p>
      </div>
    </div>
  );
}
