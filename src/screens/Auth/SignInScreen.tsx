import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// components
import DimissKeyboard from '../../components/General/DimissKeyboard';
import FormInput from '../../components/General/FormInput';
import ActionButton from '../../components/General/ActionButton';

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

  forgotPasswordButton: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function AuthSignInScreen() {
  // hooks
  const { signIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // handlers
  const handleSignIn = (data: { email: string; password: string }) => {
    signIn(data.email, data.password);
  };

  return (
    <DimissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <FormInput
            name="email"
            control={control}
            rules={{
              required: 'El email es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'El email no es válido',
              },
            }}
            placeholder="Correo electrónico"
            autoCapitalize="none"
            errors={errors}
          />

          <FormInput
            name="password"
            control={control}
            rules={{ required: 'La contraseña es requerida' }}
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            errors={errors}
          />
        </View>

        <View style={styles.bottomContainer}>
          <ActionButton
            style={{ width: '100%', marginVertical: 16 }}
            title="Iniciar sesión"
            onPress={handleSubmit(handleSignIn)}
          />

          <TouchableOpacity style={{ width: '100%' }} onPress={() => {}}>
            <View style={styles.forgotPasswordButton}>
              <Text>¿Has olvidado la contraseña?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </DimissKeyboard>
  );
}

export default AuthSignInScreen;
