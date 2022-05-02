import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4760',
    borderRadius: 16,
  },

  text: {
    marginRight: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

function AttractionActionButton({ text, icon }: any) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {text && <Text style={styles.text}>{text}</Text>}

        <FontAwesome5 name={icon} size={22} color="#FFF" />
      </View>
    </View>
  );
}

export default AttractionActionButton;
