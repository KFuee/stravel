import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#FFF',
  },

  scanIcon: {
    width: 20,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

function ScanButton({ navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      // Circulo con icono de QR
      style={styles.container}
    >
      <FontAwesome name="qrcode" size={20} style={styles.scanIcon} />
    </TouchableOpacity>
  );
}

export default ScanButton;
