export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'signatures' | 'cold' | 'food' | 'desserts';
  description: string;
  price?: string; // Indicative price e.g. "₹240" or placeholder if verified
  notes?: string;
  badge?: string;
  tags?: string[];
  isVegetarian?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  aspect: string;
}

export interface CoffeeFeature {
  origin: string;
  estate: string;
  altitude: string;
  roastLevel: string;
  process: string;
  notes: string[];
  brewMethods: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  platform: 'Google Review' | 'Instagram' | 'Specialty Coffee Guide';
  rating?: number;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes?: string;
  tag: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'Indoor Lounge' | 'Brew Bar Counter' | 'Garden Veranda';
  notes?: string;
}
