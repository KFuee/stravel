import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Category, categories } from '../../../data/homeData';

import SelectedCategory from './SelectedCategory';

const styles = StyleSheet.create({
  categoryContainer: {
    width: 'auto',
    height: 30,
  },

  category: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#C2C5D6',
  },

  categorySelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4760',
  },

  underline: {
    marginTop: 5,
    height: 2,
    backgroundColor: '#FF4760',
  },
});

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: 1,
    title: 'Todo',
  });

  const renderCategory = () => (
    <SelectedCategory category={selectedCategory.title} />
  );

  const onPress = (category: Category) => {
    setSelectedCategory(category);

    renderCategory();
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {categories.map((category: Category) => (
          <View
            key={category.id}
            style={[
              styles.categoryContainer,
              category.id !== categories.length
                ? { marginRight: 16 }
                : { marginRight: 0 },
            ]}
          >
            <Text
              key={category.id}
              style={
                category.id === selectedCategory.id
                  ? styles.categorySelected
                  : styles.category
              }
              onPress={() => onPress(category)}
            >
              {category.title}
            </Text>

            {selectedCategory.id === 0 && category.id === 1 && (
              <View style={styles.underline} />
            )}
            {category.id === selectedCategory.id && (
              <View style={styles.underline} />
            )}
          </View>
        ))}
      </ScrollView>

      {renderCategory()}
    </View>
  );
}

export default Categories;
