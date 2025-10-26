import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { X, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Since we removed authentication, logout just redirects to home page
    navigate("/");
  };

  // Check if we're on the dashboard page
  const isOnDashboard = location.pathname === "/dashboard";

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/PAFT LOGO.png" alt="PAFT" className="h-10 w-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={scrollToTop}>
            About
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={scrollToTop}>
            Features
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={scrollToTop}>
            Pricing
          </Link>
          <Link to="/learning" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={scrollToTop}>
            Learning
          </Link>
          <Link to="/faqs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={scrollToTop}>
            FAQs
          </Link>
          <Link to="/support" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={scrollToTop}>
            Support
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-8 h-8 bg-blue-600 rounded-md flex flex-col justify-center items-center transition-all duration-300 ease-in-out hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Toggle menu"
        >
          {/* Hamburger Lines */}
          <span className="bg-white block w-5 h-0.5 rounded-sm mb-1 transition-all duration-300"></span>
          <span className="bg-white block w-5 h-0.5 rounded-sm mb-1 transition-all duration-300"></span>
          <span className="bg-white block w-5 h-0.5 rounded-sm transition-all duration-300"></span>
        </button>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {isOnDashboard ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2 hover:bg-red-50 hover:border-red-300"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          ) : (
            <Link to="/signin">
              <Button variant="outline">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Overlay - covers entire viewport */}
        <div
          className="absolute inset-0 bg-black/80"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in Menu */}
        <div className={`absolute top-0 right-0 h-full w-[75%] bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 bg-slate-800">
              <div className="flex items-center gap-3">
                <img src="/assets/PAFT LOGO.png" alt="PAFT" className="h-8 w-8" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-blue-400 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 bg-slate-900">
              <div className="space-y-6">
                <Link
                  to="/"
                  className="block text-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-3 border-b border-white/10 hover:translate-x-2 hover:border-blue-400/50 hover:bg-slate-800/50 px-4 rounded-md"
                  onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-3 border-b border-white/10 hover:translate-x-2 hover:border-blue-400/50 hover:bg-slate-800/50 px-4 rounded-md"
                  onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className="block text-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-3 border-b border-white/10 hover:translate-x-2 hover:border-blue-400/50 hover:bg-slate-800/50 px-4 rounded-md"
                  onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className="block text-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-3 border-b border-white/10 hover:translate-x-2 hover:border-blue-400/50 hover:bg-slate-800/50 px-4 rounded-md"
                  onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}
                >
                  Pricing
                </Link>
                <Link
                  to="/learning"
                  className="block text-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-3 border-b border-white/10 hover:translate-x-2 hover:border-blue-400/50 hover:bg-slate-800/50 px-4 rounded-md"
                  onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}
                >
                  Learning
                </Link>
                <Link
                  to="/faqs"
                  className="block text-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-3 border-b border-white/10 hover:translate-x-2 hover:border-blue-400/50 hover:bg-slate-800/50 px-4 rounded-md"
                  onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}
                >
                  FAQs
                </Link>
                <Link
                  to="/support"
                  className="block text-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-3 border-b border-white/10 hover:translate-x-2 hover:border-blue-400/50 hover:bg-slate-800/50 px-4 rounded-md"
                  onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}
                >
                  Support
                </Link>
              </div>
            </nav>

            {/* Footer CTA */}
            <div className="p-6 border-t border-white/20 bg-slate-800">
              {isOnDashboard ? (
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <Link to="/signin" onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};
