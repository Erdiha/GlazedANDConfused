export interface IImages {
  images: {
    title: string;
    src: string;
    alt: string;
    description: string;
  }[];
}
export interface ImageProps {
  src: string;
  name: string;
  desc: string;
}

export interface ImageCarouselProps {
  images: Image[];
  whatComp: string;
}

export interface SharedContainerProps extends IImages {
  whatComp: string;
}

export interface IAddress {
  label: string;
}
export interface AddressProps {
  address_line1: string;
  address_line2: string;
  city: string;
  country: string;
  country_code: string;
  county: string;
  county_code: string;
}

export interface IAddress {
  label: string;
}

export interface EmailResponse {
  openContainer: boolean;
  mailSent: boolean;
}

export interface FormData {
  name: string;
  email: string;
  address: string;
  eventDate: string;
  eventTime: string;
  guestCount: string;
  hearAboutUs: string;
  eventDescription: string;
  isMobile: boolean;
  browserType: string;
}
