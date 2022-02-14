import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import Navigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation />
    </SafeAreaProvider>
  );
}
