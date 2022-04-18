import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// components
import DimissKeyboard from '../../components/General/DimissKeyboard';
import FormInput from '../../components/General/FormInput';
import EmailFormInput from '../../components/Auth/EmailFormInput';
import PasswordFormInput from '../../components/Auth/PasswordFormInput';
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

          <EmailFormInput control={control} errors={errors} />

          <PasswordFormInput control={control} errors={errors} requiresPatter />
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
