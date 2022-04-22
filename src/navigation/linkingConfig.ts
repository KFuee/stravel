import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

// types
import type { RootStackParamList } from '.';

const prefix = Linking.createURL('/');

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      Auth: {
        screens: {
          AuthResetPasswordModal: 'auth/reset-password/:token',
        },
      },
    },
  },
};

export default linking;
