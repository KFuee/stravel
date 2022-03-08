import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function PhoneNumberDetails({ styles, phoneNumber }: any) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome
          name="phone"
          size={20}
          color="#FF4760"
          style={styles.icon}
        />
      </View>

      <Text style={styles.text}>{phoneNumber}</Text>
    </View>
  );
}

export default PhoneNumberDetails;
