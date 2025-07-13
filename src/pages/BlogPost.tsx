
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app this would come from an API
  const post = {
    title: "Getting Started with AI: A Comprehensive Guide for Business Leaders",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Getting Started",
    readTime: "8 min read",
    image: "/placeholder.svg",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming businesses across every industry. As a business leader, understanding how to leverage AI can give your organization a significant competitive advantage.</p>

      <h2>Why AI Matters for Your Business</h2>
      <p>AI technologies can help businesses automate routine tasks, gain insights from data, improve customer experiences, and make more informed decisions. The key is knowing where and how to implement these technologies effectively.</p>

      <h3>Key Areas Where AI Can Impact Your Business:</h3>
      <ul>
        <li><strong>Customer Service:</strong> Chatbots and virtual assistants can handle routine inquiries 24/7</li>
        <li><strong>Data Analysis:</strong> Machine learning algorithms can uncover patterns in your business data</li>
        <li><strong>Process Automation:</strong> AI can streamline repetitive tasks and workflows</li>
        <li><strong>Predictive Analytics:</strong> Forecast trends and customer behavior</li>
      </ul>

      <h2>Getting Started: A Step-by-Step Approach</h2>
      <p>Implementing AI in your business doesn't have to be overwhelming. Here's a practical approach:</p>

      <h3>1. Identify Your Challenges</h3>
      <p>Start by identifying specific business problems that AI could solve. Look for areas where you have:</p>
      <ul>
        <li>Large amounts of data that need analysis</li>
        <li>Repetitive tasks that consume significant time</li>
        <li>Customer service bottlenecks</li>
        <li>Decision-making processes that could benefit from data insights</li>
      </ul>

      <h3>2. Start Small</h3>
      <p>Begin with pilot projects that have clear, measurable outcomes. This allows you to:</p>
      <ul>
        <li>Learn from experience without major risk</li>
        <li>Demonstrate value to stakeholders</li>
        <li>Build internal expertise</li>
        <li>Iterate and improve your approach</li>
      </ul>

      <h3>3. Choose the Right Partner</h3>
      <p>Unless you have internal AI expertise, partnering with experienced AI consultants is crucial. Look for partners who:</p>
      <ul>
        <li>Have experience in your industry</li>
        <li>Can explain technical concepts in business terms</li>
        <li>Provide ongoing support and training</li>
        <li>Have a track record of successful implementations</li>
      </ul>

      <h2>Common Pitfalls to Avoid</h2>
      <p>Many businesses make these mistakes when starting their AI journey:</p>

      <h3>Unrealistic Expectations</h3>
      <p>AI is powerful, but it's not magic. Set realistic expectations about what AI can achieve and the time it takes to see results.</p>

      <h3>Neglecting Data Quality</h3>
      <p>AI is only as good as the data it works with. Invest time in cleaning and organizing your data before implementing AI solutions.</p>

      <h3>Ignoring Change Management</h3>
      <p>AI implementation often requires changes to workflows and processes. Prepare your team for these changes and provide adequate training.</p>

      <h2>Measuring Success</h2>
      <p>Define clear metrics for success before implementing AI solutions. These might include:</p>
      <ul>
        <li>Time savings from automation</li>
        <li>Improved accuracy in predictions or decisions</li>
        <li>Enhanced customer satisfaction scores</li>
        <li>Increased revenue or cost savings</li>
      </ul>

      <h2>Conclusion</h2>
      <p>AI presents tremendous opportunities for businesses willing to embrace it thoughtfully. By starting small, choosing the right partners, and focusing on solving real business problems, you can successfully integrate AI into your operations and gain a competitive edge.</p>

      <p>Remember, the goal isn't to implement AI for its own sake, but to use it as a tool to solve business challenges and create value for your customers and stakeholders.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-gray-600">AI Strategy Consultant</p>
                </div>
              </div>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </footer>

          {/* Related Articles */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-3">Best Practices</Badge>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  How to Choose the Right AI Consultant for Your Project
                </h4>
                <p className="text-gray-600 mb-4">
                  Essential tips for evaluating AI consultants and ensuring successful project outcomes.
                </p>
                <Link to="/blog/choosing-right-ai-consultant" className="text-purple-600 hover:text-purple-700">
                  Read more →
                </Link>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-3">Business</Badge>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Measuring ROI of AI Implementation
                </h4>
                <p className="text-gray-600 mb-4">
                  Learn how to track and measure the return on investment for your AI initiatives.
                </p>
                <Link to="/blog/roi-ai-implementation" className="text-purple-600 hover:text-purple-700">
                  Read more →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
