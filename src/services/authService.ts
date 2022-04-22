import axios from 'axios';

// types
import { AuthData } from '../types/auth';

export const register = async (
  name: string,
  email: string,
  password: string,
): Promise<AuthData> => {
  const response = await axios.post('http://localhost:3001/v1/auth/register', {
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
  const response = await axios.post('http://localhost:3001/v1/auth/login', {
    email,
    password,
  });

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

  const response = await axios.post('http://localhost:3001/v1/auth/logout', {
    refreshToken,
  });

  return response.data;
};

export const forgotPassword = (email: string) => {
  axios.post('http://localhost:3001/v1/auth/forgot-password', { email });
};
