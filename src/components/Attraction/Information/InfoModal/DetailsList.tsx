import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '75%',
    marginTop: 16,
    paddingHorizontal: 16,
  },

  separator: {
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 1,
    marginVertical: 10,
  },

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
    fontWeight: 'bold',
  },
});

function DetailsList({ details }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="map-marker"
            size={20}
            color="#FF4760"
            style={styles.icon}
          />
        </View>

        <Text style={styles.text}>{details.address}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="phone"
            size={20}
            color="#FF4760"
            style={styles.icon}
          />
        </View>

        <Text style={styles.text}>{details.phoneNumber}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="globe"
            size={20}
            color="#FF4760"
            style={styles.icon}
          />
        </View>

        <Text style={styles.text}>{details.website}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="star"
            size={20}
            color="#FF4760"
            style={styles.icon}
          />
        </View>

        <Text style={styles.text}>{details.rating} (200+ valoraciones)</Text>
      </View>
    </View>
  );
}

export default DetailsList;
