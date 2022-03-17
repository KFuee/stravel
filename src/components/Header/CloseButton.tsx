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

  closeIcon: {
    width: 20,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

function CloseButton({ navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      // Circulo con icono de cruz
      style={styles.container}
    >
      <FontAwesome name="times" size={20} style={styles.closeIcon} />
    </TouchableOpacity>
  );
}

export default CloseButton;
