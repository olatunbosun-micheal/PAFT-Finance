import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import {
  BookOpen,
  Calculator,
  Building2,
  Receipt,
  Clock,
  RefreshCw,
  TrendingUp,
  Scale,
  Play,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  CalculatorIcon,
  DollarSign
} from "lucide-react";

const learningModules = [
  {
    id: "paye",
    icon: Calculator,
    title: "PAYE (Pay As You Earn)",
    shortSummary: "Understand how your employer deducts income tax before you receive your salary.",
    expandedContent: {
      description: "PAYE is a system where employers deduct tax from employees' monthly earnings and remit it to the State Internal Revenue Service. In Nigeria, tax rates are progressive — meaning higher earners pay a higher percentage. Deductions include Personal Income Tax, pension contributions, and health insurance where applicable.",
      example: "If you earn ₦300,000/month, a certain portion is withheld automatically before payment.",
      tools: "PAYE Calculator"
    }
  },
  {
    id: "rebates",
    icon: Scale,
    title: "Tax Rebates",
    shortSummary: "Learn how to reduce your taxable income legally.",
    expandedContent: {
      description: "Rebates are reductions or deductions allowed to encourage certain behavior (like donations, pension contributions, or educational investments). Under Nigerian law, rebates can apply to life insurance, mortgage interest, and charitable donations.",
      example: "A ₦100,000 donation to an approved NGO can reduce your taxable income by the same amount.",
      infographic: "Common Rebate Categories and Rates"
    }
  },
  {
    id: "cit",
    icon: Building2,
    title: "Company Income Tax (CIT)",
    shortSummary: "How Nigerian businesses are taxed based on their annual profit.",
    expandedContent: {
      description: "Small companies (₦25M or less): 0% CIT\nMedium companies (₦25M–₦100M): 20% CIT\nLarge companies (₦100M+): 30% CIT\nTax returns are filed with the Federal Inland Revenue Service (FIRS).",
      note: "Filing early prevents penalties and builds tax credit history."
    }
  },
  {
    id: "vat",
    icon: Receipt,
    title: "VAT (Value Added Tax)",
    shortSummary: "Learn how VAT works and when to remit it.",
    expandedContent: {
      description: "Nigeria's VAT rate is 7.5%, applied to most goods and services. Businesses collect VAT from customers and remit it monthly to FIRS.",
      example: "Selling a product for ₦10,000 → ₦750 VAT → total ₦10,750 charged.",
      exemptions: "Basic food items, medical services, and educational materials.",
      tools: "VAT Calculator"
    }
  },
  {
    id: "holidays",
    icon: Clock,
    title: "Tax Holidays",
    shortSummary: "Understand incentives for startups and priority industries.",
    expandedContent: {
      description: "Certain sectors (like agriculture, mining, or manufacturing) may qualify for 3–5 years of tax exemption. Administered under Nigeria's Pioneer Status Incentive (PSI).",
      benefit: "Helps early-stage businesses reinvest and grow.",
      example: "A startup granted tax holiday in 2025 won't pay CIT until 2028."
    }
  },
  {
    id: "refunds",
    icon: RefreshCw,
    title: "Tax Refunds",
    shortSummary: "How to reclaim excess tax payments.",
    expandedContent: {
      description: "If you overpay taxes, you can apply for a refund via FIRS or your State Revenue Service. Requirements: proof of payment, income records, and tax clearance certificates.",
      process: "Refunds are credited directly to your account after verification."
    }
  },
  {
    id: "budgeting",
    icon: TrendingUp,
    title: "Budgeting & Financial Planning",
    shortSummary: "Use PAFT tools to plan better and align taxes with savings goals.",
    expandedContent: {
      description: "Explain how taxes impact disposable income. Show how users can set budgets for tax, savings, and investments.",
      charts: "Income vs Expenses vs Tax Contributions",
      aiTip: "PAFT Assistant: Try forecasting your next quarter's savings after tax."
    }
  },
  {
    id: "reforms",
    icon: BookOpen,
    title: "Recent Tax Reforms (Finance Act 2023–2025)",
    shortSummary: "Stay informed about new laws and digital tax systems.",
    expandedContent: {
      description: "New Lagos State laws require certain e-commerce and digital service providers to remit VAT locally. Finance Act introduces reforms for startups, remote work, and gig workers.",
      resources: ["FIRS Official Website", "LIRS Official Website"]
    }
  }
];

const quizQuestions = [
  {
    question: "What is the current VAT rate in Nigeria?",
    options: ["5%", "7.5%", "10%", "12.5%"],
    correct: 1,
    explanation: "Nigeria's VAT rate is currently 7.5%, applied to most goods and services."
  },
  {
    question: "Who is responsible for remitting PAYE tax?",
    options: ["Employees", "Employers", "Government", "Banks"],
    correct: 1,
    explanation: "Employers deduct PAYE tax from employees' salaries and remit it to the tax authorities."
  },
  {
    question: "What is the benefit of a tax holiday?",
    options: ["Free money", "Tax exemption for businesses", "Extra vacation days", "Lower interest rates"],
    correct: 1,
    explanation: "Tax holidays provide temporary tax exemptions to help businesses grow and reinvest."
  },
  {
    question: "How does a rebate affect taxable income?",
    options: ["Increases it", "Decreases it", "Has no effect", "Doubles it"],
    correct: 1,
    explanation: "Rebates reduce your taxable income, effectively lowering the amount of tax you owe."
  },
  {
    question: "What is one recent tax reform in Nigeria?",
    options: ["VAT increased to 10%", "Digital tax for e-commerce", "PAYE abolished", "No changes made"],
    correct: 1,
    explanation: "Recent reforms include digital tax requirements for e-commerce and online service providers."
  }
];

export default function Learning() {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [showVideo, setShowVideo] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [payeIncome, setPayeIncome] = useState("");
  const [vatPrice, setVatPrice] = useState("");

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    quizAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correct) {
        score++;
      }
    });
    return score;
  };

  const calculatePAYE = (income: number) => {
    // Simplified PAYE calculation for demonstration
    if (income <= 300000) return income * 0.07;
    if (income <= 600000) return income * 0.11;
    if (income <= 1100000) return income * 0.15;
    if (income <= 1600000) return income * 0.19;
    if (income <= 3200000) return income * 0.21;
    return income * 0.24;
  };

  const calculateVAT = (price: number) => {
    return price * 0.075;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowVideo(false);
    }
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showVideo) {
        setShowVideo(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showVideo]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      {/* Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-blue-600">
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn About Nigeria's Tax System
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get smarter with your finances — understand PAYE, VAT, rebates, refunds, and new Nigerian tax laws.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowVideo(true)}
              size="lg"
              className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-100 font-semibold shadow-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            <Button
              onClick={() => document.getElementById('learning-modules')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-100 font-semibold shadow-lg"
            >
              Start Learning
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section id="learning-modules" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tax Education Modules</h2>
            <p className="text-lg text-gray-600">Click on any module to learn more</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningModules.map((module) => (
              <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <module.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleModule(module.id)}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {expandedModules.has(module.id) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>

                  <p className="text-gray-600 mb-4">{module.shortSummary}</p>

                  {expandedModules.has(module.id) && (
                    <div className="border-t pt-4 space-y-3 animate-fade-in">
                      <p className="text-gray-700">{module.expandedContent.description}</p>

                      {module.expandedContent.example && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Example:</strong> {module.expandedContent.example}
                          </p>
                        </div>
                      )}

                      {module.expandedContent.note && (
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm text-yellow-800">
                            <strong>Note:</strong> {module.expandedContent.note}
                          </p>
                        </div>
                      )}

                      {module.expandedContent.tools && (
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-green-800">
                            <CalculatorIcon className="inline h-4 w-4 mr-1" />
                            <strong>Tool:</strong> {module.expandedContent.tools}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Tax Tools</h2>
            <p className="text-lg text-gray-600">Try our calculators to understand your tax obligations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PAYE Calculator */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-blue-600" />
                PAYE Calculator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Income (₦)
                  </label>
                  <input
                    type="number"
                    value={payeIncome}
                    onChange={(e) => setPayeIncome(e.target.value)}
                    placeholder="300000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {payeIncome && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Estimated Monthly PAYE:</strong> ₦{calculatePAYE(parseFloat(payeIncome)).toLocaleString()}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      This is a simplified calculation. Consult a tax professional for accurate figures.
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* VAT Calculator */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                VAT Calculator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sale Price (₦)
                  </label>
                  <input
                    type="number"
                    value={vatPrice}
                    onChange={(e) => setVatPrice(e.target.value)}
                    placeholder="10000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                {vatPrice && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>VAT Amount (7.5%):</strong> ₦{calculateVAT(parseFloat(vatPrice)).toLocaleString()}
                    </p>
                    <p className="text-sm text-green-800 mt-1">
                      <strong>Total with VAT:</strong> ₦{(parseFloat(vatPrice) + calculateVAT(parseFloat(vatPrice))).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Test Your Knowledge</h2>
            <p className="text-lg text-gray-600">Take this quiz to see how well you understand Nigeria's tax system</p>
          </div>

          {!quizStarted ? (
            <div className="text-center">
              <Button
                onClick={() => setQuizStarted(true)}
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Start Quiz
              </Button>
            </div>
          ) : !showResults ? (
            <div className="space-y-8">
              {quizQuestions.map((question, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleQuizAnswer(index, optionIndex)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          quizAnswers[index] === optionIndex
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </Card>
              ))}

              <div className="text-center">
                <Button
                  onClick={() => setShowResults(true)}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  disabled={quizAnswers.length !== quizQuestions.length}
                >
                  Submit Quiz
                </Button>
              </div>
            </div>
          ) : (
            <Card className="p-8 text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">
                  {calculateScore() >= 4 ? "🎉" : calculateScore() >= 3 ? "👍" : "📚"}
                </div>
                <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                <p className="text-lg text-gray-600">
                  You scored {calculateScore()} out of {quizQuestions.length}
                </p>
              </div>

              <div className="text-left space-y-4 mb-6">
                {quizQuestions.map((question, index) => (
                  <div key={index} className="border-b pb-3">
                    <p className="font-medium">{question.question}</p>
                    <p className={`text-sm ${quizAnswers[index] === question.correct ? 'text-green-600' : 'text-red-600'}`}>
                      Your answer: {question.options[quizAnswers[index]]}
                    </p>
                    <p className="text-xs text-gray-500">{question.explanation}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => {
                  setQuizStarted(false);
                  setQuizAnswers([]);
                  setShowResults(false);
                }}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Take Quiz Again
              </Button>
            </Card>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={handleBackdropClick}>
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">PAFT Tax Education Demo</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">PAFT Demo Video</h3>
                <p className="text-gray-600 mb-4">Coming Soon!</p>
                <p className="text-sm text-gray-500">We're preparing an amazing demo video to show you how PAFT works.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
