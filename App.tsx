import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigation';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />

      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
