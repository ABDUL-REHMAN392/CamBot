import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-indigo-600 mb-6">
          University Terms and Conditions
        </h1>

        {/* Grid Layout for the Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              Introduction
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              Welcome to our University platform! By accessing or using our services, you agree to comply with these terms.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              By accessing or using the services, you acknowledge and agree to abide by these terms and conditions.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              2. User Responsibilities
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              You agree to use the platform responsibly and adhere to the guidelines set by the university.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              3. Privacy and Data Protection
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              We respect your privacy and are committed to protecting your personal data in accordance with our privacy policy.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              4. Changes to Terms
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              We reserve the right to update or modify these terms at any time. You will be notified of any significant changes.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              5. Contact Us
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              If you have any questions or concerns about these terms, please contact us at admission@smcn.edu.pk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
