
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: "getting-started-with-ai",
      title: "Getting Started with AI: A Comprehensive Guide for Business Leaders",
      excerpt: "Learn how to identify AI opportunities in your business and take the first steps toward implementation.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Getting Started",
      readTime: "8 min read",
      image: "/placeholder.svg"
    },
    {
      id: "machine-learning-trends-2024",
      title: "Top Machine Learning Trends to Watch in 2024",
      excerpt: "Discover the latest trends in machine learning that are shaping the future of business automation.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Trends",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      id: "choosing-right-ai-consultant",
      title: "How to Choose the Right AI Consultant for Your Project",
      excerpt: "Essential tips for evaluating AI consultants and ensuring successful project outcomes.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "Best Practices",
      readTime: "10 min read",
      image: "/placeholder.svg"
    },
    {
      id: "roi-ai-implementation",
      title: "Measuring ROI of AI Implementation: Key Metrics and Strategies",
      excerpt: "Learn how to track and measure the return on investment for your AI initiatives.",
      author: "David Kim",
      date: "2024-01-08",
      category: "Business",
      readTime: "12 min read",
      image: "/placeholder.svg"
    },
    {
      id: "ai-ethics-business",
      title: "AI Ethics in Business: Building Responsible AI Solutions",
      excerpt: "Understanding the importance of ethical AI development and implementation in modern business.",
      author: "Lisa Thompson",
      date: "2024-01-05",
      category: "Ethics",
      readTime: "9 min read",
      image: "/placeholder.svg"
    },
    {
      id: "natural-language-processing-applications",
      title: "Real-World Applications of Natural Language Processing",
      excerpt: "Explore how NLP is transforming customer service, content analysis, and business intelligence.",
      author: "James Wilson",
      date: "2024-01-03",
      category: "Technology",
      readTime: "7 min read",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Getting Started", "Trends", "Best Practices", "Business", "Ethics", "Technology"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4">
              Blog
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Insights &
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from the world of artificial intelligence.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-16 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{blogPosts[0].category}</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    {blogPosts[0].author}
                    <Calendar className="h-4 w-4 ml-4 mr-2" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                    <span className="ml-4">{blogPosts[0].readTime}</span>
                  </div>
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-purple-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
