import { StyleSheet, View, Text } from 'react-native';

import Categories from './Categories';

const styles = StyleSheet.create({
  title: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },
});

function Suggestions() {
  return (
    <View>
      <Text style={styles.title}>Sugerencias</Text>

      <Categories />
    </View>
  );
}

export default Suggestions;
