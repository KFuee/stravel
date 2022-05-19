import axios from 'axios';

// types
import type HistoryRecord from '../types/HistoryRecord';

// instancia de la api
const instance = axios.create({
  baseURL: 'http://localhost:3001/v1/history',
});

export const getUserRecords = async (
  userId: string,
  limit?: number,
): Promise<HistoryRecord[]> => {
  const response = await instance.get(`records/${userId}`, {
    params: {
      limit,
    },
  });

  return response.data;
};

export const createRecord = async (
  userId: string,
  type: string,
  item: Object,
): Promise<HistoryRecord> => {
  const response = await instance.post(`records`, {
    userId,
    type,
    item,
  });

  return response.data;
};

export const deleteAllHistoryRecords = async (
  userId: string,
): Promise<void> => {
  await instance.delete(`records/${userId}`);
};
