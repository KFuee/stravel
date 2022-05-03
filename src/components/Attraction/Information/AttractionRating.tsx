import { StyleSheet, Text, View } from 'react-native';

// components
import StarRating from '../../General/StarRating';

// types
import { Attraction } from '../../../types/attractions/attraction';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },

  text: {
    marginLeft: 8,
    textAlign: 'center',
  },
});

export default function AttractionRating({
  attraction,
}: {
  attraction: Attraction;
}) {
  return (
    <View style={styles.container}>
      <StarRating rating={attraction.rating} textColor="#000000" />

      <Text style={styles.text}>
        {attraction.review_count || 0} calificaciones
      </Text>
    </View>
  );
}
