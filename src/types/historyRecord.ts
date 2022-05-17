import { Attraction } from './attractions/attraction';

export default interface HistoryRecord {
  userId: string;
  type: string;
  item: Attraction;
  id: string;
}
