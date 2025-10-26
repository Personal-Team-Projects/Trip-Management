import HeroSection from "../../components/HeroSection";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Terms and Conditions"
        breadcrumb="Home > Terms and Conditions"
      />

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <p className="text-gray-700 mb-8 leading-relaxed">
            Please read these Terms and Conditions carefully before using
            Explorer Circle. By accessing or using our services, you agree to be
            bound by these terms. If you do not agree with any part of these
            terms, you may not access the platform.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By creating an account or using Explorer Circle, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms and Conditions and our Privacy Policy. These terms apply to
              all users of the platform.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Use of Service
            </h2>
            <div className="text-gray-700 space-y-3">
              <p className="font-semibold">Eligibility</p>
              <p>You must be at least 18 years old to use Explorer Circle.</p>

              <p className="font-semibold mt-4">Account Responsibility</p>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </p>

              <p className="font-semibold mt-4">Acceptable Use</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Use the platform in compliance with all applicable laws</li>
                <li>Provide accurate and truthful information</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Do not engage in any harmful or malicious activities</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. User Content
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                You retain ownership of any content you create, upload, or share
                on the platform (&quot;User Content&quot;). By sharing content,
                you grant Explorer Circle a worldwide, non-exclusive,
                royalty-free license to use, display, and distribute your
                content within the platform.
              </p>
              <p>
                You are solely responsible for your User Content and warrant
                that you have all necessary rights to share such content.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of Explorer Circle,
              including but not limited to text, graphics, logos, and software,
              are owned by Explorer Circle or its licensors and are protected by
              copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Payment and Subscription
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Premium subscriptions are billed monthly or annually based on
                your chosen plan. Payments are processed securely through our
                third-party payment processor.
              </p>
              <p>
                You may cancel your subscription at any time, and your access to
                premium features will continue until the end of your current
                billing period.
              </p>
              <p>All fees are non-refundable unless otherwise stated.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Explorer Circle is provided &quot;as is&quot; and &quot;as
              available&quot; without any warranties of any kind, either express
              or implied. We do not guarantee that the platform will be
              uninterrupted, secure, or error-free.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Explorer Circle shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the platform or
              inability to use the platform.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account at any
              time for violations of these Terms and Conditions or for any other
              reason at our sole discretion. Upon termination, your right to use
              the platform will immediately cease.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may modify these Terms and Conditions at any time. We will
              notify users of any material changes by posting the updated terms
              on this page and updating the &quot;Last Updated&quot; date. Your
              continued use of the platform after changes become effective
              constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which Explorer
              Circle operates, without regard to its conflict of law provisions.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Questions about our Terms and Conditions?</strong> Contact
              us at{" "}
              <a
                href="mailto:legal@explorercircle.com"
                className="text-blue-600 hover:underline"
              >
                legal@explorercircle.com
              </a>
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}
