import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#FF4760',
    borderRadius: 5,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function ActionButton({
  style,
  title,
  onPress,
}: {
  style: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ActionButton;
