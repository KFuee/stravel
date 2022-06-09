import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import SuggestedAttractionCard from './SuggestedAttractionCard';

// types
import { Attraction } from '../../../types/attractions/attraction';
import type { ExploreStackProps } from '../../../navigation/ExploreNavigator';

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
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

function SuggestedAttractions({ attractions }: { attractions: Attraction[] }) {
  const { navigate } = useNavigation<ExploreStackProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares sugeridos</Text>

      {attractions.map(attraction => (
        <SuggestedAttractionCard
          key={attraction.id}
          onPress={() =>
            navigate('ExploreAttraction', {
              screen: 'AttractionLanding',
              params: { id: attraction.id },
            })
          }
          // itemId={attraction.id}
          category={attraction.categories[0].title}
          title={attraction.name}
          rating={attraction.rating}
          image={attraction.image_url}
        />
      ))}
    </View>
  );
}

export default SuggestedAttractions;
