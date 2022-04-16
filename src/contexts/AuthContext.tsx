import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// types
import { AuthContextData, AuthData } from '../types/auth';

// services
import authService from '../services/authService';

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

  const signIn = async (email: string, password: string) => {
    const userAuthData = await authService(email, password);

    setAuthData(userAuthData);

    // Guarda los datos de autenticación en el almacenamiento local
    await AsyncStorage.setItem('authData', JSON.stringify(userAuthData));
  };

  // Elimina los datos del usuario del contexto
  const signOut = async () => {
    setAuthData(undefined);

    // Elimina los datos de autenticación del almacenamiento local
    await AsyncStorage.removeItem('authData');
  };

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        authData,
        loading,
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
