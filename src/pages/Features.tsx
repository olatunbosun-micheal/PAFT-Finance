import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import {
  Wallet,
  Calculator,
  Camera,
  Bot,
  TrendingUp,
  Shield,
  CheckCircle,
  MessageSquare,
  Mail,
  HelpCircle,
  Phone,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking & Smart Categorization",
    description: "Track every naira you spend — automatically sorted by AI."
  },
  {
    icon: Calculator,
    title: "Automated Tax Calculations",
    description: "Know your estimated tax in seconds, with smart deductions."
  },
  {
    icon: Camera,
    title: "OCR Receipt Upload",
    description: "Snap and upload your receipts. PAFT reads and records instantly."
  },
  {
    icon: Bot,
    title: "AI Chat Assistant",
    description: "Chat naturally with your AI finance advisor for quick insights."
  },
  {
    icon: TrendingUp,
    title: "Budget Forecasting",
    description: "See trends and predict your future savings."
  },
  {
    icon: Shield,
    title: "Secure Cloud Storage",
    description: "Your financial data stays encrypted and private."
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Powerful Features for Smart Finance Management
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover all the tools and features that make PAFT the perfect companion for your financial journey.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-lg text-muted-foreground">Comprehensive tools designed for Nigerian users</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-xl transition-all duration-300 border-border/50"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  boxShadow: "var(--shadow-card)"
                }}
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust PAFT for their financial management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" className="text-blue-600 text-lg px-12 h-11 bg-white hover:bg-blue-600 hover:text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            2025 PAFT – Personal Application for Finances and Taxation. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
