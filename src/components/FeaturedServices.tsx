
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Brain, Eye, BarChart3, MessageSquare, Code, Palette, Clock, Award } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Custom Machine Learning Model Development",
      description: "Build tailored ML models for your specific business needs with state-of-the-art algorithms and optimization.",
      provider: "Dr. Sarah Chen",
      providerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      price: "Starting at $2,500",
      deliveryTime: "7-14 days",
      tags: ["Machine Learning", "Python", "TensorFlow", "Custom AI"],
      featured: true,
      icon: Brain,
      badge: "Top Rated"
    },
    {
      id: 2,
      title: "Computer Vision & Image Recognition Solutions",
      description: "Advanced computer vision systems for object detection, facial recognition, and automated visual analysis.",
      provider: "Alex Rodriguez",
      providerImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 89,
      price: "Starting at $1,800",
      deliveryTime: "5-10 days",
      tags: ["Computer Vision", "OpenCV", "Deep Learning", "Image Processing"],
      featured: true,
      icon: Eye,
      badge: "Expert"
    },
    {
      id: 3,
      title: "Natural Language Processing & Chatbot Development",
      description: "Intelligent conversational AI, sentiment analysis, and NLP solutions for enhanced customer engagement.",
      provider: "Maya Patel",
      providerImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 156,
      price: "Starting at $1,200",
      deliveryTime: "3-7 days",
      tags: ["NLP", "Chatbots", "BERT", "GPT Integration"],
      featured: true,
      icon: MessageSquare,
      badge: "Rising Talent"
    },
    {
      id: 4,
      title: "Data Science & Predictive Analytics",
      description: "Transform your data into actionable insights with advanced analytics, forecasting, and business intelligence.",
      provider: "Dr. James Wilson",
      providerImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=face",
      rating: 4.7,
      reviews: 203,
      price: "Starting at $900",
      deliveryTime: "5-12 days",
      tags: ["Data Science", "Analytics", "Python", "SQL"],
      featured: false,
      icon: BarChart3,
      badge: "Experienced"
    },
    {
      id: 5,
      title: "AI-Powered Web Development",
      description: "Modern web applications enhanced with AI features, smart recommendations, and intelligent user experiences.",
      provider: "Emma Thompson",
      providerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 91,
      price: "Starting at $1,500",
      deliveryTime: "7-21 days",
      tags: ["Web Development", "AI Integration", "React", "Node.js"],
      featured: false,
      icon: Code,
      badge: "Innovative"
    },
    {
      id: 6,
      title: "AI Art & Creative Design Services",
      description: "Leverage AI for stunning visual content, automated design generation, and creative digital art solutions.",
      provider: "Lucas Art Studio",
      providerImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face",
      rating: 4.6,
      reviews: 74,
      price: "Starting at $600",
      deliveryTime: "2-5 days",
      tags: ["AI Art", "Design", "Midjourney", "Creative AI"],
      featured: false,
      icon: Palette,
      badge: "Creative"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4">
            Featured Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Top-Rated 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}AI Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hand-picked services from our most trusted AI experts, delivering exceptional results for businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-200 ${
                  service.featured ? 'ring-2 ring-purple-200 bg-gradient-to-br from-purple-50/50 to-blue-50/50' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        service.badge === 'Top Rated' ? 'bg-yellow-100 text-yellow-700' :
                        service.badge === 'Expert' ? 'bg-purple-100 text-purple-700' :
                        service.badge === 'Rising Talent' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {service.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-bold leading-tight group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Provider Info */}
                  <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={service.providerImage} 
                      alt={service.provider}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{service.provider}</p>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium text-gray-900">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-purple-200 text-purple-600">
                        {tag}
                      </Badge>
                    ))}
                    {service.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                        +{service.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Pricing and Delivery */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.deliveryTime}</span>
                    </div>
                    <span className="font-bold text-lg text-gray-900">{service.price}</span>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform duration-200">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
