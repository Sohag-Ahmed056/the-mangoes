export interface MangoProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  stock: number;
  category: string;
  rating: number;
  reviewsCount: number;
  weightOptions: string[];
  origin: string;
}
