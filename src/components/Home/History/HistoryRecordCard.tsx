import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#FFF',

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,

    marginRight: 16,
  },

  image: {
    width: '100%',
    height: 175,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  iconSize: {
    width: 16,
    height: 16,
  },

  iconText: {
    marginLeft: 8,
    color: '#BEBEBE',
    fontWeight: 'bold',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function HistoryRecordCard({
  image,
  title,
  location,
}: {
  image: any;
  title: string;
  location: string;
}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={{ padding: 16 }}>
        <Text style={styles.titleText}>{title}</Text>

        <View style={[styles.rowContainer, { marginTop: 8 }]}>
          <View style={styles.iconSize}>
            <FontAwesome5 name="map-marker-alt" size={16} color="#BEBEBE" />
          </View>

          <Text style={styles.iconText}>{location}</Text>
        </View>

        <View style={[styles.rowContainer, { marginTop: 4 }]}>
          <View style={styles.iconSize}>
            <FontAwesome5 name="calendar" size={16} color="#BEBEBE" />
          </View>

          <Text style={styles.iconText}>
            Lo visitaste el {new Date().toLocaleDateString('es-Es')}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default HistoryRecordCard;
