import { Attraction } from './attractions/attraction';

// Modificar en el futuro para soportar transportes
export default interface HistoryRecord {
  userId: string;
  type: string;
  item: Attraction;
  id: string;
}
