import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userTypeParam = queryParams.get('type');
  const defaultTab =
    userTypeParam === 'volunteer' || userTypeParam === 'organization'
      ? userTypeParam
      : 'volunteer';

  const handleSignUp = async (userType: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    data.termsAccepted = true;

    const url =
      userType === 'volunteer'
        ? 'http://localhost:8081/api/auth/register/volunteer'
        : 'http://localhost:8081/api/auth/register/organization';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      toast({
        title: 'Account created!',
        description: `Welcome ${userType === 'volunteer' ? 'volunteer' : 'organization'}!`,
      });

      navigate(userType === 'volunteer' ? '/sign-in' : '/requests');
    } catch (error) {
      toast({
        title: 'Error',
        description: (error as Error).message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
          <p className="text-sm text-gray-600 mt-2">
            Join our community and start your volunteering journey
          </p>
        </div>

        <Card className="shadow-lg animate-fade-in">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
            </TabsList>

            {/* Volunteer Form */}
            <TabsContent value="volunteer" className="p-0">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleSignUp('volunteer', e)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" name="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="volunteer-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="volunteer-email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="volunteer-password" className="text-sm font-medium">
                      Password
                    </label>
                    <Input id="volunteer-password" name="password" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="volunteer-skills" className="text-sm font-medium">
                      Skills
                    </label>
                    <Input id="volunteer-skills" name="skills" placeholder="e.g., Teaching, IT" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="volunteer-bio" className="text-sm font-medium">
                      Bio
                    </label>
                    <Textarea
                      id="volunteer-bio"
                      name="bio"
                      placeholder="Tell us about yourself"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="volunteer-terms" required />
                    <label htmlFor="volunteer-terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-blue-500 underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-blue-500 underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up as Volunteer'}
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/sign-in?type=volunteer" className="text-blue-500 underline">
                      Sign in
                    </Link>
                  </p>
                </form>
              </CardContent>
            </TabsContent>

            {/* Organization Form */}
            <TabsContent value="organization" className="p-0">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleSignUp('organization', e)} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="org-name" className="text-sm font-medium">
                      Organization Name
                    </label>
                    <Input id="org-name" name="organizationName" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="org-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="org-email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="org-phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="org-phone" name="phoneNumber" type="tel" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="org-password" className="text-sm font-medium">
                      Password
                    </label>
                    <Input id="org-password" name="password" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="org-skills" className="text-sm font-medium">
                      Skills
                    </label>
                    <Input id="org-skills" name="skills" placeholder="e.g., Environment, Health" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="org-description" className="text-sm font-medium">
                      Organization Description
                    </label>
                    <Textarea
                      id="org-description"
                      name="description"
                      placeholder="Tell us about your mission"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="org-website" className="text-sm font-medium">
                      Website (optional)
                    </label>
                    <Input id="org-website" name="website" type="url" placeholder="https://" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="org-terms" required />
                    <label htmlFor="org-terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-blue-500 underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-blue-500 underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up as Organization'}
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/sign-in?type=organization" className="text-blue-500 underline">
                      Sign in
                    </Link>
                  </p>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
