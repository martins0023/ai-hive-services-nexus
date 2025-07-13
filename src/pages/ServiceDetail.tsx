
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Users, Shield, MessageSquare, Heart, Share2, Brain, Eye, BarChart3, Code, CheckCircle, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from "@/hooks/use-toast";

const ServiceDetail = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock service data - in real app, this would be fetched based on ID
  const service = {
    id: 1,
    title: "Custom Machine Learning Model Development",
    description: "I will develop a custom machine learning model tailored to your specific business needs using state-of-the-art algorithms and optimization techniques. Whether you need predictive analytics, classification, regression, or deep learning solutions, I provide end-to-end ML development services.",
    longDescription: "This comprehensive machine learning service includes data preprocessing, feature engineering, model selection, training, validation, and deployment. I work with various ML frameworks including TensorFlow, PyTorch, and Scikit-learn to deliver robust solutions that scale with your business needs.",
    provider: {
      id: 1,
      name: "Dr. Sarah Chen",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      completedProjects: 89,
      responseTime: "1 hour",
      level: "Top Rated Plus",
      memberSince: "2019",
      languages: ["English", "Mandarin", "Python"],
      location: "San Francisco, CA"
    },
    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
    ],
    packages: [
      {
        name: "Basic",
        price: 1500,
        deliveryTime: "7 days",
        revisions: 2,
        features: [
          "Data preprocessing and cleaning",
          "Basic ML model development",
          "Model evaluation report",
          "Documentation and code comments"
        ]
      },
      {
        name: "Standard",
        price: 2500,
        deliveryTime: "10 days",
        revisions: 3,
        features: [
          "Everything in Basic",
          "Advanced feature engineering", 
          "Multiple model comparison",
          "Hyperparameter optimization",
          "Deployment guide"
        ],
        popular: true
      },
      {
        name: "Premium",
        price: 4000,
        deliveryTime: "14 days",
        revisions: 5,
        features: [
          "Everything in Standard",
          "Deep learning solutions",
          "Real-time model deployment",
          "Performance monitoring setup",
          "3 months of support"
        ]
      }
    ],
    tags: ["Machine Learning", "Python", "TensorFlow", "Data Science", "AI Development"],
    category: "Machine Learning",
    rating: 4.9,
    totalReviews: 127,
    orders: 89,
    icon: Brain,
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    faqs: [
      {
        question: "What type of data do you work with?",
        answer: "I work with all types of data including structured (CSV, databases), unstructured (text, images), time series, and streaming data. I can handle datasets of various sizes from small business datasets to large enterprise data."
      },
      {
        question: "Do you provide ongoing support after delivery?",
        answer: "Yes, I provide support based on the package you choose. Basic includes 1 month of support, Standard includes 2 months, and Premium includes 3 months of ongoing support and maintenance."
      },
      {
        question: "Can you work with my existing tech stack?",
        answer: "Absolutely! I'm experienced with various tech stacks and can integrate ML models into existing systems using APIs, cloud platforms (AWS, GCP, Azure), or on-premise deployments."
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      user: {
        name: "Michael Thompson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        country: "United States"
      },
      rating: 5,
      date: "2 weeks ago",
      comment: "Exceptional work! Sarah delivered exactly what we needed for our predictive analytics project. The model accuracy exceeded our expectations and the documentation was thorough.",
      helpful: 12
    },
    {
      id: 2,
      user: {
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=40&h=40&fit=crop&crop=face",
        country: "Spain"
      },
      rating: 5,
      date: "1 month ago",
      comment: "Professional, communicative, and delivered high-quality results. The ML model she built for our e-commerce platform increased our conversion rates by 23%.",
      helpful: 8
    },
    {
      id: 3,
      user: {
        name: "David Kim",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        country: "South Korea"
      },
      rating: 4,
      date: "2 months ago", 
      comment: "Great experience working with Sarah. She was able to explain complex ML concepts in simple terms and delivered on time. Minor delay due to additional requirements we added.",
      helpful: 5
    }
  ];

  const [selectedPackage, setSelectedPackage] = useState(1); // Standard package by default

  const handleContactSeller = () => {
    toast({
      title: "Message sent!",
      description: "Your message has been sent to the seller. They'll respond within 1 hour.",
    });
  };

  const handleAddToFavorites = () => {
    toast({
      title: "Added to favorites",
      description: "This service has been added to your favorites list.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Service link has been copied to your clipboard.",
    });
  };

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/browse" className="hover:text-primary">Browse</Link>
          <span>/</span>
          <span className="text-foreground">{service.category}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/browse">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Images */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={service.images[activeImageIndex]} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-2 p-4">
                  {service.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-20 h-16 rounded-md overflow-hidden border-2 ${
                        activeImageIndex === index ? 'border-primary' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Info */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold font-heading">{service.title}</h1>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-muted-foreground">({service.totalReviews} reviews)</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{service.orders} orders</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={handleAddToFavorites}>
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="about">About Seller</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed mb-6">{service.description}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.longDescription}</p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">What you'll get:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.packages[selectedPackage].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Skills & Expertise:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={service.provider.image} />
                        <AvatarFallback>{service.provider.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold">{service.provider.name}</h3>
                          <Badge className="bg-yellow-100 text-yellow-800">{service.provider.level}</Badge>
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{service.provider.rating}</span>
                          <span className="text-muted-foreground">({service.provider.reviews} reviews)</span>
                        </div>
                        <p className="text-muted-foreground">{service.provider.location}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{service.provider.completedProjects}</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{service.provider.responseTime}</div>
                        <div className="text-sm text-muted-foreground">Response</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{service.provider.memberSince}</div>
                        <div className="text-sm text-muted-foreground">Member Since</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{service.provider.languages.length}</div>
                        <div className="text-sm text-muted-foreground">Languages</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Languages:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.provider.languages.map((lang, index) => (
                          <Badge key={index} variant="secondary">{lang}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="text-2xl font-bold">{service.rating}</span>
                      </div>
                      <div className="text-muted-foreground">Based on {service.totalReviews} reviews</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Rating Breakdown */}
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center space-x-2">
                          <span className="text-sm w-8">{stars}★</span>
                          <Progress value={stars === 5 ? 85 : stars === 4 ? 12 : 3} className="flex-1" />
                          <span className="text-sm text-muted-foreground w-8">
                            {stars === 5 ? '85%' : stars === 4 ? '12%' : '3%'}
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
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
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

              <TabsContent value="faq" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold">{faq.question}</h4>
                        <p className="text-muted-foreground">{faq.answer}</p>
                        {index < service.faqs.length - 1 && <Separator />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Choose a Package</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Package Selection */}
                <div className="grid grid-cols-3 gap-2">
                  {service.packages.map((pkg, index) => (
                    <Button
                      key={index}
                      variant={selectedPackage === index ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPackage(index)}
                      className="relative"
                    >
                      {pkg.popular && (
                        <Badge className="absolute -top-2 -right-2 text-xs px-1">Popular</Badge>
                      )}
                      {pkg.name}
                    </Button>
                  ))}
                </div>

                {/* Selected Package Details */}
                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{service.packages[selectedPackage].name}</span>
                    <span className="text-2xl font-bold">${service.packages[selectedPackage].price}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.packages[selectedPackage].deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{service.packages[selectedPackage].revisions} revisions</span>
                    </div>
                  </div>

                  <ul className="space-y-1 text-sm">
                    {service.packages[selectedPackage].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full btn-gradient" size="lg">
                  Continue (${service.packages[selectedPackage].price})
                </Button>

                <Button variant="outline" className="w-full" onClick={handleContactSeller}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Seller
                </Button>
              </CardContent>
            </Card>

            {/* Provider Card */}
            <Card>
              <CardContent className="p-4">
                <Link to={`/provider/${service.provider.id}`} className="block">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarImage src={service.provider.image} />
                      <AvatarFallback>{service.provider.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold hover:text-primary transition-colors">
                        {service.provider.name}
                      </h4>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span>{service.provider.rating}</span>
                        <span className="text-muted-foreground">({service.provider.reviews})</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response time:</span>
                    <span>{service.provider.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects completed:</span>
                    <span>{service.provider.completedProjects}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
