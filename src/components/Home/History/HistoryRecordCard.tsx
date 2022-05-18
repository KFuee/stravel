import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// types
import type { HomeStackProps } from '../../../navigation/HomeNavigator';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#FFF',

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
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
  id,
  image,
  title,
  location,
  isLast,
}: {
  id: string;
  image: any;
  title: string;
  location: string;
  isLast: boolean;
}) {
  const { navigate } = useNavigation<HomeStackProps>();

  return (
    <TouchableOpacity
      style={[styles.container, { marginRight: isLast ? 0 : 16 }]}
      activeOpacity={0.8}
      onPress={() =>
        navigate('HomeAttraction', {
          screen: 'AttractionLanding',
          params: { id },
        })
      }
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

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
    </TouchableOpacity>
  );
}

export default HistoryRecordCard;
