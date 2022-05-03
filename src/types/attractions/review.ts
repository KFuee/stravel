export interface Review {
  id: string;
  rating: number;
  user: User;
  text: string;
  time_created: string;
  url: string;
}

interface User {
  id: string;
  profile_url: string;
  image_url?: string;
  name: string;
}
