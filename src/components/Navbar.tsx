
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Brain, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModal from './modals/AuthModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (tab: 'signin' | 'signup') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl group-hover:scale-105 transition-transform duration-200">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-heading">
                AI Hive
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/browse" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Browse Services
              </Link>
              <Link to="/providers" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Find Talent
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                How It Works
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Pricing
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search AI services..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
                onClick={() => handleAuthClick('signin')}
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => handleAuthClick('signup')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search AI services..."
                    className="pl-10 bg-gray-50 border-gray-200"
                  />
                </div>
                <Link to="/browse" className="text-gray-700 hover:text-purple-600 font-medium py-2">
                  Browse Services
                </Link>
                <Link to="/providers" className="text-gray-700 hover:text-purple-600 font-medium py-2">
                  Find Talent
                </Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-purple-600 font-medium py-2">
                  How It Works
                </Link>
                <Link to="/pricing" className="text-gray-700 hover:text-purple-600 font-medium py-2">
                  Pricing
                </Link>
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-200 text-purple-600"
                    onClick={() => handleAuthClick('signin')}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
                    onClick={() => handleAuthClick('signup')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
    </>
  );
};

export default Navbar;
