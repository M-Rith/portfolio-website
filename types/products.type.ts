interface Url {
  name: string;
  url: string;
}
interface imagesType {
  url: string;
  name: string;
}

export interface ProductTypes {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  technologyStack: string[];
  images: imagesType[];
  url: Url[];
  highlight?: string[];
}
