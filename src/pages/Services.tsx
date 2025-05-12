
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, Award, BarChart, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover how our platform connects volunteers with organizations through innovative technology and personalized matching.
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How the Chatbot Works</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI-powered chatbot is at the heart of VolunteerConnect, making it easy for organizations to find the perfect volunteers for their needs.
              </p>
              <ol className="space-y-4">
                {[
                  "Share your volunteering needs with the chatbot in conversational language",
                  "The AI analyzes your requirements and matches them with volunteer profiles",
                  "Review suggested volunteer profiles with compatibility scores and skills",
                  "Send requests to volunteers directly through the platform",
                  "Track responses and coordinate details all in one place"
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Link to="/chatbot">
                  <Button size="lg">Try the Chatbot</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              {/* Mockup of chatbot conversation */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="border-b pb-2 mb-4">
                  <h3 className="font-semibold">VolunteerConnect Chatbot</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Hi there! I'm the VolunteerConnect assistant. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">I'm looking for a volunteer with graphic design skills for our environmental nonprofit.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Great! I can help with that. Could you tell me more about the specific project and time commitment needed?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">We need help designing social media graphics for a 3-month campaign. Approximately 5-10 hours per week.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">I found 3 volunteers who match your needs. They all have experience with environmental campaigns and social media graphics...</p>
                    </div>
                  </div>
                </div>
                <div className="border-t mt-4 pt-3">
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary" 
                    />
                    <button className="bg-primary text-white rounded-r-lg px-4 py-2">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Expertise Areas */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Volunteer Expertise Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Technology",
                skills: ["Web Development", "App Development", "Data Analysis", "IT Support", "Digital Marketing"]
              },
              {
                category: "Creative",
                skills: ["Graphic Design", "Content Writing", "Photography", "Video Production", "Social Media"]
              },
              {
                category: "Business",
                skills: ["Project Management", "Fundraising", "Strategic Planning", "Financial Analysis", "Marketing"]
              },
              {
                category: "Education",
                skills: ["Tutoring", "Curriculum Development", "Workshop Facilitation", "Language Teaching", "Mentoring"]
              },
              {
                category: "Community",
                skills: ["Event Planning", "Community Outreach", "Volunteer Coordination", "Advocacy", "Crisis Support"]
              },
              {
                category: "Health",
                skills: ["Healthcare Support", "Mental Health Support", "Nutrition Education", "Fitness Instruction", "First Aid"]
              }
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{area.category}</h3>
                  <ul className="space-y-1">
                    {area.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Education Nonprofit Director",
                quote: "The chatbot connected us with a web developer volunteer who completely transformed our outdated website. The matching process was seamless, and we found the perfect fit for our needs.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300"
              },
              {
                name: "Michael Chen",
                role: "Web Developer Volunteer",
                quote: "I wanted to use my coding skills to help causes I care about. Through VolunteerConnect, I found a nonprofit that needed exactly my skill set, and the impact was immediate and measurable.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
              },
              {
                name: "Community Food Bank",
                role: "Nonprofit Organization",
                quote: "We needed help organizing our annual fundraiser. The platform matched us with an event planning volunteer who exceeded all our expectations. We raised 50% more than last year!",
                image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=300"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Behind the Chatbot */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technology Behind the Chatbot</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "Natural Language Processing",
                description: "Our chatbot understands conversational language, making it easy for users to describe their needs without specialized terms."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Advanced Matching Algorithm",
                description: "We use AI to match volunteer skills and experience with organization needs, considering factors like location, availability, and interests."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Skill Verification",
                description: "Our platform verifies volunteer skills through endorsements, reviews, and portfolio samples for quality assurance."
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Impact Analytics",
                description: "Both volunteers and organizations can track measurable outcomes of their collaborations through our analytics dashboard."
              },
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Adaptive Learning",
                description: "Our system continuously improves its matching capability by learning from successful volunteer-organization partnerships."
              }
            ].map((tech, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find the Perfect Match?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a volunteer looking to share your skills or an organization in need of support, our platform makes connections that matter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/sign-up">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/chatbot">
              <Button variant="secondary" size="lg">
                Try the Chatbot
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
