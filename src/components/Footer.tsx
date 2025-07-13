
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Machine Learning", href: "/services/machine-learning" },
        { name: "Computer Vision", href: "/services/computer-vision" },
        { name: "Natural Language Processing", href: "/services/nlp" },
        { name: "Data Science", href: "/services/data-science" },
        { name: "AI Development", href: "/services/ai-development" },
        { name: "AI Consulting", href: "/services/consulting" }
      ]
    },
    {
      title: "For Providers",
      links: [
        { name: "Become an Expert", href: "/become-expert" },
        { name: "Provider Resources", href: "/provider-resources" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Community", href: "/community" },
        { name: "Training Programs", href: "/training" },
        { name: "Certification", href: "/certification" }
      ]
    },
    {
      title: "For Clients",
      links: [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Browse Services", href: "/browse" },
        { name: "Post a Project", href: "/post-project" },
        { name: "Enterprise Solutions", href: "/enterprise" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Help Center", href: "/help" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated with AI Trends</h3>
              <p className="text-gray-400">
                Get the latest insights, expert tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AI Hive</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The world's leading platform for AI services. Connect with expert AI professionals 
              or offer your AI expertise to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-purple-400" />
            <div>
              <p className="text-sm text-gray-400">Email us</p>
              <p className="text-white">hello@aihive.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Call us</p>
              <p className="text-white">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-green-400" />
            <div>
              <p className="text-sm text-gray-400">Visit us</p>
              <p className="text-white">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AI Hive Services Nexus. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/security" className="text-gray-400 hover:text-white text-sm transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
