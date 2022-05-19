import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// services
import { deleteAllHistoryRecords } from '../../services/historyService';
import { deleteAllFavourites } from '../../services/favouritesService';

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

function DeleteRecordsButton({ type }: { type: string }) {
  // hooks
  const { authData } = useAuth();
  const { navigate } = useNavigation<HomeStackProps>();

  // functions
  const deleteRecordsApiCall = async () => {
    try {
      if (type === 'history') {
        await deleteAllHistoryRecords(authData!.user.id);
      } else {
        await deleteAllFavourites(authData!.user.id);
      }

      navigate('HomeLanding');
    } catch (err) {
      Alert.alert('Error', 'No se pudieron eliminar los registros');
    }
  };

  const handleDeleteRecords = () => {
    // Pregunta si se desea eliminar todos los registros
    Alert.alert(
      'Eliminar registros',
      type === 'history'
        ? '¿Estás seguro de eliminar todos los registros de tu historial?'
        : '¿Estás seguro de eliminar todos los registros de tus favoritos?',
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
