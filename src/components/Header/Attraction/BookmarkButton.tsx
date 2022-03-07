import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function BookmarkButton({ navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      // Circulo con icono de marcador
      style={{
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        backgroundColor: '#FFF',
      }}
    >
      <FontAwesome name="bookmark-o" size={20} />
    </TouchableOpacity>
  );
}

export default BookmarkButton;
