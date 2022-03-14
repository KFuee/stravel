import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />

      <RootNavigator />
    </SafeAreaProvider>
  );
}
