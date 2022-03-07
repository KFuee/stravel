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

  bookmarkIcon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

function BookmarkButton({ navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      // Circulo con icono de marcador
      style={styles.container}
    >
      <FontAwesome name="bookmark-o" size={20} style={styles.bookmarkIcon} />
    </TouchableOpacity>
  );
}

export default BookmarkButton;
