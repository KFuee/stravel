export interface BusStop {
  id: string;
  title: string;
  geometry: Geometry;
  link: string;
  icon: string;
  gtfsId: string;
  lines: string[];
}

interface Geometry {
  type: string;
  coordinates: number[];
}
