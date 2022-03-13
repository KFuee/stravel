import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});

function DetailsItem({ iconName, text }: any) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome
          name={iconName}
          size={20}
          color="#FF4760"
          style={styles.icon}
        />
      </View>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default DetailsItem;
