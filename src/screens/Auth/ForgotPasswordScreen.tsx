import { Alert, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';

// components
import DimissKeyboard from '../../components/General/DimissKeyboard';
import EmailFormInput from '../../components/Auth/EmailFormInput';
import ActionButton from '../../components/General/ActionButton';

// services
import { forgotPassword } from '../../services/authService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
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

export default function ForgotPasswordScreen({ navigation }: any) {
  // hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const handleForgotPassword = (data: { email: string }) => {
    try {
      forgotPassword(data.email);

      Alert.alert(
        'Éxito',
        'Comprueba tu correo electrónico para restablecer tu contraseña',
      );
      // Vuelve a la vista de inicio de sesión
      navigation.goBack();
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
          <EmailFormInput name="email" control={control} errors={errors} />
        </View>

        <View style={styles.bottomContainer}>
          <ActionButton
            style={{ width: '100%' }}
            title="Restablecer contraseña"
            onPress={handleSubmit(handleForgotPassword)}
          />
        </View>
      </View>
    </DimissKeyboard>
  );
}
