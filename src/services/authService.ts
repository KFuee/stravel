import axios from 'axios';

// types
import { AuthData } from '../types/auth';

// instancia de la api
const instance = axios.create({
  baseURL: 'http://192.168.1.15:3001/v1/auth',
});

export const register = async (
  name: string,
  email: string,
  password: string,
): Promise<AuthData> => {
  const response = await instance.post('register', {
    name,
    email,
    password,
  });

  return response.data;
};

export const signIn = async (
  email: string,
  password: string,
): Promise<AuthData> => {
  const response = await instance.post('login', { email, password });

  return response.data;
};

export const signOut = async (
  refreshToken: string | undefined,
): Promise<void> => {
  if (!refreshToken) {
    return Promise.reject(
      new Error('No se ha encontrado el token de refresco'),
    );
  }

  const response = await instance.post('logout', { refreshToken });

  return response.data;
};
