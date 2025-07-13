
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, Star, MapPin, Clock, Users, Brain, Eye, BarChart3, MessageSquare, Code, Palette, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Providers = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const providers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Senior AI/ML Engineer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      completedProjects: 89,
      responseTime: "1 hour",
      location: "San Francisco, CA",
      level: "Top Rated Plus",
      skills: ["Python", "TensorFlow", "Machine Learning", "Deep Learning"],
      description: "Passionate AI/ML engineer with 8+ years of experience in developing cutting-edge solutions.",
      availability: "Available",
      languages: ["English", "Mandarin"]
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      title: "Computer Vision Specialist",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 75,
      completedProjects: 67,
      responseTime: "2 hours",
      location: "Austin, TX",
      level: "Top Rated",
      skills: ["OpenCV", "Computer Vision", "Python", "Deep Learning"],
      description: "Computer vision expert specializing in image recognition and automated visual analysis.",
      availability: "Available",
      languages: ["English", "Spanish"]
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Data Science Consultant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 156,
      hourlyRate: 90,
      completedProjects: 112,
      responseTime: "30 minutes",
      location: "London, UK",
      level: "Top Rated Plus",
      skills: ["Data Science", "R", "Python", "Statistical Analysis"],
      description: "Data science consultant helping businesses unlock insights from their data.",
      availability: "Busy",
      languages: ["English", "French"]
    },
    {
      id: 4,
      name: "Michael Park",
      title: "NLP & Chatbot Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviews: 73,
      hourlyRate: 70,
      completedProjects: 54,
      responseTime: "1 hour",
      location: "Seoul, South Korea",
      level: "Rising Talent",
      skills: ["NLP", "Chatbots", "Python", "BERT"],
      description: "Natural Language Processing expert building intelligent conversational systems.",
      availability: "Available",
      languages: ["English", "Korean"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "AI Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviews: 94,
      hourlyRate: 95,
      completedProjects: 78,
      responseTime: "2 hours",
      location: "Toronto, CA",
      level: "Top Rated",
      skills: ["Product Strategy", "AI Implementation", "Project Management", "Agile"],
      description: "AI product manager with expertise in bringing AI solutions from concept to market.",
      availability: "Available",
      languages: ["English"]
    },
    {
      id: 6,
      name: "David Kumar",
      title: "MLOps & Cloud AI Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 108,
      hourlyRate: 100,
      completedProjects: 85,
      responseTime: "1 hour",
      location: "Bangalore, India",
      level: "Top Rated Plus",
      skills: ["MLOps", "AWS", "Docker", "Kubernetes"],
      description: "MLOps specialist helping companies scale their AI infrastructure and deployment pipelines.",
      availability: "Available",
      languages: ["English", "Hindi"]
    }
  ];

  const categories = [
    "All Specialists",
    "Machine Learning",
    "Computer Vision", 
    "Data Science",
    "Natural Language Processing",
    "AI Development",
    "MLOps",
    "Product Management"
  ];

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 font-heading">Find AI Talent</h1>
              <p className="text-gray-600">Connect with expert AI professionals for your projects</p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by name, skills, or expertise..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Specialization</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
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

                {/* Hourly Rate Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Hourly Rate</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rate range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">$0 - $50/hour</SelectItem>
                      <SelectItem value="50-75">$50 - $75/hour</SelectItem>
                      <SelectItem value="75-100">$75 - $100/hour</SelectItem>
                      <SelectItem value="100+">$100+/hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Experience Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rising">Rising Talent</SelectItem>
                      <SelectItem value="top-rated">Top Rated</SelectItem>
                      <SelectItem value="top-rated-plus">Top Rated Plus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north-america">North America</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Availability</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available Now</SelectItem>
                      <SelectItem value="busy">Busy</SelectItem>
                      <SelectItem value="any">Any</SelectItem>
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
                <p className="text-gray-600">Showing {filteredProviders.length} professionals</p>
              </div>
              <div className="flex items-center gap-4">
                <Select defaultValue="rating">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="rate-low">Rate: Low to High</SelectItem>
                    <SelectItem value="rate-high">Rate: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
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

            {/* Providers Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
              {filteredProviders.map((provider) => (
                <Card 
                  key={provider.id} 
                  className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-200 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <Link to={`/provider/${provider.id}`} className={`block ${viewMode === 'list' ? 'flex w-full' : ''}`}>
                    <div className={viewMode === 'list' ? 'flex-shrink-0 w-48' : ''}>
                      <CardHeader className="pb-4">
                        <div className="flex items-start space-x-4">
                          <div className="relative">
                            <Avatar className="w-16 h-16 border-2 border-white shadow-lg">
                              <AvatarImage src={provider.image} />
                              <AvatarFallback className="text-lg">{provider.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              provider.availability === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                            }`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-lg group-hover:text-purple-600 transition-colors">
                                  {provider.name}
                                </h3>
                                <p className="text-muted-foreground">{provider.title}</p>
                              </div>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ${
                                  provider.level === 'Top Rated Plus' 
                                    ? 'bg-yellow-100 text-yellow-800' 
                                    : provider.level === 'Top Rated'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-green-100 text-green-800'
                                }`}
                              >
                                {provider.level}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="font-medium text-foreground">{provider.rating}</span>
                                <span>({provider.reviews})</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{provider.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </div>

                    <CardContent className={`pt-0 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {provider.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {provider.skills.slice(0, 4).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {provider.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{provider.skills.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-primary">${provider.hourlyRate}</div>
                          <div className="text-muted-foreground text-xs">per hour</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary">{provider.completedProjects}</div>
                          <div className="text-muted-foreground text-xs">projects</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary flex items-center justify-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {provider.responseTime}
                          </div>
                          <div className="text-muted-foreground text-xs">response</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {provider.languages.join(', ')}
                        </div>
                        <Button size="sm" className="btn-gradient">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>

            {/* No results message */}
            {filteredProviders.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No providers found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Pagination */}
            {filteredProviders.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Providers;
