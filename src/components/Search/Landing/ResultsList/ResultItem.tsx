import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  item: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemText: {
    fontSize: 16,
  },

  icon: {
    marginRight: 8,
  },
});

function SearchResultItem({ title }: any) {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
      <View style={styles.item}>
        <View style={{ width: '75%', paddingVertical: 8 }}>
          <Text style={styles.itemText} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View style={styles.icon}>
          <FontAwesome5 name="chevron-right" size={18} color="#FF4760" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SearchResultItem;
