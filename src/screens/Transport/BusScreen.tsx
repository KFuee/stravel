import { StyleSheet, View } from 'react-native';

import SearchBusBanner from '../../components/Transport/Bus/SearchBanner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function BusScreen() {
  return (
    <View style={styles.container}>
      <SearchBusBanner />
    </View>
  );
}
