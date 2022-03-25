import { StyleSheet, View } from 'react-native';

import LinesList from '../../components/Transport/Bus/Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function BusScreen() {
  return (
    <View style={styles.container}>
      <LinesList />
    </View>
  );
}
