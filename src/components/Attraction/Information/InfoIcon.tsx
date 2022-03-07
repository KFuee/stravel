import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  infoIconContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#FF4760',
  },

  infoIcon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

function InfoIcon() {
  return (
    <View style={styles.infoIconContainer}>
      <FontAwesome name="info" size={24} color="#FFF" style={styles.infoIcon} />
    </View>
  );
}

export default InfoIcon;
