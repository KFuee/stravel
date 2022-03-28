import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },

  rightContainer: {},

  leftContainer: {},

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  id: {
    fontSize: 16,
  },
});

export default function BusStopInfoBanner({ id, name }: any) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>ID {id}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8}>
        <FontAwesome5 name="map-marked" size={24} color="#FF4760" />
      </TouchableOpacity>
    </View>
  );
}
