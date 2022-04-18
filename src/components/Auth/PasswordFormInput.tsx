// components
import FormInput from '../General/FormInput';

function PasswordFormInput({ control, errors, requiresPattern }: any) {
  return (
    <FormInput
      name="password"
      control={control}
      rules={{
        required: 'La contraseña es requerida',
        ...(requiresPattern && {
          pattern: {
            value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
            message:
              'La contraseña debe tener al menos 8 caracteres, una letra y un número',
          },
        }),
      }}
      errors={errors}
      placeholder="Contraseña"
      autoCapitalize="none"
      secureTextEntry
    />
  );
}

export default PasswordFormInput;
