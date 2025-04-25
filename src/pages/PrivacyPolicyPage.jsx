import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-indigo-600 mb-6">
          University Privacy Policy
        </h1>

        {/* Grid Layout for the Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              Introduction
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              This privacy policy outlines how we collect, use, and protect your personal information when you use our services.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              We collect personal information such as name, email address, and academic records when you use our services.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              3. Data Security
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              We implement appropriate security measures to protect your personal data from unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              4. Sharing Your Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              We do not share your personal information with third parties except as necessary for service provision or as required by law.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              5. Your Rights
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              You have the right to access, correct, and delete your personal information. You may also request the restriction of data processing.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              We may update this privacy policy from time to time. We will notify you of any significant changes through email or on our platform.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              7. Contact Us
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              If you have any questions about this privacy policy or how we handle your personal data, please contact us at support@university.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
