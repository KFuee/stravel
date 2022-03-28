import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 125,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  id: {
    fontSize: 16,
  },
});

export default function StopInfoBanner({ id, name }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.id}>ID {id}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <FontAwesome5 name="map-marked" size={24} color="#FF4760" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
