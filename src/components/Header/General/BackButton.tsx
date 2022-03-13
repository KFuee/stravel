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

  arrowLeftIcon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

function BackButton({ navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      // Circulo con icono de flecha hacia atrás
      style={styles.container}
    >
      <FontAwesome name="arrow-left" size={20} style={styles.arrowLeftIcon} />
    </TouchableOpacity>
  );
}

export default BackButton;
