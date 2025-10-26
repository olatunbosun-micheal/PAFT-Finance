import { Navigation } from "@/components/Navigation";
import { AIChat } from "@/components/AIChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Download, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated."
    });
  };

  const handleExport = (format: string) => {
    toast({
      title: `Exporting as ${format}`,
      description: "Your data export will begin shortly."
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logging out...",
      description: "You are being logged out and redirected to the home page."
    });

    // Small delay to show the toast before navigation
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIChat />

      <main className="pt-24 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your profile and preferences</p>
          </div>

          <div className="space-y-6">
            {/* Profile */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Profile</h2>
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Micheal Johnson" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="micheal@example.com" />
                </div>
                <Button type="submit">Save Changes</Button>
              </form>
            </Card>

            {/* Password */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Password</h2>
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                  <Input id="confirm-new-password" type="password" />
                </div>
                <Button type="submit">Update Password</Button>
              </form>
            </Card>

            {/* Data Export */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Data Export</h2>
              <p className="text-muted-foreground mb-4">Download your financial data</p>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => handleExport("CSV")}>
                  <Download className="mr-2 h-4 w-4" />
                  Export as CSV
                </Button>
                <Button variant="outline" onClick={() => handleExport("PDF")}>
                  <Download className="mr-2 h-4 w-4" />
                  Export as PDF
                </Button>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">In-App Notifications</p>
                    <p className="text-sm text-muted-foreground">Get notifications in the app</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>

            {/* Theme */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Appearance</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Toggle dark theme</p>
                </div>
                <Switch />
              </div>
            </Card>

            {/* Logout */}
            <Card className="p-6 border-red-200 bg-red-50/50">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-red-900 mb-2">Account Actions</h2>
                  <p className="text-sm text-red-700">
                    Clicking logout will end your current session and return you to the home page.
                  </p>
                </div>
                <Button
                  variant="destructive"
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout from PAFT
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
