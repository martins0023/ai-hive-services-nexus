
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Star, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-blue-900/5 to-transparent"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-8 group hover:scale-105 transition-transform duration-200">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              Powered by AI Innovation
            </span>
            <Badge variant="secondary" className="bg-purple-200 text-purple-700 text-xs">
              New
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Services
            </span>
            <br />
            <span className="text-gray-900">
              Marketplace
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Connect with expert AI service providers or offer your AI expertise. 
            From machine learning models to intelligent automation, 
            <span className="text-purple-600 font-semibold"> unlock the power of AI </span>
            for your business.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative flex items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-2">
                <Search className="h-6 w-6 text-gray-400 ml-4" />
                <Input
                  type="text"
                  placeholder="Search for AI services... (e.g., 'machine learning', 'chatbot development')"
                  className="flex-1 border-0 text-lg placeholder:text-gray-400 focus-visible:ring-0 px-4"
                />
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl px-8">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 rounded-xl group">
              Find AI Services
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 rounded-xl group">
              <Zap className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Become a Provider
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="font-semibold text-gray-900">10,000+</span>
              <span>AI Experts</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-900">4.9/5</span>
              <span>Average Rating</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-900">50,000+</span>
              <span>Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
