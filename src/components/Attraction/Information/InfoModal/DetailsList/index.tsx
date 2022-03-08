import { StyleSheet, View } from 'react-native';

import LocationDetails from './LocationDetails';
import PhoneNumberDetails from './PhoneNumberDetails';
import WebsiteDetails from './WebsiteDetails';
import RatingDetails from './RatingDetails';

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
      <LocationDetails styles={styles} address={details.address} />

      <View style={styles.separator} />

      <PhoneNumberDetails styles={styles} phoneNumber={details.phoneNumber} />

      <View style={styles.separator} />

      <WebsiteDetails styles={styles} website={details.website} />

      <View style={styles.separator} />

      <RatingDetails styles={styles} rating={details.rating} />
    </View>
  );
}

export default DetailsList;
