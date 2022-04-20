import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// types
import { AuthContextData, AuthData } from '../types/auth';

// services
import {
  register as authServiceRegister,
  signIn as authServiceSignIn,
  signOut as authServiceSignOut,
} from '../services/authService';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: any) {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('authData');

      if (authDataSerialized) {
        const authDataParsed: AuthData = JSON.parse(authDataSerialized);
        setAuthData(authDataParsed);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStorageData();
  });

  const register = async (name: string, email: string, password: string) => {
    try {
      const userAuthData = await authServiceRegister(name, email, password);

      setAuthData(userAuthData);

      await AsyncStorage.setItem('authData', JSON.stringify(userAuthData));
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userAuthData = await authServiceSignIn(email, password);

      setAuthData(userAuthData);

      // Guarda los datos de autenticación en el almacenamiento local
      await AsyncStorage.setItem('authData', JSON.stringify(userAuthData));
    } catch (err: any) {
      if (err.response) {
        Alert.alert('Error', err.response.data.message);
        return;
      }

      Alert.alert('Error', err.message);
    }
  };

  // Elimina los datos del usuario del contexto
  const signOut = async () => {
    try {
      await authServiceSignOut(authData?.tokens.refresh.token);
    } catch (err: any) {
      if (err.response) {
        Alert.alert('Error', err.response.data.message);
        return;
      }

      Alert.alert('Error', err.message);
    }

    // Elimina los datos de autenticación del almacenamiento local
    await AsyncStorage.removeItem('authData');
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        authData,
        loading,
        register,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }

  return context;
}
