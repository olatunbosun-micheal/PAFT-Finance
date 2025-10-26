import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIChat } from "@/components/AIChat";
import { Navigation } from "@/components/Navigation";
import { 
  DollarSign, TrendingDown, TrendingUp, Calculator, PiggyBank, 
  Receipt, FileText, Bot, Settings, BarChart3, Plus, Target,
  AlertTriangle, CheckCircle, Zap, Upload, BookOpen
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", income: 400000, expenses: 190000 },
  { month: "Feb", income: 420000, expenses: 200000 },
  { month: "Mar", income: 450000, expenses: 210000 },
  { month: "Apr", income: 450000, expenses: 210000 },
];

const stats = [
  { title: "Total Income", amount: "₦450,000", icon: DollarSign, color: "text-green-500" },
  { title: "Expenses", amount: "₦210,000", icon: TrendingDown, color: "text-red-500" },
  { title: "Estimated Tax", amount: "₦35,000", icon: Calculator, color: "text-blue-500" },
  { title: "Savings", amount: "₦80,000", icon: PiggyBank, color: "text-purple-500" },
];

const menuItems = [
  { title: "Overview", icon: BarChart3, path: "/dashboard" },
  { title: "Transactions", icon: Receipt, path: "/transactions" },
  { title: "Budget Forecasting", icon: Target, path: "/budget-forecast" },
  { title: "OCR Upload", icon: FileText, path: "/ocr-upload" },
  { title: "AI Tax Assistant", icon: Bot, path: "/dashboard" },
  { title: "Tax Forecasting", icon: Calculator, path: "/dashboard" },
  { title: "Learning Hub", icon: BookOpen, path: "/learning" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

const budgetData = [
  { category: "Food & Dining", spent: 45000, budget: 60000, color: "bg-blue-500" },
  { category: "Transportation", spent: 25000, budget: 30000, color: "bg-red-500" },
  { category: "Entertainment", spent: 15000, budget: 20000, color: "bg-purple-500" },
  { category: "Utilities", spent: 35000, budget: 40000, color: "bg-green-500" },
];

const recentTransactions = [
  { id: 1, description: "Grocery Shopping", amount: -8500, category: "Food", type: "Expense", date: "2025-01-25" },
  { id: 2, description: "Salary Deposit", amount: 150000, category: "Salary", type: "Income", date: "2025-01-25" },
  { id: 3, "description": "Uber Ride", amount: -2500, category: "Transportation", type: "Expense", date: "2025-01-24" },
  { id: 4, description: "Electricity Bill", amount: -12000, category: "Utilities", type: "Expense", date: "2025-01-24" },
  { id: 5, description: "Freelance Payment", amount: 120000, category: "Freelance", type: "Income", date: "2025-01-23" },
  { id: 6, description: "Consulting Fee", amount: 80000, category: "Consulting", type: "Income", date: "2025-01-22" },
  { id: 7, description: "Movie Tickets", amount: -3500, category: "Entertainment", type: "Expense", date: "2025-01-21" },
  { id: 8, description: "ATM Withdrawal", amount: -20000, category: "Cash", type: "Expense", date: "2025-01-20" },
];

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-border p-6 min-h-screen">
          <nav className="space-y-2">
            {menuItems.map((item, idx) => (
              <Link key={idx} to={item.path}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold mb-2">Hello, Micheal 👋</h1>
              <p className="text-muted-foreground">Here's your financial snapshot for today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <Card 
                  key={idx} 
                  className="p-6 animate-fade-in hover:shadow-lg transition-all"
                  style={{ 
                    animationDelay: `${idx * 100}ms`,
                    boxShadow: "var(--shadow-card)"
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.amount}</p>
                </Card>
              ))}
            </div>

            {/* Chart */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Monthly Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="hsl(var(--primary))" name="Income" />
                  <Bar dataKey="expenses" fill="hsl(var(--destructive))" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <Link to="/transactions">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Plus className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Add Transaction</h3>
                      <p className="text-xs text-muted-foreground">Record income/expense</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <Link to="/ocr-upload">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Upload className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Upload Receipt</h3>
                      <p className="text-xs text-muted-foreground">OCR processing</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <Link to="/budget-forecast">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Target className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Set Budget</h3>
                      <p className="text-xs text-muted-foreground">Monthly limits</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Bot className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AI Assistant</h3>
                    <p className="text-xs text-muted-foreground">Ask questions</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Budget Overview & Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Budget Progress */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Budget Overview
                </h2>
                <div className="space-y-4">
                  {budgetData.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.category}</span>
                        <span>₦{item.spent.toLocaleString()} / ₦{item.budget.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color}`} 
                          style={{ width: `${Math.min((item.spent / item.budget) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{Math.round((item.spent / item.budget) * 100)}% used</span>
                        <span>₦{(item.budget - item.spent).toLocaleString()} remaining</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/budget-forecast">
                  <Button variant="outline" className="w-full mt-4">
                    Manage Budget
                  </Button>
                </Link>
              </Card>

              {/* Recent Transactions */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Receipt className="mr-2 h-5 w-5" />
                  Recent Transactions
                </h2>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.type} • {transaction.date}</p>
                      </div>
                      <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}₦{Math.abs(transaction.amount).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <Link to="/transactions">
                  <Button variant="outline" className="w-full mt-4">
                    View All Transactions
                  </Button>
                </Link>
              </Card>
            </div>

            {/* AI Insights & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Insights */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-600" />
                  AI Insights
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Spending Trend</p>
                      <p className="text-xs text-muted-foreground">You're spending 12% less than last month. Great job!</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Savings Projection</p>
                      <p className="text-xs text-muted-foreground">Projected savings this month: ₦95,000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Budget Alert</p>
                      <p className="text-xs text-muted-foreground">Transportation budget 83% used. Consider reducing expenses.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Stats & Recommendations */}
              <Card className="p-6 bg-green-50 border-green-200">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-green-600" />
                  Tax & Savings Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly Savings Rate</span>
                    <span className="font-semibold text-green-600">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tax Bracket</span>
                    <span className="font-semibold">22.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Next Tax Payment</span>
                    <span className="font-semibold text-orange-600">Jan 31</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-xs text-green-800">
                      💡 <strong>Recommendation:</strong> Consider maxing out your pension contribution to reduce taxable income by ₦45,000 quarterly.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tax Compliance Score */}
            <Card className="p-6 bg-orange-50 border-orange-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-orange-600" />
                Tax Compliance Score
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Compliance Level</span>
                  <span className="text-2xl font-bold text-orange-600">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{ width: '78%' }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Timely Filing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Document Complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span>PAYE Review</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Tax Bracket</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                  <p className="text-xs text-orange-800">
                    🎯 <strong>Great Progress!</strong> Your compliance score improved by 12% this month due to early filing.
                  </p>
                </div>
              </div>
            </Card>

            {/* AI Tax Insight Generator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-purple-50 border-purple-200">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Bot className="mr-2 h-5 w-5 text-purple-600" />
                  AI Tax Assistant
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 italic">
                          "Based on your ₦450,000 income, you may qualify for a tax rebate on your pension contributions."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        Y
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 italic">
                          "What tax bracket am I in?"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ask PAFT anything about your taxes..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      Ask
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-indigo-50 border-indigo-200">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-indigo-600" />
                  Tax Forecasting
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <p className="text-xs text-gray-500">Next Quarter</p>
                      <p className="text-lg font-bold text-indigo-600">₦112,500</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <p className="text-xs text-gray-500">Year-End Total</p>
                      <p className="text-lg font-bold text-indigo-600">₦420,000</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Scenario Analysis</h4>
                    <p className="text-xs text-gray-600 mb-2">If income increases by ₦100,000:</p>
                    <div className="flex justify-between text-sm">
                      <span>Additional Tax:</span>
                      <span className="font-semibold text-red-600">₦25,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Net Savings:</span>
                      <span className="font-semibold text-green-600">₦75,000</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Detailed Forecast
                  </Button>
                </div>
              </Card>
            </div>

            {/* Learning Hub Integration */}
            <Card className="p-6 bg-teal-50 border-teal-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-teal-600" />
                Tax Learning Hub
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/learning" className="block">
                  <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calculator className="h-6 w-6 text-blue-600" />
                      <h4 className="font-medium">PAYE Guide</h4>
                    </div>
                    <p className="text-xs text-gray-600">Understanding your tax deductions</p>
                  </div>
                </Link>
                <Link to="/learning" className="block">
                  <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <Receipt className="h-6 w-6 text-green-600" />
                      <h4 className="font-medium">VAT Rules</h4>
                    </div>
                    <p className="text-xs text-gray-600">Value Added Tax explained</p>
                  </div>
                </Link>
                <Link to="/learning" className="block">
                  <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <Target className="h-6 w-6 text-purple-600" />
                      <h4 className="font-medium">Tax Planning</h4>
                    </div>
                    <p className="text-xs text-gray-600">Optimize your tax strategy</p>
                  </div>
                </Link>
              </div>
              <div className="mt-4 text-center">
                <Link to="/learning">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600">
                    Explore Full Learning Center →
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
