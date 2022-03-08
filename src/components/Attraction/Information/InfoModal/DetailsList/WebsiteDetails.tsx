import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function WebsiteDetails({ styles, website }: any) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome
          name="globe"
          size={20}
          color="#FF4760"
          style={styles.icon}
        />
      </View>

      <Text style={styles.text}>{website}</Text>
    </View>
  );
}

export default WebsiteDetails;
