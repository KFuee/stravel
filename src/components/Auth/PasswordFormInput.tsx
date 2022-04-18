// components
import FormInput from '../General/FormInput';

function PasswordFormInput({ control, errors, requiresPatter }: any) {
  return (
    <FormInput
      name="password"
      control={control}
      rules={{
        required: 'La contraseña es requerida',
        ...(requiresPatter && {
          pattern: {
            value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
            message:
              'La contraseña debe tener al menos 8 caracteres, una letra y un número',
          },
        }),
      }}
      placeholder="Contraseña"
      autoCapitalize="none"
      secureTextEntry
      errors={errors}
    />
  );
}

export default PasswordFormInput;
