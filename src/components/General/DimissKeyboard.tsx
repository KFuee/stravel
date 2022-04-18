import { TouchableWithoutFeedback, Keyboard } from 'react-native';

function DimissKeyboard({ children }: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export default DimissKeyboard;
