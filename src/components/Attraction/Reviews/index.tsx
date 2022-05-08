import { StyleSheet, Text, View } from 'react-native';

// components
import AttractionReview from './Review';

// types
import { Review } from '../../../types/attractions/review';

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 32,
  },

  title: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    textTransform: 'uppercase',
  },

  reviewsContainer: {
    borderRadius: 5,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    backgroundColor: '#FFF',

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});

function AttractionReviews({ reviews }: { reviews: Review[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opiniones</Text>

      <View style={styles.reviewsContainer}>
        {reviews.length > 0 ? (
          reviews.map((review: Review, index: number) => (
            <AttractionReview
              key={review.id}
              review={review}
              isLast={index === reviews.length - 1}
            />
          ))
        ) : (
          <Text>No se han encontrado opiniones</Text>
        )}
      </View>
    </View>
  );
}

export default AttractionReviews;
