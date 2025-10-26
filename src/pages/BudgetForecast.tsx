import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function BudgetForecast() {
  const [monthlyIncome, setMonthlyIncome] = useState("450000");
  const [monthlyExpenses, setMonthlyExpenses] = useState("210000");
  const [savingsGoal, setSavingsGoal] = useState("100000");
  const [forecast, setForecast] = useState<any>(null);

  const calculateForecast = () => {
    const income = parseFloat(monthlyIncome);
    const expenses = parseFloat(monthlyExpenses);
    const goal = parseFloat(savingsGoal);

    const monthlySavings = income - expenses;
    const monthsToGoal = Math.ceil(goal / monthlySavings);
    
    // Generate 6-month projection
    const projectionData = [];
    let currentSavings = 80000; // Starting balance

    for (let i = 1; i <= 6; i++) {
      currentSavings += monthlySavings;
      projectionData.push({
        month: `Month ${i}`,
        savings: currentSavings,
        income: income,
        expenses: expenses
      });
    }

    setForecast({
      monthlySavings,
      monthsToGoal,
      savingsRate: ((monthlySavings / income) * 100).toFixed(1),
      projectionData
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      <main className="pt-24 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Budget Forecasting</h1>
            <p className="text-muted-foreground">Plan your financial future with AI-powered predictions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Your Financial Data</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="income">Monthly Income (₦)</Label>
                  <Input
                    id="income"
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    placeholder="450000"
                  />
                </div>
                <div>
                  <Label htmlFor="expenses">Monthly Expenses (₦)</Label>
                  <Input
                    id="expenses"
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(e.target.value)}
                    placeholder="210000"
                  />
                </div>
                <div>
                  <Label htmlFor="goal">Savings Goal (₦)</Label>
                  <Input
                    id="goal"
                    type="number"
                    value={savingsGoal}
                    onChange={(e) => setSavingsGoal(e.target.value)}
                    placeholder="100000"
                  />
                </div>
                <Button onClick={calculateForecast} className="w-full" size="lg">
                  Generate Forecast
                </Button>
              </div>
            </Card>

            {/* Results */}
            {forecast && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-sm text-muted-foreground">Monthly Savings</p>
                    <p className="text-2xl font-bold">₦{forecast.monthlySavings.toLocaleString()}</p>
                  </Card>
                  <Card className="p-4">
                    <Target className="h-8 w-8 text-blue-500 mb-2" />
                    <p className="text-sm text-muted-foreground">Months to Goal</p>
                    <p className="text-2xl font-bold">{forecast.monthsToGoal} months</p>
                  </Card>
                  <Card className="p-4">
                    <TrendingUp className="h-8 w-8 text-purple-500 mb-2" />
                    <p className="text-sm text-muted-foreground">Savings Rate</p>
                    <p className="text-2xl font-bold">{forecast.savingsRate}%</p>
                  </Card>
                  <Card className="p-4">
                    <TrendingDown className="h-8 w-8 text-orange-500 mb-2" />
                    <p className="text-sm text-muted-foreground">6-Month Projection</p>
                    <p className="text-2xl font-bold">₦{forecast.projectionData[5].savings.toLocaleString()}</p>
                  </Card>
                </div>
              </div>
            )}
          </div>

          {/* Chart */}
          {forecast && (
            <Card className="p-6 mt-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">6-Month Projection</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={forecast.projectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="savings" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Projected Savings"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">💡 AI Insights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• You're saving {forecast.savingsRate}% of your income - that's {forecast.savingsRate > 30 ? "excellent" : "good"}!</li>
                  <li>• At this rate, you'll reach your goal in {forecast.monthsToGoal} months</li>
                  <li>• Consider reducing transport costs by 10% to save an extra ₦{(parseFloat(monthlyExpenses) * 0.05).toLocaleString()} monthly</li>
                  <li>• Your projected savings in 6 months: ₦{forecast.projectionData[5].savings.toLocaleString()}</li>
                </ul>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
