
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, UserCheck, Handshake, Award, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Discover AI Services",
      description: "Browse through thousands of AI services or post your project requirements. Our AI-powered matching system helps you find the perfect fit.",
      details: ["Smart search filters", "Category browsing", "AI-powered recommendations", "Detailed service descriptions"]
    },
    {
      step: 2,
      icon: UserCheck,
      title: "Choose Your Expert",
      description: "Review profiles, portfolios, and ratings to select the ideal AI service provider for your project needs and budget.",
      details: ["Verified expert profiles", "Portfolio reviews", "Client testimonials", "Skill assessments"]
    },
    {
      step: 3,
      icon: Handshake,
      title: "Collaborate & Create",
      description: "Work together using our integrated project management tools. Track progress, communicate, and ensure quality delivery.",
      details: ["Built-in messaging", "Milestone tracking", "File sharing", "Progress monitoring"]
    },
    {
      step: 4,
      icon: Award,
      title: "Deliver & Success",
      description: "Receive your completed AI solution with full documentation. Rate your experience and build long-term partnerships.",
      details: ["Quality assurance", "Final delivery", "Documentation", "Ongoing support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple Steps to 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}AI Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to delivery, our streamlined process ensures you get the best AI solutions 
            with minimal hassle and maximum results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.step} className="relative">
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-purple-200 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging AI to transform their operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-purple-100">AI Experts</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-purple-100">Projects Completed</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
