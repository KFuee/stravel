import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 18,
    height: 18,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  adressText: {
    fontSize: 16,
  },
});

function AttractionDetail({ icon, text }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={18} color="#FF4760" />
      </View>

      <Text style={styles.adressText}>{text}</Text>
    </View>
  );
}

export default AttractionDetail;
