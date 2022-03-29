import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 40,
    padding: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderBottomWidth: 4,
    borderBottomColor: '#FF4760',
  },
});

export default function TransportBadge({ name }: any) {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="bus" size={16} color="#000" />

      <Text style={{ fontWeight: 'bold' }}>{name}</Text>
    </View>
  );
}
