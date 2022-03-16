import { FlatList, StyleSheet, Text, View } from 'react-native';

import CategoryCard from './CategoryCard';

import categories from '../../../../data/transportData';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  title: {
    marginVertical: 16,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },
});

export default function TransportCategories() {
  const renderItem = ({ item }: any) => (
    <CategoryCard
      style={[
        { marginLeft: item.id % 2 === 0 ? 10 : 0 },
        { marginBottom: ![3, 4].includes(item.id) ? 10 : 0 },
      ]}
      title={item.title}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={<Text style={styles.title}>Categorías</Text>}
      />
    </View>
  );
}
