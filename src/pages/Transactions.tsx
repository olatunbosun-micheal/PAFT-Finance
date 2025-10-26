import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: string;
  type: "Income" | "Expense";
}

const initialTransactions: Transaction[] = [
  { id: 1, date: "05 Oct 2025", description: "Freelance Payment", category: "Income", amount: "₦120,000", type: "Income" },
  { id: 2, date: "06 Oct 2025", description: "Transport", category: "Expense", amount: "₦4,000", type: "Expense" },
  { id: 3, date: "07 Oct 2025", description: "Groceries", category: "Expense", amount: "₦12,000", type: "Expense" },
  { id: 4, date: "08 Oct 2025", description: "Consulting Fee", category: "Income", amount: "₦80,000", type: "Income" },
];

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      amount: `₦${formData.get('amount')}`,
      type: formData.get('type') as "Income" | "Expense"
    };

    setTransactions([newTransaction, ...transactions]);
    setIsOpen(false);
    toast({
      title: "Transaction added",
      description: "Your transaction has been recorded successfully."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      <main className="pt-24 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2">Track Your Transactions</h1>
              <p className="text-muted-foreground">Add new transactions or view your AI-categorized history.</p>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Transaction
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Transaction</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAdd} className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" name="description" placeholder="e.g., Grocery shopping" required />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" name="category" placeholder="e.g., Food" required />
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" name="amount" type="number" placeholder="0" required />
                  </div>
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select name="type" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Income">Income</SelectItem>
                        <SelectItem value="Expense">Expense</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">Save Transaction</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {transactions.map((transaction, idx) => (
                    <tr 
                      key={transaction.id} 
                      className="hover:bg-secondary/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <td className="px-6 py-4 text-sm">{transaction.date}</td>
                      <td className="px-6 py-4 text-sm">{transaction.description}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                          {transaction.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold">{transaction.amount}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded text-xs ${
                          transaction.type === "Income" 
                            ? "bg-green-500/10 text-green-500" 
                            : "bg-red-500/10 text-red-500"
                        }`}>
                          {transaction.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            💡 AI automatically categorizes your transactions
          </p>
        </div>
      </main>
    </div>
  );
}
