import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Bot, Calculator, Shield, TrendingUp, Eye, EyeOff, X } from "lucide-react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    if (!firstName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your first name",
        variant: "destructive"
      });
      return false;
    }

    if (!lastName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your last name",
        variant: "destructive"
      });
      return false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (password.length < 8) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive"
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return false;
    }

    if (!role) {
      toast({
        title: "Validation Error",
        description: "Please select your role",
        variant: "destructive"
      });
      return false;
    }

    if (!termsAccepted) {
      toast({
        title: "Validation Error",
        description: "Please accept the Terms & Conditions",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Form validation successful - show success message and redirect to signin
    toast({
      title: "Form Validated Successfully!",
      description: "All fields are properly filled and validated."
    });

    // Redirect to signin page after successful validation
    setTimeout(() => {
      navigate("/signin");
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create Your Account</h2>
              <p className="text-gray-600 text-center">Join PAFT and take control of your finances</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="mt-1 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="mt-1 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

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
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters long</p>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Re-enter your password</p>
              </div>

              <div>
                <Label htmlFor="role" className="text-gray-700 font-medium">Role</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="mt-1 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="banker">Banker</SelectItem>
                    <SelectItem value="tax-advisor">Tax Advisor</SelectItem>
                    <SelectItem value="accountant">Accountant</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="small-business-owner">Small Business Owner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                  className="border-gray-300"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-blue-600 hover:text-blue-700 underline focus:outline-none"
                  >
                    Terms & Conditions
                  </button>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-colors"
              >
                Validate & Continue to Login
              </Button>
            </form>

            <div className="text-center mt-4">
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
                ← Back to Home
              </Link>
            </div>

            <div className="text-center mt-6">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Terms and Conditions Modal */}
      <Dialog open={showTermsModal} onOpenChange={setShowTermsModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">Terms & Conditions</DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTermsModal(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using PAFT (Personal Assistant Financial Tax), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Use License</h3>
              <p className="text-gray-600 leading-relaxed">
                Permission is granted to temporarily use PAFT for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on PAFT</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Privacy Policy</h3>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Our privacy policy explains how we collect, use, and protect your personal information. By using PAFT, you agree to the collection and use of information in accordance with our privacy policy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4. User Accounts</h3>
              <p className="text-gray-600 leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">5. Financial Information</h3>
              <p className="text-gray-600 leading-relaxed">
                PAFT provides financial and tax calculation services for informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any financial information provided. Always consult with qualified financial and tax professionals for your specific situation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">6. Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed">
                In no event shall PAFT or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use PAFT, even if PAFT or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">7. Service Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to provide continuous service but do not guarantee that PAFT will be available at all times. We reserve the right to modify, suspend, or discontinue the service with or without notice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">8. Governing Law</h3>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">9. Changes to Terms</h3>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">10. Contact Information</h3>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at support@paft.ng.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Button
                onClick={() => setShowTermsModal(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                I Understand
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
