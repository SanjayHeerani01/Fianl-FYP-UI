import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userTypeParam = queryParams.get('type');
  const defaultTab = userTypeParam === 'volunteer' || userTypeParam === 'organization' ? userTypeParam : 'volunteer';

  const handleSignIn = async (userType: string, e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();

      // Save token to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userType', userType);

      toast({
        title: "Signed in successfully!",
        description: `Welcome back, ${userType}!`,
      });

      // Navigate based on userType
      if (userType === 'volunteer') {
        navigate('/dashboard');
      } else {
        navigate('/requests');
      }
    } catch (error: any) {
      toast({
        title: 'Login Failed',
        description: error.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue your journey
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg animate-fade-in">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
            </TabsList>

            <TabsContent value="volunteer" className="p-0">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleSignIn('volunteer', e)} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="volunteer-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="volunteer-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="volunteer-password" className="text-sm font-medium">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="volunteer-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In as Volunteer"}
                  </Button>
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <Link to="/sign-up?type=volunteer" className="text-primary hover:underline">
                        Sign up
                      </Link>
                    </span>
                  </div>
                </form>
              </CardContent>
            </TabsContent>

            <TabsContent value="organization" className="p-0">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleSignIn('organization', e)} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="org-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="org-email"
                      type="email"
                      placeholder="organization@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="org-password" className="text-sm font-medium">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="org-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In as Organization"}
                  </Button>
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <Link to="/sign-up?type=organization" className="text-primary hover:underline">
                        Sign up
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

export default SignIn;
