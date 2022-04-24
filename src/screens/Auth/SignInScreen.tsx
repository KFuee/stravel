import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// components
import DimissKeyboard from '../../components/General/DimissKeyboard';
import EmailFormInput from '../../components/Auth/EmailFormInput';
import PasswordFormInput from '../../components/Auth/PasswordFormInput';
import ActionButton from '../../components/General/ActionButton';

// types
import type { AuthStackParamList } from '../../navigation/AuthNavigator';

type AuthSignInScreenProps = NativeStackNavigationProp<AuthStackParamList>;

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

  errorMessage: {
    marginHorizontal: 16,
    color: 'red',
    fontWeight: 'bold',
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
  const { navigate } = useNavigation<AuthSignInScreenProps>();

  // handlers
  const handleSignIn = (data: { email: string; password: string }) => {
    signIn(data.email, data.password);
  };

  return (
    <DimissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <EmailFormInput control={control} errors={errors} />

          <PasswordFormInput control={control} errors={errors} />
        </View>

        <View style={styles.bottomContainer}>
          <ActionButton
            style={{ width: '100%', marginVertical: 16 }}
            title="Iniciar sesión"
            onPress={handleSubmit(handleSignIn)}
          />

          <TouchableOpacity
            style={{ width: '100%' }}
            onPress={() => navigate('AuthForgotPassword')}
          >
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
