import axios from 'axios';

// types
import { AuthData } from '../types/auth';

export const register = async (
  name: string,
  email: string,
  password: string,
): Promise<AuthData> => {
  const response = await axios.post(
    'http://192.168.1.15:3001/v1/auth/register',
    {
      name,
      email,
      password,
    },
  );

  return response.data;
};

export const signIn = async (
  email: string,
  password: string,
): Promise<AuthData> => {
  const response = await axios.post('http://192.168.1.15:3001/v1/auth/login', {
    email,
    password,
  });

  return response.data;
};
