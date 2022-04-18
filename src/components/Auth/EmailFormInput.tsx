// components
import FormInput from '../General/FormInput';

function EmailFormInput({ control, errors }: any) {
  return (
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
      errors={errors}
      placeholder="Correo electrónico"
      autoCapitalize="none"
    />
  );
}

export default EmailFormInput;
