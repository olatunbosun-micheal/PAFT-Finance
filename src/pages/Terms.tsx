import { Navigation } from "@/components/Navigation";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last updated: October 25, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to PAFT (Personal AI Finance Tracker), an AI-powered financial management platform designed to help individuals and businesses manage their finances, track expenses, calculate taxes, and make informed financial decisions. These Terms & Conditions ("Terms") govern your use of our website, mobile application, and related services (collectively, the "Service").
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing or using PAFT, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                To use PAFT, you must:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>Be at least 18 years old or have parental/guardian consent</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            {/* Account Registration */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration</h2>
              <p className="text-gray-700 leading-relaxed">
                To access certain features of PAFT, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>Providing accurate, current, and complete information</li>
                <li>Maintaining the security of your password and account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>All activities that occur under your account</li>
              </ul>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Services</h2>
              <p className="text-gray-700 leading-relaxed">
                PAFT provides the following services:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li><strong>Expense Tracking:</strong> Automated categorization and recording of financial transactions</li>
                <li><strong>Tax Calculations:</strong> AI-powered tax estimation and planning tools</li>
                <li><strong>Budget Forecasting:</strong> Predictive analytics for financial planning</li>
                <li><strong>AI Assistant:</strong> Intelligent chatbot for financial advice and queries</li>
                <li><strong>Receipt Scanning:</strong> OCR technology for automatic receipt processing</li>
                <li><strong>Financial Reports:</strong> Comprehensive analytics and insights</li>
              </ul>
            </section>

            {/* Data Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Privacy & Security</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. PAFT implements bank-level security measures including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>End-to-end encryption for sensitive financial data</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication options</li>
                <li>Data backup and disaster recovery systems</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We collect only necessary information to provide our services and comply with applicable data protection laws including GDPR and NDPR (Nigeria Data Protection Regulation).
              </p>
            </section>

            {/* User Obligations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. User Obligations</h2>
              <p className="text-gray-700 leading-relaxed">
                As a PAFT user, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>Use the Service only for lawful purposes</li>
                <li>Not upload or share fraudulent or illegal content</li>
                <li>Not attempt to hack, reverse engineer, or compromise the Service</li>
                <li>Respect intellectual property rights</li>
                <li>Report any security vulnerabilities or suspicious activities</li>
                <li>Keep your contact information and payment details current</li>
              </ul>
            </section>

            {/* AI Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. AI & Technology Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                While PAFT uses advanced AI technology, please note:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>AI recommendations are suggestions, not guaranteed financial advice</li>
                <li>Tax calculations are estimates and should be verified by professionals</li>
                <li>OCR accuracy depends on receipt quality and formatting</li>
                <li>Forecasts are based on historical data and market conditions</li>
                <li>Always consult qualified financial advisors for important decisions</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                PAFT offers both free and premium subscription plans. For paid services:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                <li>Payments are processed securely through approved payment processors</li>
                <li>Refunds are available within 30 days for qualifying cancellations</li>
                <li>Price changes will be communicated 30 days in advance</li>
                <li>Failed payments may result in service suspension</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and technology in PAFT are protected by intellectual property laws. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>Software code, algorithms, and AI models</li>
                <li>User interface designs and branding</li>
                <li>Trademarks, logos, and service marks</li>
                <li>Copyrighted materials and documentation</li>
                <li>Proprietary methodologies and processes</li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>You may request data export within 30 days</li>
                <li>All accrued charges will be settled</li>
                <li>Certain provisions survive termination (privacy, liability, etc.)</li>
                <li>PAFT may retain anonymized data for service improvement</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Disclaimers & Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                PAFT is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>Merchantability and fitness for particular purpose</li>
                <li>Accuracy of financial calculations or AI recommendations</li>
                <li>Uninterrupted or error-free service availability</li>
                <li>Security against all possible threats or vulnerabilities</li>
              </ul>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Liability Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                PAFT's total liability shall not exceed the amount paid by you in the 12 months preceding the claim. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Third-party actions or system failures</li>
                <li>Acts of God, war, or terrorism</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of Nigeria. Any disputes shall be resolved through binding arbitration in Lagos, Nigeria, or through the competent courts of Nigeria.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Updates to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update these Terms at any time. Users will be notified of material changes via email or in-app notifications. Continued use of PAFT after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms or PAFT services, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@paft.ng</p>
                <p className="text-gray-700"><strong>Phone:</strong> +234 (0) 123 456 7890</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Financial District, Lagos, Nigeria</p>
              </div>
            </section>

            {/* Acceptance */}
            <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Acceptance of Terms</h3>
              <p className="text-blue-800">
                By using PAFT, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please discontinue use of our services immediately.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              © 2025 PAFT. All rights reserved. |{" "}
              <a href="/" className="text-blue-600 hover:text-blue-700">
                Back to Home
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
