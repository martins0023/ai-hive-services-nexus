
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Star, Globe, TrendingUp, Shield } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "AI Experts",
      description: "Verified professionals",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Briefcase,
      value: "50,000+",
      label: "Projects Completed",
      description: "Successful deliveries",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      description: "Client satisfaction",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries",
      description: "Global reach",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      value: "$10M+",
      label: "Total Earnings",
      description: "For our experts",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      value: "99.8%",
      label: "Success Rate",
      description: "Project completion",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
