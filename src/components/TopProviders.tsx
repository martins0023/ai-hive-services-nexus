
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Award, Briefcase, Users } from 'lucide-react';

const TopProviders = () => {
  const providers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Machine Learning Architect",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      completedProjects: 89,
      location: "San Francisco, CA",
      specialties: ["Deep Learning", "Computer Vision", "Neural Networks"],
      hourlyRate: "$150/hr",
      responseTime: "< 1 hour",
      badges: ["Top Rated", "Expert"],
      description: "PhD in AI with 8+ years of experience building production ML systems for Fortune 500 companies."
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      title: "Computer Vision Specialist",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviews: 89,
      completedProjects: 156,
      location: "New York, NY",
      specialties: ["Image Recognition", "OpenCV", "Object Detection"],
      hourlyRate: "$120/hr",
      responseTime: "< 2 hours",
      badges: ["Expert", "Rising Star"],
      description: "Computer vision expert specializing in real-time image processing and automated visual inspection systems."
    },
    {
      id: 3,
      name: "Maya Patel",
      title: "NLP & Chatbot Developer",
      avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 156,
      completedProjects: 203,
      location: "Austin, TX",
      specialties: ["Natural Language Processing", "Conversational AI", "Sentiment Analysis"],
      hourlyRate: "$100/hr",
      responseTime: "< 30 min",
      badges: ["Top Rated", "Fast Response"],
      description: "NLP specialist with expertise in building intelligent chatbots and language understanding systems."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Data Science Consultant",
      avatar: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviews: 203,
      completedProjects: 312,
      location: "Seattle, WA",
      specialties: ["Predictive Analytics", "Statistical Modeling", "Business Intelligence"],
      hourlyRate: "$90/hr",
      responseTime: "< 3 hours",
      badges: ["Experienced", "Mentor"],
      description: "Senior data scientist with proven track record in transforming complex data into actionable business insights."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4">
            Top AI Experts
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Top Providers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work with industry-leading AI experts who have delivered exceptional results 
            for businesses across various industries and scales.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {providers.map((provider) => (
            <Card key={provider.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-200 bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader className="text-center pb-4">
                {/* Avatar */}
                <div className="relative mx-auto mb-4">
                  <img 
                    src={provider.avatar} 
                    alt={provider.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                {/* Name and Title */}
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                  {provider.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium mb-3">{provider.title}</p>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">{provider.rating}</span>
                  <span className="text-gray-500 text-sm">({provider.reviews})</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {provider.badges.map((badge, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className={`text-xs ${
                        badge === 'Top Rated' ? 'bg-yellow-100 text-yellow-700' :
                        badge === 'Expert' ? 'bg-purple-100 text-purple-700' :
                        badge === 'Rising Star' ? 'bg-green-100 text-green-700' :
                        badge === 'Fast Response' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{provider.description}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Specialties</p>
                  <div className="flex flex-wrap gap-1">
                    {provider.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-purple-200 text-purple-600">
                        {specialty}
                      </Badge>
                    ))}
                    {provider.specialties.length > 2 && (
                      <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                        +{provider.specialties.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-600 mb-1">
                      <Briefcase className="h-3 w-3" />
                      <span>Projects</span>
                    </div>
                    <div className="font-bold text-gray-900">{provider.completedProjects}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-600 mb-1">
                      <MapPin className="h-3 w-3" />
                      <span>Response</span>
                    </div>
                    <div className="font-bold text-gray-900 text-xs">{provider.responseTime}</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Starting at</span>
                  <span className="font-bold text-lg text-gray-900">{provider.hourlyRate}</span>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform duration-200">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 mr-4">
            View All Experts
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8">
            Become an Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopProviders;
