
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Star, Users, Shield, Zap, Brain, Eye, BarChart3, MessageSquare, Code, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import HowItWorks from '@/components/HowItWorks';
import TopProviders from '@/components/TopProviders';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedServices />
      <HowItWorks />
      <TopProviders />
      <Footer />
    </div>
  );
};

export default Index;
