import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';

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

export default function ResetPasswordScreen({ route }: any) {
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
  const handleReset = (data: { password: string }) => {
    console.log(token, data.password);
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
