import { Attraction } from './attractions/attraction';

// Modificar en el futuro para soportar transportes
export default interface Favourite {
  userId: string;
  type: string;
  item: Attraction;
  id: string;
}
