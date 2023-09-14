// components/Layout.tsx

import React from 'react';
import SEO from './SEO';
import Head from 'next/head';
import DonutIcon from '../sharedComponents/DonutIcon';
import { Analytics } from '@vercel/analytics/react';

type LayoutProps = {
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          sizes="180x180"
          href="/homerdonut.png"
          type="image/svg+xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/homerdonut.png" />
        {/* Include additional sizes if needed */}
        <SEO title={title} description={description} keywords={keywords} />
      </Head>

      {/* Your layout structure */}
      <main>
        <Analytics />
        {children}
      </main>
    </div>
  );
};

export default Layout;
