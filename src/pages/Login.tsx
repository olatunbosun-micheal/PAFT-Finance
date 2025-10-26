import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Bot, Calculator, Shield, TrendingUp } from "lucide-react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const validateLoginForm = () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (!password.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your password",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateLoginForm()) return;

    // Form validation successful - show success message and redirect to dashboard
    toast({
      title: "Login Validated Successfully!",
      description: "Form validation completed. Redirecting to dashboard..."
    });

    // Redirect to dashboard after successful validation
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500); // Small delay to show the success message
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background - Full Screen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover lg:object-contain"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-in fade-in-50 duration-500">
          <div className="p-8">
            {/* Logo and Header */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/PAFT LOGO.png" alt="PAFT" className="h-10 w-10" />
                <span className="text-2xl font-bold text-primary">
                  PAFT
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-600 text-center">Sign in to your PAFT account</p>
            </div>

            <form onSubmit={handleSignin} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                    className="border-gray-300"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-colors"
              >
                Validate & Enter Dashboard
              </Button>
            </form>

            <div className="text-center mt-4">
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
                ← Back to Home
              </Link>
            </div>

            <div className="text-center mt-6">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up here
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
