
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the user type from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const userTypeParam = queryParams.get('type');
  const defaultTab = userTypeParam === 'volunteer' || userTypeParam === 'organization' ? userTypeParam : 'volunteer';

  const handleSignUp = (userType: string, e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setLoading(false);
      
      // In a real application, you would register the user here
      toast({
        title: "Account created successfully!",
        description: `Welcome to VolunteerConnect, ${userType}!`,
      });
      
      // Redirect based on user type
      if (userType === 'volunteer') {
        navigate('/dashboard');
      } else {
        navigate('/requests');
      }
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join our community and start your volunteering journey
          </p>
        </div>
        
        <Card className="overflow-hidden shadow-lg animate-fade-in">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
            </TabsList>
            
            {/* Volunteer Sign Up Form */}
            <TabsContent value="volunteer" className="p-0">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleSignUp('volunteer', e)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="volunteer-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="volunteer-email" type="email" required />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="volunteer-password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input id="volunteer-password" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="volunteer-confirm-password" className="text-sm font-medium">
                        Confirm Password
                      </label>
                      <Input id="volunteer-confirm-password" type="password" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="volunteer-skills" className="text-sm font-medium">
                      Skills (Select your primary skill area)
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a skill area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="community">Community</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="volunteer-bio" className="text-sm font-medium">
                      Short Bio (Tell us about yourself)
                    </label>
                    <Textarea id="volunteer-bio" placeholder="Share your experience, interests, and why you want to volunteer" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="volunteer-terms" required />
                    <label htmlFor="volunteer-terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Creating account..." : "Sign Up as Volunteer"}
                  </Button>
                  
                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <Link to="/sign-in?type=volunteer" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </span>
                  </div>
                </form>
              </CardContent>
            </TabsContent>
            
            {/* Organization Sign Up Form */}
            <TabsContent value="organization" className="p-0">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleSignUp('organization', e)} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="org-name" className="text-sm font-medium">
                      Organization Name
                    </label>
                    <Input id="org-name" required />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="org-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="org-email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="org-phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="org-phone" type="tel" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="org-password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input id="org-password" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="org-confirm-password" className="text-sm font-medium">
                        Confirm Password
                      </label>
                      <Input id="org-confirm-password" type="password" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="org-type" className="text-sm font-medium">
                      Organization Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nonprofit">Nonprofit</SelectItem>
                        <SelectItem value="education">Educational</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="community">Community Group</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="org-description" className="text-sm font-medium">
                      Organization Description
                    </label>
                    <Textarea 
                      id="org-description" 
                      placeholder="Tell us about your organization, mission, and the types of volunteers you're looking for" 
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="org-website" className="text-sm font-medium">
                      Website (optional)
                    </label>
                    <Input id="org-website" type="url" placeholder="https://" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="org-terms" required />
                    <label htmlFor="org-terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Creating account..." : "Sign Up as Organization"}
                  </Button>
                  
                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <Link to="/sign-in?type=organization" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </span>
                  </div>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
        
        <div className="text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
