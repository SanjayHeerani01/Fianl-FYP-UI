
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart, Users, Lightbulb, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Connect, Volunteer, <span className="text-primary">Make a Difference</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our community of passionate volunteers and organizations working together to create positive change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/sign-up">
              <Button size="lg" className="btn-primary">Get Started</Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to VolunteerConnect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bridge the gap between passionate volunteers and organizations making a difference.
              Our platform uses innovative technology to match skills with needs, creating meaningful connections.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Make an Impact",
                description: "Connect with causes you care about and contribute your skills meaningfully."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Find Your Community",
                description: "Join a network of like-minded individuals passionate about creating change."
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Grow Your Skills",
                description: "Develop new abilities while contributing to important causes."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Track Your Journey",
                description: "Document your volunteer experiences and celebrate your contributions."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Volunteers */}
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-primary"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">For Volunteers</h3>
                <p className="text-gray-600 mb-6">
                  Share your skills, find meaningful opportunities, and make a difference in your community. Track your impact and build a volunteer portfolio.
                </p>
                <div className="flex gap-2">
                  <Link to="/sign-in?type=volunteer">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/sign-up?type=volunteer">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* For Organizations */}
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-secondary to-purple-400"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">For Organizations</h3>
                <p className="text-gray-600 mb-6">
                  Connect with skilled volunteers, streamline your recruitment process, and accomplish more with the right people on your team.
                </p>
                <div className="flex gap-2">
                  <Link to="/sign-in?type=organization">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/sign-up?type=organization">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to connect volunteers with organizations through our unique chatbot interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div 
                key={step} 
                className="relative flex flex-col items-center text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step === 1 ? "Create Your Profile" : 
                   step === 2 ? "Connect via Chatbot" : 
                   "Make an Impact"}
                </h3>
                <p className="text-gray-600">
                  {step === 1 ? "Sign up and create a detailed profile highlighting your skills and interests." : 
                   step === 2 ? "Use our AI-powered chatbot to find the perfect volunteer match for your needs." : 
                   "Connect with organizations, track your contributions, and see the difference you make."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community today and start your journey of meaningful volunteering.
          </p>
          <Link to="/sign-up">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
