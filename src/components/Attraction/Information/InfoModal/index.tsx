import { StyleSheet, View } from 'react-native';
import LocationMap from './LocationMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function AttractionInfoModal({ route }: any) {
  const { attraction } = route.params;

  return (
    <View style={styles.container}>
      <LocationMap coordinates={attraction.coordinates} />
    </View>
  );
}

export default AttractionInfoModal;
