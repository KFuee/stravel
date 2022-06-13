import axios from 'axios';

// types
import type { BusStop, BusStopArrival } from '../types/transport';

// instancia de la api
const instance = axios.create({
  baseURL: 'http://192.168.1.15:3001/v1/transport',
});

// eslint-disable-next-line import/prefer-default-export
export const getAllBusStops = async (): Promise<BusStop[]> => {
  const response = await instance.get(`/bus-stops`);

  return response.data;
};

export const getBusStopById = async (id: string): Promise<BusStop> => {
  const response = await instance.get(`/bus-stops/${id}`);

  return response.data;
};

export const getBusStopArrivals = async (
  busStopId: string,
): Promise<BusStopArrival[]> => {
  const response = await instance.get(`/bus-stops/${busStopId}/arrival-times`);

  return response.data;
};

export const getAllBusLines = async (): Promise<string[]> => {
  const response = await instance.get(`/bus-lines`);

  return response.data;
};

export const getBusLineById = async (id: string): Promise<any> => {
  const response = await instance.get(`/bus-lines/${id}`);

  return response.data;
};
