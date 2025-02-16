interface Url {
  name: string;
  url: string;
}

export interface ProductTypes {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  technologyStack: string[];
  images: string[];
  url: Url[];
  highlight?: string[];
}
