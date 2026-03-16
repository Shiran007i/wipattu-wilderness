
export enum AppSection {
  HOME = 'home',
  SAFARI = 'safari',
  ACCOMMODATION = 'accommodation',
  FOOD_AND_DRINKS = 'food-and-drinks',
  EXPERIENCES = 'experiences',
  BOOKING = 'booking',
  ABOUT = 'about',
  CHECKOUT = 'checkout',
  TOUR_PLANNER = 'tour-planner',
  BLOG = 'blog',
  CONTACT_US = 'contact-us'
}

export interface SafariPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
  grounding?: any[];
}

export interface WildlifeAnalysis {
  species: string;
  description: string;
  habitat: string;
  funFact: string;
  conservationStatus: string;
}

export interface SelectedRoom {
  planId: string;
  name: string;
  price: number;
  count: number;
}

export interface TourPreferences {
  duration: number;
  interests: string[];
  budget: 'budget' | 'mid-range' | 'luxury';
  groupSize: number;
  specialRequests?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: {
    time: string;
    activity: string;
    description: string;
  }[];
  meals: string[];
  accommodation: string;
}

export interface TourItinerary {
  title: string;
  summary: string;
  days: ItineraryDay[];
  totalEstimatedPrice?: string;
}
