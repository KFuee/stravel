import { StyleSheet, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

// components
import FormInput from '../../../components/General/FormInput';
import EmailFormInput from '../../../components/Auth/EmailFormInput';
import PasswordFormInput from '../../../components/Auth/PasswordFormInput';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
    paddingBottom: 16,
  },
});

export default function ModifyData() {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <View style={{ marginTop: 32 }}>
      <Text style={styles.titleText}>Modificar datos</Text>

      <View>
        <FormInput
          name="name"
          control={control}
          rules={{ required: 'El nombre es requerido' }}
          errors={errors}
          placeholder="Nombre completo"
          autoCapitalize="words"
        />

        <EmailFormInput control={control} errors={errors} />

        <PasswordFormInput control={control} errors={errors} requiresPattern />
      </View>
    </View>
  );
}
