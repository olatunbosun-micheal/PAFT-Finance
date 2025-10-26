import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import { Card } from "@/components/ui/card";
import { Target, Users, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide financial clarity and confidence to everyone, everywhere."
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Making finance management simple and accessible for all income levels."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Building confidence through transparent and responsible AI."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge AI to solve real financial challenges."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      <main className="pt-24 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Mission: Financial Clarity for Everyone</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              PAFT was created to help people take control of their money — simply, intelligently, and with trust.
              We believe finance management should be accessible to all, powered by transparent and responsible AI.
              Our goal: to build confidence, not complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, idx) => (
              <Card 
                key={idx} 
                className="p-8 animate-fade-in hover:shadow-lg transition-all"
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  boxShadow: "var(--shadow-card)"
                }}
              >
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-secondary/50">
            <h2 className="text-2xl font-bold mb-4">Future Roadmap</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>💡 Real AI model integration (GPT-based financial advisor)</li>
              <li>🧮 Smart tax engine with regional compliance</li>
              <li>🌍 Multilingual support (English, French, Yoruba)</li>
              <li>💳 Payment gateway integration for premium features</li>
              <li>🏦 Integration with Nigerian fintech APIs (Moniepoint, Paystack)</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
