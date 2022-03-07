import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function BackButton({ navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      // Circulo con icono de flecha hacia atrás
      style={{
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        backgroundColor: '#FFF',
      }}
    >
      <FontAwesome name="arrow-left" size={20} />
    </TouchableOpacity>
  );
}

export default BackButton;
