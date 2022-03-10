import { StyleSheet, View } from 'react-native';

import DetailsItem from './DetailsItem';

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
});

function DetailsList({ details }: any) {
  return (
    <View style={styles.container}>
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
