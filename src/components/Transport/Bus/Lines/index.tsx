import { Text, View, FlatList, StyleSheet } from 'react-native';

import LineItem from './LineItem';

import { busLines } from '../../../../data/transportData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  title: {
    marginVertical: 16,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },
});

export default function LinesList() {
  const renderHeader = () => (
    <Text style={styles.title}>Líneas disponibles</Text>
  );

  const renderItem = ({ item }: any) => <LineItem title={item.title} />;

  const renderSeparator = () => (
    <View
      style={{ height: 1, backgroundColor: 'lightgray', marginVertical: 8 }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={busLines}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}
