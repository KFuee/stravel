import { View, Text, StyleSheet } from 'react-native';

import { attractions } from '../../../data/exploreData';
import SuggestedAttractionCard from './SuggestedAttractionCard';

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
});

function SuggestedAttraction() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares sugeridos</Text>

      {attractions.map(attraction => (
        <SuggestedAttractionCard
          key={attraction.id}
          id={attraction.id}
          category={attraction.category}
          title={attraction.title}
          rating={attraction.rating}
          image={attraction.image}
          isLast={attraction.id === attractions.length}
        />
      ))}
    </View>
  );
}

export default SuggestedAttraction;
