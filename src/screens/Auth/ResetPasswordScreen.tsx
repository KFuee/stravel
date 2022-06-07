import { Alert, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// components
import DimissKeyboard from '../../components/General/DimissKeyboard';
import PasswordFormInput from '../../components/Auth/PasswordFormInput';
import ActionButton from '../../components/General/ActionButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },

  topContainer: {
    width: '100%',
    height: '75%',
    justifyContent: 'flex-start',
  },

  bottomContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
});

export default function ResetPasswordScreen({ route, navigation }: any) {
  const { token } = route.params;

  // hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
  });

  // handlers
  const handleReset = async (data: { password: string }) => {
    try {
      await axios.post(
        'http://192.168.1.15:3001/v1/auth/reset-password',
        { password: data.password },
        {
          params: { token },
        },
      );

      // Vuelve al landing de auth y cierra el modal
      navigation.goBack();
      Alert.alert('Éxito', 'La contraseña ha sido modificada correctamente');
    } catch (err: any) {
      if (err.response) {
        Alert.alert('Error', err.response.data.message);
        return;
      }

      Alert.alert('Error', err.message);
    }
  };

  return (
    <DimissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <PasswordFormInput
            control={control}
            errors={errors}
            requiresPattern
            placeholder="Nueva contraseña"
          />
        </View>

        <View style={styles.bottomContainer}>
          <ActionButton
            style={{ width: '100%' }}
            title="Restablecer contraseña"
            onPress={handleSubmit(handleReset)}
          />
        </View>
      </View>
    </DimissKeyboard>
  );
}
