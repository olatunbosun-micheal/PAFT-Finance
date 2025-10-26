import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";

const faqs = [
  {
    question: "Is PAFT secure?",
    answer: "Yes, we use 256-bit encryption and never share your financial data with third parties. Your data is protected by bank-grade security measures."
  },
  {
    question: "Can I upload receipts from my phone?",
    answer: "Yes, PAFT's OCR feature works seamlessly across all devices. You can upload receipts and payslips directly from your phone's camera or gallery."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! You can start with our free plan that includes up to 50 transactions per month, basic categorization, and simple reports."
  },
  {
    question: "What does the AI Assistant actually do?",
    answer: "Our AI assistant analyzes your financial data, provides spending insights, forecasts future expenses, suggests tax optimization strategies, and answers your financial questions in natural language."
  },
  {
    question: "Can I export my data?",
    answer: "Yes, Pro and Business plan users can export their financial data in PDF, CSV, or Excel formats for tax preparation or personal records."
  },
  {
    question: "How accurate is the tax calculation?",
    answer: "PAFT uses current Nigerian tax laws and regulations. However, we recommend consulting with a tax professional for complex situations, as tax rules can change."
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee on all paid plans. No questions asked."
  }
];

export default function FAQs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about PAFT and how it can help with your financial management.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 font-semibold">
                Contact Support
              </Button>
            </Link>
            <Link to="/learning">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-semibold">
                Visit Learning Center
              </Button>
            </Link>
          </div>
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
}
