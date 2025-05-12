
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, X, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessage: Message = {
  id: 1,
  text: "Hi there! How can I help you with volunteering today?",
  sender: 'bot',
  timestamp: new Date()
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);
  
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
        "I found several volunteers who might be able to help with that.",
        "Would you like to see more information about our volunteer opportunities?",
        "For more detailed assistance, you can visit our full chatbot page.",
        "That's a great question! Let me help you find the right volunteer.",
        "I can connect you with experienced volunteers in that area."
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

  const handleFullChatbot = () => {
    navigate('/chatbot');
    setIsOpen(false);
  };
  
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <Button 
        onClick={toggleChat}
        className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        aria-label="Chat with us"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      
      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 sm:w-96 shadow-xl animate-scale-in">
          <CardHeader className="bg-primary/10 py-3 px-4 flex flex-row justify-between items-center border-b">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 bg-primary">
                <span className="text-primary-foreground text-sm">VC</span>
              </Avatar>
              <div>
                <h3 className="text-sm font-medium">Quick Chat</h3>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0" 
                onClick={toggleChat}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <ScrollArea className="h-64">
            <CardContent className="p-4 space-y-4">
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
            </CardContent>
          </ScrollArea>
          
          <CardFooter className="border-t p-3">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2 w-full">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={loading}
                className="flex-grow text-sm"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={loading || !input.trim()} 
                className="h-8 w-8"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
          
          <div className="p-3 pt-0 text-center">
            <Button 
              variant="link" 
              size="sm" 
              onClick={handleFullChatbot}
              className="text-xs text-primary"
            >
              Open full chatbot
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;
