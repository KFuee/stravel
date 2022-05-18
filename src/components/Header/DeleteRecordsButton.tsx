import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// services
import { deleteAllRecords } from '../../services/historyService';

// types
import type { HomeStackProps } from '../../navigation/HomeNavigator';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  trashIcon: {
    width: 20,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

function DeleteRecordsButton() {
  // hooks
  const { authData } = useAuth();
  const { navigate } = useNavigation<HomeStackProps>();

  // functions
  const deleteRecordsApiCall = async () => {
    try {
      await deleteAllRecords(authData!.user.id);

      navigate('HomeLanding');
    } catch (err) {
      Alert.alert('Error', 'No se pudieron eliminar los registros');
    }
  };

  const handleDeleteRecords = () => {
    // Pregunta si se desea eliminar todos los registros
    Alert.alert(
      'Eliminar registros',
      '¿Estás seguro de que quieres eliminar tu historial de visitas?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => deleteRecordsApiCall(),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity onPress={handleDeleteRecords} style={styles.container}>
      <FontAwesome
        style={styles.trashIcon}
        name="trash-o"
        size={20}
        color="#FF4760"
      />
    </TouchableOpacity>
  );
}

export default DeleteRecordsButton;
