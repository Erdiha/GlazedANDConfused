export interface PageMetadata {
    title: string;
    description: string;
    keywords: string;
  }
  
  export const pageMetadata: { [key: string]: PageMetadata } = {
   '/': {
    title: 'Home Page - Fresh Mini Donuts Delivered Fast',
    description: 'Explore our mini donut truck services and fresh donut delivery options. Perfect for parties, corporate events, and family gatherings.',
    keywords: 'mini donut, fresh donuts, donut truck, donut catering, event donuts',
  },
  '/home': {
    title: 'Welcome to Our Donut Shop',
    description: 'Enjoy the best mini donuts in town. Visit us or order online for quick delivery to your doorstep!',
    keywords: 'order donuts online, mini donut shop, fresh mini donuts, donut delivery service',
  },
  '/about': {
    title: 'About Us - Your Trusted Donut Catering Service',
    description: 'Learn about our passion for donut making, our history, and what makes us special. We cater to all events with custom donut options.',
    keywords: 'about mini donut truck, our donut history, donut catering services, quality donuts',
  },
  '/services': {
    title: 'Our Services - Custom Donut Catering for Any Occasion',
    description: 'Discover our wide range of donut services. From weddings to corporate events, we provide customized donut solutions.',
    keywords: 'donut catering service, custom donuts, wedding donuts, corporate event donuts',
  },
  '/contact': {
    title: 'Contact Us - Get in Touch for Donut Orders & More',
    description: 'Have questions? Contact us for more information about our donut services or to place an order.',
    keywords: 'contact donut truck, donut service inquiry, order donuts, donut shop contact',
    },
    '/donuts': {
    title: 'Donuts - Glazed & Confused',
    description: 'Discover our delicious donuts menu.',
    keywords: ' donut truck, donut inquiry, order donuts, donut shop',
  },
    // Add metadata for other pages here
  };
  