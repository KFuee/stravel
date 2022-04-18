import { StyleSheet, View } from 'react-native';
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
});

function AuthRegisterScreen() {
  // hooks
  const { register } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // handlers
  const handleRegister = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    register(data.name, data.email, data.password);
  };

  return (
    <DimissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <FormInput
            name="name"
            control={control}
            rules={{ required: 'El nombre es requerido' }}
            placeholder="Nombre completo"
            autoCapitalize="words"
            errors={errors}
          />

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
            rules={{
              required: 'La contraseña es requerida',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
                message:
                  'La contraseña debe tener al menos 8 caracteres, una letra y un número',
              },
            }}
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            errors={errors}
          />
        </View>

        <View style={styles.bottomContainer}>
          <ActionButton
            style={{ width: '100%' }}
            title="Registrarse"
            onPress={handleSubmit(handleRegister)}
          />
        </View>
      </View>
    </DimissKeyboard>
  );
}

export default AuthRegisterScreen;
