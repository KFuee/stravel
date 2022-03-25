import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 16,
  },

  icon: {
    marginRight: 8,
  },
});

export default function LineItem({ title }: any) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>

      <View style={styles.icon}>
        <FontAwesome5 name="chevron-right" size={18} color="#FF4760" />
      </View>
    </View>
  );
}
