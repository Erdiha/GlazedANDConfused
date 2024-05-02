import React from 'react';
import Footer from '../sharedComponents/Footer';
import Nav from '../sharedComponents/Nav';
import SEO from './SEO';

interface LayoutProps {
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, keywords, children }) => {
  return (
    <div>
      <SEO title={title} description={description} keywords={keywords} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
