import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import { Wallet, Calculator, Camera, Bot, TrendingUp, Shield, Plus } from "lucide-react";
import financialBg from "@/assets/financial-bg.png";

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

const testimonials = [
  {
    text: "PAFT made my tax season stress-free. It feels like having a personal accountant!",
    author: "Ada, Small Business Owner"
  },
  {
    text: "The AI assistant actually helped me save ₦20,000 in one month!",
    author: "Tunde, Freelancer"
  },
  {
    text: "As a student, PAFT helps me budget my allowance and track my expenses. The insights are incredible!",
    author: "Chika, University Student"
  },
  {
    text: "PAFT's OCR feature is a game-changer for my accounting practice. Receipt scanning saves hours of work!",
    author: "Emeka, Accountant"
  },
  {
    text: "The forecasting feature helped me plan my investments better. PAFT's AI predictions are remarkably accurate.",
    author: "Ngozi, Investor"
  }
];

export default function Landing() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const handleWatchDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      // Start playing video after a short delay to allow scrolling
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsVideoPlaying(true);
        }
      }, 1000);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-blue-600">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Smarter Financial Decisions, Powered by AI.
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                PAFT helps you manage expenses, track income, analyze tax data, and forecast your financial future — all in one dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signin">
                  <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-100 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                    Try PAFT Free
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-100 border-2 border-white font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={handleWatchDemo}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="space-y-6">
                  {/* Mock Dashboard Preview */}
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">Income Overview</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-100">Salary</span>
                        <span className="text-white font-semibold">₦150,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-100">Freelance</span>
                        <span className="text-white font-semibold">₦120,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat Interface Mock */}
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">PAFT AI Assistant</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/30 rounded p-2 text-sm text-white">
                        "How much tax will I pay this year?"
                      </div>
                      <div className="bg-blue-600 rounded p-2 text-sm text-white ml-4">
                        "Based on ₦2.7M income, expect ₦337,500 tax"
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions Mock */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Plus className="w-6 h-6 text-white mx-auto mb-1" />
                      <div className="text-xs text-white">Add Transaction</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Calculator className="w-6 h-6 text-white mx-auto mb-1" />
                      <div className="text-xs text-white">Tax Calculator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Banner */}
      <div className="bg-accent border-y border-border py-3 px-6">
        <p className="text-center text-sm text-accent-foreground">
          ⚠️ <strong>Demo Version:</strong> This is a prototype of PAFT. Some features are simulated for presentation purposes.
        </p>
      </div>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">What is PAFT?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            PAFT (Personal Application for Finances and Taxation) is your intelligent financial companion designed specifically for Nigerian users. 
            We combine cutting-edge AI technology with local financial expertise to make managing your money simple, 
            automated, and stress-free. Whether you're a freelancer, small business owner, or just want to take control 
            of your finances, PAFT adapts to your needs and helps you make smarter financial decisions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">AI-Powered</div>
              <p className="text-sm text-muted-foreground">Smart categorization and insights powered by advanced AI</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Naira-Focused</div>
              <p className="text-sm text-muted-foreground">Built for Nigerian users with local tax rules and currency</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Secure</div>
              <p className="text-sm text-muted-foreground">Bank-level encryption keeps your financial data safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How PAFT Works</h2>
            <p className="text-lg text-gray-600">Get started in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up</h3>
              <p className="text-gray-600">Create your account and verify with email OTP for secure access.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload Data</h3>
              <p className="text-gray-600">Upload receipts, enter transactions, and connect your financial data.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyze & Forecast</h3>
              <p className="text-gray-600">Get automatic summaries, tax calculations, and AI-powered projections.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chat with AI</h3>
              <p className="text-gray-600">Ask financial questions and get personalized advice instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50"
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  boxShadow: "var(--shadow-card)"
                }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="demo" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Watch Our Demo & See PAFT in Action</h2>
            <p className="text-lg text-gray-600">Experience our comprehensive demo video and explore the intuitive dashboard that makes financial management effortless</p>
          </div>

          {/* Video Player */}
          <div className="mb-12">
            <div className="relative max-w-4xl mx-auto">
              <video
                ref={videoRef}
                className="w-full rounded-2xl shadow-2xl"
                controls
                poster="/assets/PAFT LOGO.png"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              >
                <source src="/videos/PAFT DEMO VIDEO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl cursor-pointer"
                onClick={() => {
                  if (videoRef.current) {
                    if (isVideoPlaying) {
                      videoRef.current.pause();
                    } else {
                      videoRef.current.play();
                    }
                  }
                }}
              >
                {!isVideoPlaying && (
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white/80 transition-all">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {isVideoPlaying && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white/30 transition-all">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Click play to watch our comprehensive demo video
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Interactive Dashboard Preview</h3>
              <p className="text-gray-300">Explore our intuitive interface and key features</p>
            </div>

            {/* Mock Browser Window */}
            <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
              <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 text-center text-gray-300 text-sm">PAFT - Personal Application for Finances and Taxation</div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gray-900 p-6">
                <div className="grid grid-cols-12 gap-6">
                  {/* Sidebar */}
                  <div className="col-span-3 bg-gray-800 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium">Overview</div>
                      <div className="text-gray-400 px-3 py-2 rounded text-sm">Transactions</div>
                      <div className="text-gray-400 px-3 py-2 rounded text-sm">Budget Forecasting</div>
                      <div className="text-gray-400 px-3 py-2 rounded text-sm">OCR Upload</div>
                      <div className="text-gray-400 px-3 py-2 rounded text-sm">Settings</div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="col-span-9 space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-green-400 text-sm mb-1">Total Income</div>
                        <div className="text-white text-2xl font-bold">₦270,000</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-red-400 text-sm mb-1">Expenses</div>
                        <div className="text-white text-2xl font-bold">₦85,000</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-blue-400 text-sm mb-1">Tax Estimate</div>
                        <div className="text-white text-2xl font-bold">₦33,750</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-purple-400 text-sm mb-1">Savings</div>
                        <div className="text-white text-2xl font-bold">₦151,250</div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-white text-sm mb-4">Monthly Overview</div>
                      <div className="h-32 bg-gray-700 rounded flex items-end justify-between px-4">
                        <div className="bg-green-500 w-8 rounded-t" style={{height: '80%'}}></div>
                        <div className="bg-red-500 w-8 rounded-t" style={{height: '40%'}}></div>
                        <div className="bg-green-500 w-8 rounded-t" style={{height: '90%'}}></div>
                        <div className="bg-red-500 w-8 rounded-t" style={{height: '35%'}}></div>
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-white text-sm mb-4">Recent Transactions</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Salary Deposit</span>
                          <span className="text-green-400">+₦150,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Grocery Shopping</span>
                          <span className="text-red-400">-₦8,500</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Uber Ride</span>
                          <span className="text-red-400">-₦2,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Callouts */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                  Real-time Analytics
                </div>
                <p className="text-gray-600 text-sm">Track your financial health with live updates</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                  Smart Tax Breakdown
                </div>
                <p className="text-gray-600 text-sm">AI-powered tax calculations and deductions</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                  AI Chat Insights
                </div>
                <p className="text-gray-600 text-sm">Get personalized financial advice instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">Join thousands of satisfied users managing their finances smarter</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </blockquote>

                <cite className="text-gray-900 font-semibold">
                  — {testimonial.author}
                </cite>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Plans for Every User</h2>
            <p className="text-lg text-gray-600">Choose the perfect plan for your financial journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₦0</div>
                <ul className="text-gray-600 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Track up to 50 transactions/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic expense categorization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Simple reports
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Mobile responsive
                  </li>
                </ul>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">
                  Get Started Free
                </Button>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-2 border-blue-500 bg-blue-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₦2,000<span className="text-lg text-gray-500">/month</span></div>
                <ul className="text-gray-600 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited transactions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    OCR receipt scanning
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    AI assistant chat
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced tax calculations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Budget forecasting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Pro Trial
                </Button>
              </div>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₦7,500<span className="text-lg text-gray-500">/month</span></div>
                <ul className="text-gray-600 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multi-user accounts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced reporting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    API access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
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

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to take control of your finances?</h2>
          <Link to="/signin">
            <Button size="lg" className="text-lg px-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
              Try PAFT Free →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/PAFT LOGO.png" alt="PAFT" className="h-8 w-8" />
                <span className="text-2xl font-bold text-white">PAFT</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your AI-powered financial application for smarter money and tax decisions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/learning" className="hover:text-white transition-colors">Learning</Link></li>
                <li><Link to="#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="#help" className="hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2 text-sm">
                <p>📧 support@paft.ng</p>
                <p>📱 +234 (0) 123 456 7890</p>
                <p>🏢 Lagos, Nigeria</p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 0 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 0 .078.01c.12-.098.246-.198.373-.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.210 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.210 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 PAFT – Personal Application for Finances and Taxation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
