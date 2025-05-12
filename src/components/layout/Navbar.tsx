
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, MessageSquare } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  auth?: boolean;
  userType?: 'volunteer' | 'organization';
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Mock authentication state (replace with actual auth state)
  const isAuthenticated = false;
  const userType = null; // 'volunteer' or 'organization'

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Dashboard', href: '/dashboard', auth: true, userType: 'volunteer' },
    { label: 'Requests', href: '/requests', auth: true, userType: 'organization' },
    { label: 'Chatbot', href: '/chatbot', auth: true, userType: 'organization' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const isActive = (path: string) => location.pathname === path;

  const filteredNavItems = navItems.filter(item => 
    !item.auth || (isAuthenticated && (!item.userType || item.userType === userType))
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">Volunteer</span>
              <span className="text-secondary font-bold text-xl">Connect</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {filteredNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-white bg-primary'
                      : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    Profile
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/sign-in">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
                <Link to="/sign-up">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="inline-flex items-center justify-center p-2">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg rounded-b-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {filteredNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'text-white bg-primary'
                    : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {!isAuthenticated && (
              <>
                <Link
                  to="/sign-in"
                  onClick={closeMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  onClick={closeMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
