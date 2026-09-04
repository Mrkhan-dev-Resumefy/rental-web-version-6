export type PageId = 'home' | 'bounce-houses' | 'movie-screen' | 'popcorn-cart' | 'contact';

export interface RentalItem {
  id: string;
  name: string;
  shortTitle: string;
  tagline: string;
  pageId: PageId;
  description: string;
  image: string;
  galleryImages: string[];
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  setupRequirements: string;
  powerRequirements: string;
  idealFor: string;
  capacity?: string;
  dimensions?: string;
  pairingSuggestion?: {
    text: string;
    targetPage: PageId;
    targetName: string;
  };
}

export interface BookingFormState {
  fullName: string;
  phoneNumber: string;
  eventDate: string;
  city: string;
  items: {
    largeBounce: boolean;
    smallBounce: boolean;
    movieScreen: boolean;
    popcornCart: boolean;
  };
  message: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  location: string;
  tag: string;
  imageUrl: string;
  likes: number;
}
