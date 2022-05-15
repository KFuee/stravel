import { StyleSheet, Text, View } from 'react-native';

// data
import { transportTypes } from '../../../data/homeData';

// components
import TypeItem from './TypeItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },

  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

function TransportTypes() {
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 16 }}>
        <Text style={styles.titleText}>Tipos de transporte</Text>
      </View>

      <View style={styles.itemsContainer}>
        {transportTypes.map(type => (
          <TypeItem key={type.id} iconName={type.iconName} title={type.title} />
        ))}
      </View>
    </View>
  );
}

export default TransportTypes;
