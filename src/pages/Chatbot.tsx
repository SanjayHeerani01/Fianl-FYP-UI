
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Send, Bot, MessageSquare, User, Settings, Info, Search } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hello! I'm the VolunteerConnect assistant. How can I help you find volunteers today?", 
      sender: 'bot', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "I found several volunteers who match your criteria. Would you like to see their profiles?",
        "Could you tell me more about the specific skills you're looking for?",
        "What time commitment are you expecting from volunteers?",
        "I have 3 volunteers with experience in that area. Would you like me to connect you with them?",
        "Based on your needs, I recommend focusing on volunteers with backgrounds in web development and graphic design.",
        "When would you need these volunteers to start?"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    });
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Volunteer Matching Assistant</h1>
            <p className="text-gray-600 mt-1">
              Get matched with the perfect volunteers for your organization's needs
            </p>
          </div>
          <Avatar className="h-12 w-12 bg-primary hidden md:flex">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </Avatar>
        </div>
        
        <Tabs 
          defaultValue="chat" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="flex-grow flex flex-col"
        >
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Chat
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Info className="h-4 w-4" /> How It Works
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" /> Quick Search
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="flex-grow flex flex-col mt-4">
            <Card className="flex-grow flex flex-col">
              <CardHeader className="bg-primary/10 border-b">
                <CardTitle className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2 bg-primary">
                    <span className="text-primary-foreground text-sm">VC</span>
                  </Avatar>
                  VolunteerConnect Assistant
                </CardTitle>
                <CardDescription>
                  Describe your volunteer needs in detail for better matches
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col p-0">
                {/* Messages container */}
                <div className="flex-grow overflow-y-auto p-4 space-y-4 min-h-[400px]">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary/10 text-foreground'
                        }`}
                      >
                        <div className="text-sm">{message.text}</div>
                        <div className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-primary-foreground/70' : 'text-gray-500'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-3 bg-secondary/10 text-foreground">
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input area */}
                <div className="border-t p-4">
                  <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      disabled={loading}
                      className="flex-grow"
                    />
                    <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="info" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>How Our Volunteer Matching Works</CardTitle>
                <CardDescription>
                  Our AI-powered system helps connect you with the perfect volunteers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Describe Your Needs",
                      description: "Tell our AI assistant what kind of volunteer work you need help with, including skills required, time commitment, and project details.",
                      icon: <MessageSquare className="h-8 w-8 text-primary" />
                    },
                    {
                      title: "AI-Powered Matching",
                      description: "Our intelligent system analyzes your requirements and matches them with our database of skilled volunteers.",
                      icon: <Bot className="h-8 w-8 text-primary" />
                    },
                    {
                      title: "Connect & Collaborate",
                      description: "Review recommended volunteer profiles, send requests, and start collaborating on meaningful projects.",
                      icon: <User className="h-8 w-8 text-primary" />
                    }
                  ].map((step, index) => (
                    <Card key={index} className="bg-white border shadow-sm">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            {step.icon}
                          </div>
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg mt-6">
                  <h3 className="font-medium mb-2">Privacy & Security</h3>
                  <p className="text-sm text-gray-600">
                    Your data is securely processed to make accurate matches. We never share your personal 
                    information without consent. All volunteer connections are monitored for quality assurance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="search" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Quick Volunteer Search</CardTitle>
                <CardDescription>
                  Find volunteers by skill or availability without using the chat interface
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Search by Skill</label>
                    <div className="flex space-x-2">
                      <Input placeholder="e.g., web development, marketing..." />
                      <Button>Search</Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Search by Availability</label>
                    <div className="flex space-x-2">
                      <Input placeholder="e.g., weekends, evenings..." />
                      <Button>Search</Button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {[
                    "Web Development", 
                    "Graphic Design",
                    "Social Media",
                    "Event Planning",
                    "Content Writing",
                    "Fundraising"
                  ].map((skill, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="justify-start text-left"
                      onClick={() => setActiveTab('chat')}
                    >
                      {skill}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Suggested Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "I need a web developer for our nonprofit",
              "Looking for volunteers with marketing skills",
              "Need help with an upcoming fundraising event",
              "Searching for remote volunteer opportunities",
              "What skills are most in demand for volunteers?",
              "How do I create a volunteer request?"
            ].map((suggestion, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="justify-start text-left h-auto py-2"
                onClick={() => {
                  setInput(suggestion);
                  setActiveTab('chat');
                }}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
