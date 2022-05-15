import { Text, ScrollView, StyleSheet, View } from 'react-native';

import { categories } from '../../../data/exploreData';
import CategoryCard from './CategoryCard';

const styles = StyleSheet.create({
  title: {
    marginVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },
});

function Categories() {
  return (
    <View>
      <Text style={styles.title}>Categorías destacadas</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            alias={category.alias}
            title={category.title}
            image={category.image}
            isLast={category.id === categories.length}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Categories;
