import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function BusLineScreen({ route }: any) {
  const { line } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={line.stops}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
