export interface Attraction {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: Category[];
  rating: number;
  location: Location;
  coordinates: Coordinates;
  photos: string[];
  price: string;
  hours: Hour[];
  transactions: any[];
  special_hours: Specialhour[];
}

interface Specialhour {
  date: string;
  is_closed?: any;
  start: string;
  end: string;
  is_overnight: boolean;
}

interface Hour {
  open: Open[];
  hours_type: string;
  is_open_now: boolean;
}

interface Open {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Location {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
  cross_streets: string;
}

interface Category {
  alias: string;
  title: string;
}
