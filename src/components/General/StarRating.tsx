import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 10,
  },

  starIcon: {
    width: 18,
    height: 18,
  },
});

function StarRating({ rating }: any) {
  const stars = [];

  const roundRating = Math.round(rating);

  for (let i = 1; i <= 5; i += 1) {
    if (i > roundRating) {
      stars.push(
        <FontAwesome
          key={i}
          name="star-o"
          size={18}
          color="#FCB446"
          style={styles.starIcon}
        />,
      );
    } else {
      stars.push(
        <FontAwesome
          key={i}
          name="star"
          size={18}
          color="#FCB446"
          style={styles.starIcon}
        />,
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ratingText}>{rating}</Text>

      {stars}
    </View>
  );
}

export default StarRating;
