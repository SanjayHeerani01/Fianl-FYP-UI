
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    toast({
      title: "Message sent!",
      description: "We've received your message and will get back to you soon.",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions or feedback? We're here to help. Reach out to our team using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-sm font-medium">
                    Inquiry Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="volunteer">Volunteer Support</SelectItem>
                      <SelectItem value="organization">Organization Support</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  You can reach out to us directly using the following contact details or visit our office during business hours.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardContent className="flex items-start p-4">
                      <MapPin className="h-5 w-5 text-primary mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-gray-600">123 Volunteer Street</p>
                        <p className="text-gray-600">Suite 456</p>
                        <p className="text-gray-600">City, State 12345</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start p-4">
                      <Phone className="h-5 w-5 text-primary mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-600">Main: (555) 123-4567</p>
                        <p className="text-gray-600">Support: (555) 987-6543</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start p-4">
                      <Mail className="h-5 w-5 text-primary mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-gray-600">info@volunteerconnect.com</p>
                        <p className="text-gray-600">support@volunteerconnect.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start p-4">
                      <Clock className="h-5 w-5 text-primary mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9AM - 5PM</p>
                        <p className="text-gray-600">Saturday: 10AM - 2PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden border shadow-sm h-[300px] bg-gray-100">
                  {/* In a real application, you would embed a map here */}
                  <div className="h-full w-full flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I create an account?",
                answer: "Creating an account is simple. Click the 'Sign Up' button in the top right corner of our website and follow the registration process for either volunteers or organizations."
              },
              {
                question: "Is the service free to use?",
                answer: "Yes, our platform is free for both volunteers and organizations. We believe in making volunteering accessible to everyone."
              },
              {
                question: "How does the matching process work?",
                answer: "Our AI-powered chatbot analyzes volunteer profiles and organization needs to suggest optimal matches based on skills, interests, location, and availability."
              },
              {
                question: "Can I volunteer remotely?",
                answer: "Absolutely! Many opportunities on our platform can be completed remotely, making it easy to volunteer from anywhere."
              },
              {
                question: "How do I know if a volunteer is qualified?",
                answer: "Volunteers can showcase their skills through verified credentials, portfolios, and references. Our platform also includes a review system."
              },
              {
                question: "What if I need to cancel a volunteer commitment?",
                answer: "We understand that plans change. Please notify the organization as soon as possible through our messaging system if you need to cancel."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
