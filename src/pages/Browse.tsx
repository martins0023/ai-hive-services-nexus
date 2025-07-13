
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, Star, Clock, Brain, Eye, BarChart3, MessageSquare, Code, Palette, Grid, List } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Browse = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const services = [
    {
      id: 1,
      title: "Custom Machine Learning Model Development",
      description: "Build tailored ML models for your specific business needs with state-of-the-art algorithms and optimization techniques.",
      provider: "Dr. Sarah Chen",
      providerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      price: 2500,
      deliveryTime: "7-14 days",
      tags: ["Machine Learning", "Python", "TensorFlow", "Custom AI"],
      category: "Machine Learning",
      featured: true,
      icon: Brain,
      badge: "Top Rated"
    },
    {
      id: 2,
      title: "Computer Vision & Image Recognition Solutions",
      description: "Advanced computer vision systems for object detection, facial recognition, and automated visual analysis with high accuracy.",
      provider: "Alex Rodriguez",
      providerImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 89,
      price: 1800,
      deliveryTime: "5-10 days",
      tags: ["Computer Vision", "OpenCV", "Deep Learning", "Image Processing"],
      category: "Computer Vision",
      featured: true,
      icon: Eye,
      badge: "Expert"
    },
    // Add more services...
  ];

  const categories = [
    "All Categories",
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Data Science",
    "AI Development",
    "Automation",
    "Chatbots",
    "Predictive Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse AI Services</h1>
              <p className="text-gray-600">Discover expert AI solutions for your business needs</p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-4 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    min={0}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Delivery Time */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Delivery Time</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 days</SelectItem>
                      <SelectItem value="3-7">3-7 days</SelectItem>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Minimum Rating</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.5">4.5+ stars</SelectItem>
                      <SelectItem value="4.0">4.0+ stars</SelectItem>
                      <SelectItem value="3.5">3.5+ stars</SelectItem>
                      <SelectItem value="3.0">3.0+ stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-600">Showing 1,234 services</p>
              </div>
              <div className="flex items-center gap-4">
                <Select defaultValue="relevant">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Most Relevant</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id} 
                    className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-200 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={viewMode === 'list' ? 'flex-shrink-0 w-48' : ''}>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-200">
                            <IconComponent className="h-6 w-6 text-purple-600" />
                          </div>
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 text-xs">
                            {service.badge}
                          </Badge>
                        </div>
                        
                        <CardTitle className="text-lg font-bold leading-tight group-hover:text-purple-600 transition-colors">
                          {service.title}
                        </CardTitle>
                        
                        {viewMode === 'grid' && (
                          <CardDescription className="text-gray-600 leading-relaxed">
                            {service.description}
                          </CardDescription>
                        )}
                      </CardHeader>
                    </div>

                    <CardContent className={`pt-0 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {viewMode === 'list' && (
                        <p className="text-gray-600 mb-4">{service.description}</p>
                      )}
                      
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
                            <span className="text-gray-500">({service.reviews})</span>
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
                      </div>

                      {/* Pricing and Delivery */}
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{service.deliveryTime}</span>
                        </div>
                        <span className="font-bold text-lg text-gray-900">From ${service.price}</span>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">4</Button>
                <Button variant="outline" size="sm">5</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Browse;
