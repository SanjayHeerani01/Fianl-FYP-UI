
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Award, Users, Clock, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About VolunteerConnect</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn more about our mission, vision, and the impact we're making in communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                VolunteerConnect exists to bridge the gap between passionate volunteers and organizations making a difference. Our mission is to create a world where everyone can contribute their unique skills to causes they care about.
              </p>
              <p className="text-lg text-gray-600">
                We believe in the power of collective action and that everyone has something valuable to offer. By connecting skilled volunteers with meaningful opportunities, we amplify the impact of organizations working for positive change.
              </p>
            </div>
            <div className="animate-fade-in delay-200">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                We envision a world where volunteering is accessible to everyone and where organizations have the support they need to create lasting change. 
              </p>
              <p className="text-lg text-gray-600">
                Through innovative technology and community-building, we're working toward a future where the process of finding and managing volunteer opportunities is seamless, effective, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              VolunteerConnect was born from a simple observation: there's often a disconnect between people who want to volunteer their skills and organizations that need those skills. Our founders experienced this frustration firsthand while trying to find meaningful volunteer opportunities that matched their abilities.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              In 2023, we set out to create a platform that would make it easy for volunteers and organizations to find each other. What began as a simple matching service has evolved into a comprehensive platform with AI-powered chatbot technology, robust profiles, and impact tracking.
            </p>
            <p className="text-lg text-gray-600">
              Today, VolunteerConnect serves thousands of volunteers and organizations across the country, facilitating connections that make a real difference in communities everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Heart className="h-10 w-10 text-primary" />, 
                title: "Compassion", 
                description: "We believe in the power of empathy and understanding to drive meaningful action." 
              },
              { 
                icon: <Target className="h-10 w-10 text-primary" />, 
                title: "Impact", 
                description: "We focus on creating measurable, positive change in communities through volunteer action." 
              },
              { 
                icon: <Award className="h-10 w-10 text-primary" />, 
                title: "Excellence", 
                description: "We strive for the highest quality in everything we do, from our platform to our partnerships." 
              },
              { 
                icon: <Users className="h-10 w-10 text-primary" />, 
                title: "Community", 
                description: "We believe in the power of connection and collaboration to drive positive change." 
              },
              { 
                icon: <Clock className="h-10 w-10 text-primary" />, 
                title: "Respect", 
                description: "We honor the time, skills, and contributions of every volunteer and organization." 
              },
              { 
                icon: <Leaf className="h-10 w-10 text-primary" />, 
                title: "Innovation", 
                description: "We continuously seek new and better ways to connect volunteers with meaningful opportunities." 
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-6">
                  We've developed a unique approach to volunteer matching that combines technology with a deep understanding of community needs.
                </p>
                <p className="text-gray-600">
                  Our platform is designed to create meaningful connections that benefit both volunteers and organizations, ensuring that every hour contributed makes a real difference.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {[
                  {
                    title: "Smart Matching",
                    description: "Our AI-powered chatbot analyzes skills, interests, and needs to suggest ideal volunteer-organization matches."
                  },
                  {
                    title: "Skill-Based Volunteering",
                    description: "We focus on matching volunteers' specific skills with organizations that need them, creating more impactful outcomes."
                  },
                  {
                    title: "Continuous Support",
                    description: "We provide resources, tips, and guidance to help both volunteers and organizations have successful experiences."
                  },
                  {
                    title: "Impact Tracking",
                    description: "Our platform helps volunteers and organizations track and measure the real impact of their contributions."
                  },
                  {
                    title: "Community Building",
                    description: "We foster a supportive community where volunteers and organizations can share experiences and learn from each other."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 md:px-8 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: "10,000+", label: "Volunteers" },
              { number: "500+", label: "Organizations" },
              { number: "25,000+", label: "Connections Made" },
              { number: "100,000+", label: "Volunteer Hours" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-lg text-center max-w-3xl mx-auto">
            These numbers represent real change happening in communities across the country. 
            Behind each statistic are stories of connection, growth, and positive impact.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
