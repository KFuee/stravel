import axios from 'axios';

// types
import { AuthData } from '../types/auth';

const signIn = async (email: string, password: string): Promise<AuthData> => {
  const response = await axios.post('http://localhost:3001/v1/auth/register', {
    email,
    password,
  });

  return response.data;
};

export default signIn;
