export interface Service {
  _id: string;
  createdAt: Date;
  name: string;
  startPrice: number;
  rating: number;
  description: string;
  slug: string;
  image: string;
  category: string;
  offer: string;
  overview: string;
  background: string;
  url: string;

  services: string[];
}
