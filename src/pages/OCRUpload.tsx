import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function OCRUpload() {
  const [uploaded, setUploaded] = useState(false);
  const { toast } = useToast();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTimeout(() => {
        setUploaded(true);
        toast({
          title: "Receipt uploaded",
          description: "AI is extracting data..."
        });
      }, 500);
    }
  };

  const handleSave = () => {
    toast({
      title: "Transaction saved",
      description: "Receipt data has been added to your transactions."
    });
    setUploaded(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      <main className="pt-24 px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Upload Receipt or Invoice</h1>
            <p className="text-muted-foreground">PAFT reads your receipts automatically to track spending.</p>
          </div>

          {!uploaded ? (
            <Card className="p-12 text-center border-dashed border-2 hover:border-primary transition-colors">
              <Upload className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <div className="space-y-4">
                  <p className="text-xl font-semibold">Drop your receipt here or click to upload</p>
                  <p className="text-sm text-muted-foreground">Supports JPG, PNG, PDF</p>
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*,application/pdf"
                    onChange={handleUpload}
                  />
                  <Button size="lg">Choose File</Button>
                </div>
              </Label>
            </Card>
          ) : (
            <Card className="p-8 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <FileCheck className="h-12 w-12 text-green-500" />
                <div>
                  <h2 className="text-2xl font-bold">Receipt Processed</h2>
                  <p className="text-sm text-muted-foreground">OCR extraction simulated for demo</p>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vendor:</span>
                  <span className="font-semibold">Shoprite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-semibold">03 Oct 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-semibold text-xl">₦12,300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-sm">Groceries</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleSave} className="flex-1">
                  Confirm & Save
                </Button>
                <Button variant="outline" className="flex-1">
                  Edit Details
                </Button>
              </div>
            </Card>
          )}

          <p className="text-center text-xs text-muted-foreground mt-6">
            ⚠️ OCR extraction simulated for demo purposes
          </p>
        </div>
      </main>
    </div>
  );
}
