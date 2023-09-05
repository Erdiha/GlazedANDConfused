export interface PageMetadata {
    title: string;
    description: string;
    keywords: string;
  }
  
  export const pageMetadata: { [key: string]: PageMetadata } = {
    '/': {
      title: 'Home Page Title',
      description: 'Home Page Description',
      keywords: 'mini donut, donut, donut catering, donut truck, mini donut truck, fresh donuts',
    },
    '/about': {
      title: 'About Page Title',
      description: 'About Page Description',
      keywords: 'mini donut, donut, about us',
    },
    '/clients': {
      title: 'Clients Page Title',
      description: 'Clients Page Description',
      keywords: 'mini donut, donut, our clients',
    },
    // Add metadata for other pages here
  };
  