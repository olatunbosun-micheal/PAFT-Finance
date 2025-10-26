import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Simple Plans for Every User
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your financial journey. Start free and upgrade as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6 -mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₦0</div>
                <p className="text-gray-600 mb-8">Perfect for getting started</p>
                <ul className="text-gray-600 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Track up to 50 transactions/month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Basic expense categorization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Simple reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Mobile responsive
                  </li>
                </ul>
                <Link to="/signup" className="w-full">
                  <Button className="w-full bg-gray-600 hover:bg-gray-700">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-2 border-blue-500 bg-blue-50 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  ₦2,000<span className="text-lg text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mb-8">For serious financial management</p>
                <ul className="text-gray-600 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Unlimited transactions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    OCR receipt scanning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    AI assistant chat
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Advanced tax calculations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Budget forecasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Priority support
                  </li>
                </ul>
                <Link to="/signup" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Pro Trial
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  ₦7,500<span className="text-lg text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mb-8">For teams and businesses</p>
                <ul className="text-gray-600 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Multi-user accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Advanced reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    API access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                    Dedicated support
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I switch plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees! All plans include a 14-day free trial to test all features.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee on all paid plans. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to take control of your finances?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust PAFT for their financial management needs.
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-12 bg-blue-600 hover:bg-blue-700">
              Start Your Free Trial →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 PAFT – Personal Application for Finances and Taxation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
