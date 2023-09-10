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
