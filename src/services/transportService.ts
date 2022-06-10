import axios from 'axios';

// types
import type { BusStop } from '../types/transport';

// instancia de la api
const instance = axios.create({
  baseURL: 'http://localhost:3001/v1/transport',
});

// eslint-disable-next-line import/prefer-default-export
export const getAllBusStops = async (): Promise<BusStop[]> => {
  const response = await instance.get(`/bus-stops`);

  return response.data;
};
