
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Send } from 'lucide-react';

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
      <div className="max-w-4xl mx-auto w-full flex flex-col flex-grow">
        <h1 className="text-3xl font-bold mb-6">Volunteer Matching Assistant</h1>
        
        <Card className="flex-grow flex flex-col">
          <CardHeader className="bg-primary/10 border-b">
            <CardTitle className="flex items-center">
              <Avatar className="h-8 w-8 mr-2 bg-primary">
                <span className="text-primary-foreground text-sm">VC</span>
              </Avatar>
              VolunteerConnect Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-grow flex flex-col p-0">
            {/* Messages container */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
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
                onClick={() => setInput(suggestion)}
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
