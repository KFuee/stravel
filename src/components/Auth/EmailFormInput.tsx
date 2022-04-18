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
      placeholder="Correo electrónico"
      autoCapitalize="none"
      errors={errors}
    />
  );
}

export default EmailFormInput;
