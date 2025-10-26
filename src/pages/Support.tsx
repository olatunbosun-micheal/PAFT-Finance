import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import {
  MessageSquare,
  Mail,
  HelpCircle,
  Phone,
  Clock,
  CheckCircle
} from "lucide-react";

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our AI support assistant for instant help",
    action: "Start Chat",
    available: "24/7"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message for comprehensive assistance",
    action: "support@paft.ng",
    available: "Within 24 hours"
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Browse our knowledge base and learning resources",
    action: "View Learning Center",
    available: "Self-service"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    action: "+234 123 456 7890",
    actionType: "phone",
    available: "Mon-Fri, 9AM-5PM WAT"
  }
];

const commonIssues = [
  {
    title: "Getting Started",
    items: [
      "How to create an account",
      "Setting up your first transaction",
      "Connecting your bank accounts",
      "Understanding the dashboard"
    ]
  },
  {
    title: "Features & Tools",
    items: [
      "Using OCR receipt scanning",
      "Tax calculation help",
      "Budget planning tools",
      "AI assistant queries"
    ]
  },
  {
    title: "Account & Billing",
    items: [
      "Subscription management",
      "Payment methods",
      "Refunds and cancellations",
      "Plan upgrades/downgrades"
    ]
  }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get the support you need to make the most of PAFT. We're here to help you succeed with your financial goals.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Support Channel</h2>
            <p className="text-lg text-gray-600">Multiple ways to get the help you need</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportOptions.map((option, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <option.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {option.available}
                  </div>
                  {option.actionType === "phone" ? (
                    <Button variant="outline" className="w-full">
                      {option.action}
                    </Button>
                  ) : option.action.includes("@") ? (
                    <Button variant="outline" className="w-full">
                      {option.action}
                    </Button>
                  ) : option.action === "Start Chat" ? (
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      {option.action}
                    </Button>
                  ) : (
                    <Link to="/learning">
                      <Button variant="outline" className="w-full">
                        {option.action}
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Issues & Solutions</h2>
            <p className="text-lg text-gray-600">Quick answers to frequently encountered problems</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commonIssues.map((category, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@paft.ng</p>
            </div>
            <div>
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+234 (0) 123 456 7890</p>
            </div>
            <div>
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
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
