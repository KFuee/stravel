import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Controller } from 'react-hook-form';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  errorMessage: {
    marginBottom: 16,
    marginHorizontal: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});

function FormInput({ name, control, rules, errors, ...inputProps }: any) {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.container}
            placeholderTextColor="#000"
            onBlur={onBlur}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...inputProps}
          />
        )}
      />
      {errors[name] && (
        <Text style={styles.errorMessage}>{errors[name].message}</Text>
      )}
    </View>
  );
}

export default FormInput;
