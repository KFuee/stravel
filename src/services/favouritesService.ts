import axios from 'axios';

// types
import type Favourite from '../types/favourite';

// instancia de la api
const instance = axios.create({
  baseURL: 'http://localhost:3001/v1/favourites',
});

export const checkIfFavourite = async (
  itemId: string,
  userId: string,
): Promise<string> => {
  const response = await instance.get(`/check/${itemId}`, {
    params: {
      user: userId,
    },
  });

  return response.data.message;
};

export const getUserFavourites = async (
  userId: string,
  limit?: number,
): Promise<Favourite[]> => {
  const response = await instance.get(`/${userId}`, {
    params: {
      limit,
    },
  });

  return response.data;
};

export const createFavourite = async (
  userId: string,
  type: string,
  item: Object,
): Promise<Favourite> => {
  const response = await instance.post('/', {
    userId,
    type,
    item,
  });

  return response.data;
};

export const deleteAllFavourites = async (userId: string): Promise<void> => {
  await instance.delete(`/${userId}`);
};
