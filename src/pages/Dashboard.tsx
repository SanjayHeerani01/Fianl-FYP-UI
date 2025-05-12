
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, Award, ChevronRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Volunteer Dashboard</h1>
            <p className="text-gray-600">Welcome back, John! Here's your volunteering summary.</p>
          </div>
          <Button className="mt-4 md:mt-0">Update Profile</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold">48</h2>
              <p className="text-gray-600">Hours Volunteered</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold">12</h2>
              <p className="text-gray-600">Completed Projects</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold">5</h2>
              <p className="text-gray-600">Skills Endorsed</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="active" className="mb-8">
          <TabsList>
            <TabsTrigger value="active">Active Requests</TabsTrigger>
            <TabsTrigger value="completed">Completed Projects</TabsTrigger>
            <TabsTrigger value="reviews">Reviews & Feedback</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Website Development for EcoAction</CardTitle>
                    <Badge>In Progress</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Organization</p>
                      <p>EcoAction Environmental Group</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p>Apr 15 - May 30, 2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Progress</p>
                      <div className="flex items-center">
                        <Progress value={65} className="flex-grow mr-4" />
                        <span>65%</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Social Media Campaign for Hope House</CardTitle>
                    <Badge variant="outline">Starting Soon</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Organization</p>
                      <p>Hope House Community Center</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p>May 20 - Jun 20, 2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Progress</p>
                      <div className="flex items-center">
                        <Progress value={0} className="flex-grow mr-4" />
                        <span>0%</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  project: "Fundraising Event for Local School",
                  organization: "Lincoln Elementary PTA",
                  date: "Mar 10 - Apr 2, 2025",
                  hours: 18
                },
                {
                  project: "Database Setup for Animal Shelter",
                  organization: "Happy Paws Rescue",
                  date: "Feb 5 - Feb 28, 2025",
                  hours: 12
                },
                {
                  project: "Grant Writing Workshop",
                  organization: "Community Foundation",
                  date: "Jan 15 - Jan 20, 2025",
                  hours: 8
                }
              ].map((project, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{project.project}</h3>
                      <p className="text-sm text-gray-600">{project.organization} • {project.date}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">{project.hours} hours</span>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="space-y-6">
              {[
                {
                  organization: "EcoAction Environmental Group",
                  project: "Website Development",
                  date: "Apr 10, 2025",
                  rating: 5,
                  comment: "John did an outstanding job creating our new website. He was responsive, creative, and delivered ahead of schedule. We're already seeing increased engagement!"
                },
                {
                  organization: "Lincoln Elementary PTA",
                  project: "Fundraising Event",
                  date: "Apr 5, 2025",
                  rating: 4,
                  comment: "Very helpful and dedicated to our cause. John brought great ideas to our fundraiser and helped us exceed our goal by 20%."
                },
                {
                  organization: "Happy Paws Rescue",
                  project: "Database Setup",
                  date: "Mar 1, 2025",
                  rating: 5,
                  comment: "John's technical expertise was invaluable. He created a user-friendly database system that has streamlined our entire adoption process."
                }
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{review.organization}</h3>
                        <p className="text-sm text-gray-600">{review.project} • {review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">"{review.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      role: "Graphic Designer",
                      org: "Youth Arts Initiative",
                      location: "Remote",
                      date: "May 20 - Jun 30, 2025"
                    },
                    {
                      role: "Technical Mentor",
                      org: "Code4Kids",
                      location: "In-person, City Center",
                      date: "Jun 10 - Aug 15, 2025"
                    },
                    {
                      role: "Event Coordinator",
                      org: "Community Health Network",
                      location: "Hybrid",
                      date: "Jul 5 - Jul 25, 2025"
                    }
                  ].map((opportunity, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{opportunity.role}</h3>
                        <p className="text-sm text-gray-600">{opportunity.org}</p>
                        <div className="flex text-xs text-gray-500 mt-1">
                          <span className="mr-2">{opportunity.location}</span>
                          <span>•</span>
                          <span className="ml-2">{opportunity.date}</span>
                        </div>
                      </div>
                      <Button size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { skill: "Web Development", endorsements: 12 },
                    { skill: "Graphic Design", endorsements: 8 },
                    { skill: "Project Management", endorsements: 5 },
                    { skill: "Content Writing", endorsements: 7 },
                    { skill: "Social Media", endorsements: 10 }
                  ].map((skill, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{skill.skill}</span>
                      <Badge variant="outline">{skill.endorsements} endorsements</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
