import HeroSection from "../../components/HeroSection";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection title="Privacy Policy" breadcrumb="Home > Privacy Policy" />

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <p className="text-gray-700 mb-8 leading-relaxed">
            At Explorer Circle, your privacy is very important to us. This
            Privacy Policy explains how we collect, use, and protect your
            personal information when you use our website and services.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <div className="text-gray-700 space-y-3">
              <p className="font-semibold">Personal Information</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>Travel preferences and trip details</li>
              </ul>

              <p className="font-semibold mt-4">Usage Data</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Pages visited and time spent on our platform</li>
                <li>Features used and interactions with our services</li>
                <li>Search queries and navigation patterns</li>
              </ul>

              <p className="font-semibold mt-4">Device Information</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>IP address and device identifiers</li>
                <li>Browser type and operating system</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="text-gray-700 list-disc list-inside ml-4 space-y-2">
              <li>
                Provide and improve our travel planning tools and services
              </li>
              <li>Personalize your experience and recommendations</li>
              <li>Send you updates, newsletters, and promotional content</li>
              <li>Process transactions and manage your account</li>
              <li>Analyze usage patterns and improve our platform</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Protect Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction. This includes encryption, secure
              servers, and regular security assessments.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Cookies and Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              experience, analyze site traffic, and personalize content. You can
              manage your cookie preferences through your browser settings.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Sharing of Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only with trusted
              third-party partners who assist in operating our platform and
              providing services to you, subject to strict confidentiality
              agreements.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time. You can also opt out of marketing
              communications and manage your privacy preferences through your
              account settings.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our platform may contain links to third-party websites or
              services. We are not responsible for the privacy practices of
              these external sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Updates to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Any updates will
              be posted on this page with a revised &quot;Last Updated&quot;
              date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Questions about our Privacy Policy?</strong> Contact us at{" "}
              <a
                href="mailto:privacy@explorercircle.com"
                className="text-blue-600 hover:underline"
              >
                privacy@explorercircle.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
