import { StyleSheet, Text, View } from 'react-native';

// components
import StarRating from '../../General/StarRating';
import Separator from '../../General/Separator';

// types
import { Review } from '../../../types/attractions/review';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  date: {
    color: '#3f3f3f',
  },
});

export default function AttractionReview({
  review,
  isLast,
}: {
  review: Review;
  isLast: boolean;
}) {
  return (
    <View key={review.id}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <StarRating rating={review.rating} />

          <Text style={styles.date}>{review.time_created}</Text>
        </View>

        <View>
          <Text numberOfLines={4}>{review.text}</Text>
        </View>
      </View>

      {!isLast && <Separator />}
    </View>
  );
}
