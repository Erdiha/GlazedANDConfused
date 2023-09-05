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
}

export interface SharedContainerProps extends IImages {
  whatComp: string;
}
