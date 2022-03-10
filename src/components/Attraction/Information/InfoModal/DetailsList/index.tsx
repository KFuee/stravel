import { StyleSheet, View, Text } from 'react-native';

import DetailsItem from './DetailsItem';

const styles = StyleSheet.create({
  titleText: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },

  separator: {
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

function DetailsList({ details }: any) {
  return (
    <View>
      <Text style={styles.titleText}>Más información</Text>

      <DetailsItem iconName="map-marker" text={details.address} />

      <View style={styles.separator} />

      <DetailsItem iconName="phone" text={details.phoneNumber} />

      <View style={styles.separator} />

      <DetailsItem iconName="globe" text={details.website} />

      <View style={styles.separator} />

      <DetailsItem
        iconName="star"
        text={`${details.rating} (200+ valoraciones)`}
      />
    </View>
  );
}

export default DetailsList;
