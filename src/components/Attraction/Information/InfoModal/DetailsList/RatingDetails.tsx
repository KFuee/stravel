import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function RatingDetails({ styles, rating }: any) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome
          name="star"
          size={20}
          color="#FF4760"
          style={styles.icon}
        />
      </View>

      <Text style={styles.text}>{rating} (200+ valoraciones)</Text>
    </View>
  );
}

export default RatingDetails;
