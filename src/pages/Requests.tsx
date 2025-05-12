
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { 
  Check, 
  X, 
  MessageSquare, 
  Calendar, 
  Clock, 
  MapPin, 
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface PendingRequest {
  id: number;
  volunteer: {
    name: string;
    avatar?: string;
    rating: number;
    skills: string[];
  };
  project: string;
  timeCommitment: string;
  location: string;
  requestDate: string;
}

const Requests: React.FC = () => {
  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([
    {
      id: 1,
      volunteer: {
        name: "Emily Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
        rating: 4.8,
        skills: ["Graphic Design", "Social Media"]
      },
      project: "Social Media Campaign",
      timeCommitment: "10 hrs/week for 2 months",
      location: "Remote",
      requestDate: "May 10, 2025"
    },
    {
      id: 2,
      volunteer: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
        rating: 4.5,
        skills: ["Web Development", "Database Management"]
      },
      project: "Website Redesign",
      timeCommitment: "15 hrs/week for 6 weeks",
      location: "Hybrid",
      requestDate: "May 12, 2025"
    },
    {
      id: 3,
      volunteer: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300",
        rating: 5.0,
        skills: ["Event Planning", "Fundraising"]
      },
      project: "Summer Fundraiser",
      timeCommitment: "20 hrs/week for 3 weeks",
      location: "In-person",
      requestDate: "May 15, 2025"
    }
  ]);
  
  const [approvedRequests, setApprovedRequests] = useState<PendingRequest[]>([]);
  const { toast } = useToast();
  
  const handleApprove = (requestId: number) => {
    const request = pendingRequests.find(req => req.id === requestId);
    if (request) {
      setPendingRequests(pendingRequests.filter(req => req.id !== requestId));
      setApprovedRequests([...approvedRequests, request]);
      
      toast({
        title: "Request approved!",
        description: `You've approved ${request.volunteer.name} for the ${request.project} project.`,
      });
    }
  };
  
  const handleReject = (requestId: number) => {
    const request = pendingRequests.find(req => req.id === requestId);
    if (request) {
      setPendingRequests(pendingRequests.filter(req => req.id !== requestId));
      
      toast({
        title: "Request rejected",
        description: `You've declined the request from ${request.volunteer.name}.`,
      });
    }
  };

  return (
    <div className="py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Volunteer Requests</h1>
            <p className="text-gray-600">Manage volunteer applications and ongoing projects</p>
          </div>
          <Button className="mt-4 md:mt-0">
            Post New Opportunity
          </Button>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search volunteers, projects, or skills"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="pending" className="mb-8">
          <TabsList>
            <TabsTrigger value="pending">
              Pending Requests
              {pendingRequests.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {pendingRequests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved
              {approvedRequests.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {approvedRequests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            {pendingRequests.length === 0 ? (
              <div className="bg-white rounded-md p-8 text-center">
                <p className="text-gray-500">No pending requests at this time.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {pendingRequests.map(request => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-start mb-4 md:mb-0">
                          <Avatar className="h-12 w-12 mr-4">
                            {request.volunteer.avatar ? (
                              <img 
                                src={request.volunteer.avatar} 
                                alt={request.volunteer.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span>{request.volunteer.name.charAt(0)}</span>
                            )}
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{request.volunteer.name}</h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 text-yellow-500 mr-1"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {request.volunteer.rating}
                              </span>
                              <span className="mx-2">•</span>
                              <span>Applied {request.requestDate}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {request.volunteer.skills.map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleApprove(request.id)}
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleReject(request.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Decline
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <Calendar className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Project</p>
                            <p className="text-sm text-gray-600">{request.project}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <Clock className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Time Commitment</p>
                            <p className="text-sm text-gray-600">{request.timeCommitment}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <MapPin className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm text-gray-600">{request.location}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="approved">
            {approvedRequests.length === 0 ? (
              <div className="bg-white rounded-md p-8 text-center">
                <p className="text-gray-500">No approved requests at this time.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {approvedRequests.map(request => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-start mb-4 md:mb-0">
                          <Avatar className="h-12 w-12 mr-4">
                            {request.volunteer.avatar ? (
                              <img 
                                src={request.volunteer.avatar} 
                                alt={request.volunteer.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span>{request.volunteer.name.charAt(0)}</span>
                            )}
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-semibold mr-2">{request.volunteer.name}</h3>
                              <Badge className="bg-green-600">Approved</Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 text-yellow-500 mr-1"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {request.volunteer.rating}
                              </span>
                              <span className="mx-2">•</span>
                              <span>Approved Today</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <Calendar className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Project</p>
                            <p className="text-sm text-gray-600">{request.project}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <Clock className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Time Commitment</p>
                            <p className="text-sm text-gray-600">{request.timeCommitment}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <MapPin className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm text-gray-600">{request.location}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="bg-white rounded-md p-8 text-center">
              <p className="text-gray-500">No completed projects yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Requests;
