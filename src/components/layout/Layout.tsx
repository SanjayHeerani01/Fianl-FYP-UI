
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollArea className="flex-grow">
        <main>{children}</main>
      </ScrollArea>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
