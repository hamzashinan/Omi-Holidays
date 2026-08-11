export interface Tour {
  id: number;
  title: string;
  slug: string;
  location: string;
  region: string;
  category: string;
  duration_days: number;
  group_size: number;
  price: string;
  rating: string;
  description: string;
  highlights: string[];
  image_url: string;
  is_featured: boolean;
  available_from?: string
  available_to?: string
}