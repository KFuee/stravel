import { StyleSheet, TextInput } from 'react-native';

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
});

function CustomTextInput({
  value,
  placeholder,
  onChangeText,
  autoCapitalize,
}: any) {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.container}
      placeholderTextColor="#000"
      autoCapitalize={autoCapitalize}
    />
  );
}

export default CustomTextInput;
