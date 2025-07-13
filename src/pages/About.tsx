
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize AI technology by connecting brilliant minds with businesses that need intelligent solutions."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of AI experts, engineers, and business professionals dedicated to advancing artificial intelligence."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Innovation, transparency, and excellence drive everything we do in the AI marketplace."
    },
    {
      icon: Globe,
      title: "Our Vision",
      description: "To become the world's leading platform for AI services, fostering innovation and growth globally."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pioneering the Future of
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the world's most comprehensive marketplace for AI services, 
              connecting innovative businesses with expert AI practitioners to solve complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, our platform emerged from a simple observation: while AI technology 
                was advancing rapidly, businesses struggled to find the right experts to implement 
                these solutions effectively.
              </p>
              <p className="text-gray-600 mb-4">
                We set out to bridge this gap by creating a trusted marketplace where AI practitioners 
                could showcase their expertise and businesses could easily discover and engage the 
                right talent for their projects.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of clients worldwide, from startups to 
                Fortune 500 companies, helping them harness the power of artificial intelligence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-purple-100">AI Experts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50,000+</div>
                  <div className="text-purple-100">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-purple-100">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-purple-100">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
