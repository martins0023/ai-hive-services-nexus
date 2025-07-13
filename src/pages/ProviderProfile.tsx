
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Calendar, Users, Award, MessageSquare, Heart, Share2, Brain, Eye, BarChart3, Code, Clock, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from "@/hooks/use-toast";

const ProviderProfile = () => {
  const { id } = useParams();

  // Mock provider data
  const provider = {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Senior AI/ML Engineer & Data Scientist",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=300&fit=crop",
    rating: 4.9,
    reviews: 127,
    completedProjects: 89,
    responseTime: "1 hour",
    level: "Top Rated Plus",
    memberSince: "2019",
    languages: ["English", "Mandarin"],
    location: "San Francisco, CA",
    description: "Passionate AI/ML engineer with 8+ years of experience in developing cutting-edge machine learning solutions for Fortune 500 companies. Specialized in deep learning, computer vision, and NLP applications.",
    longDescription: "I am a seasoned AI/ML professional with extensive experience in developing and deploying machine learning solutions at scale. My expertise spans across various domains including computer vision, natural language processing, predictive analytics, and recommendation systems. I have successfully delivered over 200 projects ranging from startup MVPs to enterprise-level AI implementations.",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "Computer Vision", level: 92 },
      { name: "NLP", level: 85 },
      { name: "Data Science", level: 93 },
      { name: "AWS", level: 87 },
      { name: "Machine Learning", level: 96 }
    ],
    certifications: [
      "Google Cloud Professional ML Engineer",
      "AWS Certified Machine Learning",
      "TensorFlow Developer Certificate",
      "Stanford AI Graduate Program"
    ],
    services: [
      {
        id: 1,
        title: "Custom Machine Learning Model Development",
        price: "From $1,500",
        rating: 4.9,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
        icon: Brain
      },
      {
        id: 2,
        title: "Computer Vision & Image Recognition",
        price: "From $1,200",
        rating: 4.8,
        reviews: 32,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        icon: Eye
      },
      {
        id: 3,
        title: "Data Analysis & Visualization",
        price: "From $800",
        rating: 5.0,
        reviews: 28,
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop",
        icon: BarChart3
      }
    ],
    stats: {
      totalEarnings: "$250K+",
      avgProjectValue: "$2.8K",
      completionRate: "98%",
      onTimeDelivery: "95%"
    }
  };

  const reviews = [
    {
      id: 1,
      user: {
        name: "Michael Thompson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        country: "United States"
      },
      service: "Machine Learning Model",
      rating: 5,
      date: "2 weeks ago",
      comment: "Exceptional work! Sarah delivered exactly what we needed for our predictive analytics project. The model accuracy exceeded our expectations and the documentation was thorough. Will definitely work with her again!",
      helpful: 12
    },
    {
      id: 2,
      user: {
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=40&h=40&fit=crop&crop=face",
        country: "Spain"
      },
      service: "Computer Vision System",
      rating: 5,
      date: "1 month ago",
      comment: "Professional, communicative, and delivered high-quality results. The computer vision system she built for our e-commerce platform increased our conversion rates by 23%. Outstanding expertise!",
      helpful: 8
    },
    {
      id: 3,
      user: {
        name: "David Kim",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        country: "South Korea"
      },
      service: "Data Analysis Dashboard",
      rating: 4,
      date: "2 months ago",
      comment: "Great experience working with Sarah. She was able to explain complex concepts in simple terms and delivered on time. The dashboard looks amazing and provides valuable insights.",
      helpful: 5
    }
  ];

  const handleContactProvider = () => {
    toast({
      title: "Message sent!",
      description: "Your message has been sent to the provider. They'll respond within 1 hour.",
    });
  };

  const handleFollow = () => {
    toast({
      title: "Following provider",
      description: "You are now following Dr. Sarah Chen and will receive updates about new services.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Provider profile link has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/providers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Providers
          </Link>
        </Button>

        {/* Cover Image & Profile */}
        <Card className="mb-8 overflow-hidden">
          <div className="relative h-48 md:h-64">
            <img 
              src={provider.coverImage} 
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <CardContent className="relative p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg -mt-16 md:-mt-20">
                <AvatarImage src={provider.image} />
                <AvatarFallback className="text-2xl">{provider.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-3xl font-bold font-heading">{provider.name}</h1>
                      <Badge className="bg-yellow-100 text-yellow-800">{provider.level}</Badge>
                    </div>
                    <p className="text-xl text-muted-foreground mb-3">{provider.title}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium text-foreground">{provider.rating}</span>
                        <span>({provider.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{provider.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Member since {provider.memberSince}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={handleFollow}>
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button onClick={handleContactProvider} className="btn-gradient">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg leading-relaxed">{provider.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{provider.longDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {provider.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {provider.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                          <Award className="h-5 w-5 text-primary" />
                          <span className="font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {provider.services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-primary">{service.price}</span>
                            <div className="flex items-center space-x-1 text-sm">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{service.rating}</span>
                              <span className="text-muted-foreground">({service.reviews})</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Reviews</CardTitle>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="text-2xl font-bold">{provider.rating}</span>
                      </div>
                      <div className="text-muted-foreground">Based on {provider.reviews} reviews</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Rating Breakdown */}
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center space-x-2">
                          <span className="text-sm w-8">{stars}★</span>
                          <Progress value={stars === 5 ? 88 : stars === 4 ? 10 : 2} className="flex-1" />
                          <span className="text-sm text-muted-foreground w-8">
                            {stars === 5 ? '88%' : stars === 4 ? '10%' : '2%'}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Individual Reviews */}
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <Avatar>
                              <AvatarImage src={review.user.image} />
                              <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-semibold">{review.user.name}</span>
                                <span className="text-sm text-muted-foreground">{review.user.country}</span>
                              </div>
                              <div className="flex items-center space-x-2 mb-1">
                                <Badge variant="outline" className="text-xs">{review.service}</Badge>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                              <div className="flex items-center space-x-2 mt-2">
                                <Button variant="ghost" size="sm" className="text-xs">
                                  Helpful ({review.helpful})
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio & Case Studies</CardTitle>
                    <CardDescription>
                      Showcase of recent projects and achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      <Award className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Portfolio items will be displayed here</p>
                      <p className="text-sm">Contact provider for detailed case studies</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{provider.completedProjects}</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{provider.responseTime}</div>
                    <div className="text-sm text-muted-foreground">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{provider.stats.completionRate}</div>
                    <div className="text-sm text-muted-foreground">Completion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{provider.stats.onTimeDelivery}</div>
                    <div className="text-sm text-muted-foreground">On Time</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Earnings:</span>
                    <span className="font-semibold">{provider.stats.totalEarnings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Project:</span>
                    <span className="font-semibold">{provider.stats.avgProjectValue}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {provider.languages.map((language, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="font-semibold">Ready to get started?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact Dr. Sarah Chen to discuss your project requirements
                </p>
                <Button onClick={handleContactProvider} className="w-full btn-gradient">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProviderProfile;
