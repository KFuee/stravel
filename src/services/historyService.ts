import axios from 'axios';

// types
import HistoryRecord from '../types/HistoryRecord';

// url base de la api
axios.defaults.baseURL = 'http://localhost:3001/v1/history';

export const getAllRecords = async (
  userId: string,
  limit?: number,
): Promise<HistoryRecord[]> => {
  const response = await axios.get(`records/${userId}`, {
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
  const response = await axios.post(`records`, {
    userId,
    type,
    item,
  });

  return response.data;
};
