// components/Layout.tsx

import React from 'react';
import SEO from './SEO';
import Head from 'next/head';
import DonutIcon from '../sharedComponents/DonutIcon';

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
          rel='icon'
          sizes='180x180'
          href='/homerdonut.png'
          type='image/svg+xml'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='/homerdonut.png' />
        {/* Include additional sizes if needed */}
        <SEO title={title} description={description} keywords={keywords} />
      </Head>

      {/* Your layout structure */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
