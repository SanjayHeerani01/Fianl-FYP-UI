import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Award, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Briefcase, 
  Heart, 
  Star, 
  MessageSquare, 
  Clock,
  Check
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    // Simulate saving profile
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          {!isEditing && (
            <Button 
              onClick={() => setIsEditing(true)}
              className="mt-4 md:mt-0"
            >
              Edit Profile
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="h-24 w-24 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300" 
                      alt="John Doe"
                      className="h-full w-full object-cover"
                    />
                  </Avatar>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-gray-500">Web Developer & Graphic Designer</p>
                  
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 text-sm">(4.9)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-600">john.doe@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-gray-600">New York, NY</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Availability</p>
                      <p className="text-sm text-gray-600">Weekends & Evenings</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Joined</p>
                      <p className="text-sm text-gray-600">January 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { skill: "Web Development", level: "Expert", endorsements: 12 },
                    { skill: "Graphic Design", level: "Advanced", endorsements: 8 },
                    { skill: "Project Management", level: "Intermediate", endorsements: 5 },
                    { skill: "Content Writing", level: "Advanced", endorsements: 7 },
                    { skill: "Social Media", level: "Advanced", endorsements: 10 }
                  ].map((skill, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{skill.skill}</div>
                        <div className="text-xs text-gray-500">{skill.level}</div>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        {skill.endorsements}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {isEditing ? (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium">
                          Location
                        </label>
                        <Input id="location" defaultValue="New York, NY" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="availability" className="text-sm font-medium">
                          Availability
                        </label>
                        <Select defaultValue="weekends">
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays</SelectItem>
                            <SelectItem value="weekends">Weekends & Evenings</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                            <SelectItem value="limited">Limited Availability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Profile Picture</label>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <img 
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300" 
                            alt="John Doe"
                            className="h-full w-full object-cover"
                          />
                        </Avatar>
                        <Button variant="outline" size="sm">
                          Change Photo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="bio" className="text-sm font-medium">
                        Bio
                      </label>
                      <Textarea
                        id="bio"
                        defaultValue="I'm a web developer with 5+ years of experience in creating responsive websites and web applications. I'm passionate about using technology for social good and am excited to volunteer my skills to help nonprofit organizations."
                        rows={5}
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-sm font-medium">Skills</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { skill: "Web Development", level: "Expert" },
                          { skill: "Graphic Design", level: "Advanced" },
                          { skill: "Project Management", level: "Intermediate" },
                          { skill: "Content Writing", level: "Advanced" },
                          { skill: "Social Media", level: "Advanced" }
                        ].map((skill, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Input defaultValue={skill.skill} className="flex-grow" />
                            <Select defaultValue={skill.level.toLowerCase()}>
                              <SelectTrigger className="w-[130px]">
                                <SelectValue placeholder="Skill level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                                <SelectItem value="expert">Expert</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full md:w-auto">
                        Add Skill
                      </Button>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile}>
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    I'm a web developer with 5+ years of experience in creating responsive websites and web applications. 
                    I'm passionate about using technology for social good and am excited to volunteer my skills to help 
                    nonprofit organizations.
                  </p>
                  <p className="text-gray-600 mt-4">
                    In my free time, I enjoy hiking, reading, and contributing to open source projects. I believe that 
                    volunteering is a great way to give back to the community while also expanding my network and skills.
                  </p>
                </CardContent>
              </Card>
            )}
            
            <Tabs defaultValue="experience">
              <TabsList className="mb-4">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        {
                          role: "Website Redesign",
                          org: "Environmental Action Coalition",
                          date: "Mar - Apr 2025",
                          description: "Completely redesigned the organization's website to improve user experience and accessibility. Implemented responsive design and modern web technologies to enhance performance."
                        },
                        {
                          role: "Social Media Campaign",
                          org: "Youth Mentorship Program",
                          date: "Jan - Feb 2025",
                          description: "Created graphics and content for a social media campaign that increased program visibility by 30%. Designed templates that the organization continues to use for their ongoing digital communications."
                        },
                        {
                          role: "Database Management",
                          org: "Local Food Bank",
                          date: "Nov - Dec 2024",
                          description: "Developed a new inventory management system that streamlined operations and reduced food waste by 15%. Trained staff on using the new system effectively."
                        }
                      ].map((experience, index) => (
                        <div key={index} className="border-l-4 border-primary pl-4 pb-2">
                          <h3 className="font-semibold text-lg">{experience.role}</h3>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span>{experience.org}</span>
                            <span className="mx-2">•</span>
                            <span>{experience.date}</span>
                          </div>
                          <p className="text-gray-600">{experience.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="portfolio">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Environmental Nonprofit Website",
                          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=500",
                          tags: ["Web Development", "Responsive Design"]
                        },
                        {
                          title: "Fundraising Campaign Assets",
                          image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=500",
                          tags: ["Graphic Design", "Marketing"]
                        },
                        {
                          title: "Volunteer Management System",
                          image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=500",
                          tags: ["Database", "Web Development"]
                        },
                        {
                          title: "Community Education Materials",
                          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
                          tags: ["Content Creation", "Design"]
                        }
                      ].map((project, index) => (
                        <div key={index} className="overflow-hidden rounded-lg border">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform hover:scale-110"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold">{project.title}</h3>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="achievements">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Top Contributor Award",
                          org: "VolunteerConnect",
                          date: "April 2025",
                          description: "Recognized for outstanding contributions to nonprofit organizations, with over 100 hours of volunteering in a single quarter."
                        },
                        {
                          title: "Technical Excellence Badge",
                          org: "Tech For Good Association",
                          date: "February 2025",
                          description: "Awarded for implementing innovative technical solutions that significantly improved operational efficiency for multiple nonprofits."
                        },
                        {
                          title: "Community Impact Recognition",
                          org: "City Council",
                          date: "December 2024",
                          description: "Honored for volunteer work that directly improved digital accessibility for local community organizations."
                        }
                      ].map((achievement, index) => (
                        <div key={index} className="flex">
                          <div className="mr-4 flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <Award className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{achievement.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <span>{achievement.org}</span>
                              <span className="mx-2">•</span>
                              <span>{achievement.date}</span>
                            </div>
                            <p className="text-gray-600">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
