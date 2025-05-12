
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">About</h3>
            <div className="flex items-center mb-5">
              <span className="text-primary font-bold text-xl">Volunteer</span>
              <span className="text-secondary font-bold text-xl">Connect</span>
            </div>
            <p className="text-sm text-gray-500">
              Connecting passionate volunteers with organizations making a difference in our communities.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-500">123 Volunteer St, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-500">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-500">info@volunteerconnect.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Subscribe</h3>
              <form className="mt-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 flex-1"
                  />
                  <button type="submit" className="btn-primary py-2 px-4">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-center text-gray-400">
            &copy; {currentYear} VolunteerConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
