import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function LocationDetails({ styles, address }: any) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome
          name="map-marker"
          size={20}
          color="#FF4760"
          style={styles.icon}
        />
      </View>

      <Text style={styles.text}>{address}</Text>
    </View>
  );
}

export default LocationDetails;
