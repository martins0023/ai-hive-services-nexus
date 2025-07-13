
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, Book, Video, Users } from 'lucide-react';

const Help = () => {
  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using our AI marketplace",
      articles: 12
    },
    {
      icon: Users,
      title: "For Clients",
      description: "Find and work with AI service providers",
      articles: 18
    },
    {
      icon: MessageCircle,
      title: "For Providers",
      description: "Offer your AI services on our platform",
      articles: 15
    },
    {
      icon: Video,
      title: "Tutorials",
      description: "Step-by-step video guides",
      articles: 8
    }
  ];

  const faqs = [
    {
      question: "How do I get started on the platform?",
      answer: "Getting started is easy! Simply create an account, complete your profile, and start browsing AI services or posting your project requirements. Our onboarding process will guide you through each step."
    },
    {
      question: "How are service providers vetted?",
      answer: "All service providers go through a comprehensive vetting process including portfolio review, skill assessments, background checks, and client feedback verification to ensure quality and reliability."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. All transactions are secured and processed through encrypted payment gateways."
    },
    {
      question: "How does the project milestone system work?",
      answer: "Projects are broken down into milestones with specific deliverables and payment schedules. Funds are held in escrow and released upon milestone completion and client approval."
    },
    {
      question: "What if I'm not satisfied with the delivered work?",
      answer: "We offer dispute resolution services and a satisfaction guarantee. If issues can't be resolved, we provide refunds according to our refund policy and work to find alternative solutions."
    },
    {
      question: "How do I communicate with service providers?",
      answer: "Our platform includes built-in messaging, video calls, file sharing, and project management tools to facilitate smooth communication throughout your project."
    },
    {
      question: "Can I hire the same provider for multiple projects?",
      answer: "Absolutely! You can build long-term relationships with providers and hire them directly for future projects at preferred rates."
    },
    {
      question: "What types of AI services are available?",
      answer: "We offer a wide range of AI services including machine learning, natural language processing, computer vision, chatbots, data analytics, automation, and custom AI development."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4">
              Help Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How can we
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}help you?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions, browse our guides, or get in touch with our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for help articles, guides, and FAQs..."
                className="pl-12 pr-4 py-4 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600">
                Search
              </Button>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <Badge variant="secondary">{category.articles} articles</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600">
                    How to Post Your First Project
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Step-by-step guide to creating your first project listing and attracting quality proposals.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">5 min read</Badge>
                    <span className="text-sm text-gray-500">Getting Started</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600">
                    Understanding Our Pricing Structure
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn about our transparent pricing, service fees, and payment processing.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">3 min read</Badge>
                    <span className="text-sm text-gray-500">Pricing</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600">
                    Best Practices for Working with AI Providers
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Tips for effective communication and successful project outcomes.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">8 min read</Badge>
                    <span className="text-sm text-gray-500">Best Practices</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Still Need Help?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
