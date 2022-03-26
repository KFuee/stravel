import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  item: {
    paddingBottom: 8,
    paddingHorizontal: 16,
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

export default function LineItem({ id, title }: any) {
  return (
    <View style={[styles.item, { paddingTop: id === 1 ? 16 : 8 }]}>
      <Text style={styles.text}>{title}</Text>

      <View style={styles.icon}>
        <FontAwesome5 name="chevron-right" size={18} color="#FF4760" />
      </View>
    </View>
  );
}
