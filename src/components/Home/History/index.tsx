import { StyleSheet, Text, View, ScrollView } from 'react-native';

// data
import { dataExample } from '../../../data/homeData';

// components
import HistoryRecordCard from './HistoryRecordCard';

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },

  showAllContainer: {
    borderRadius: 50,
    backgroundColor: 'rgba(255, 71, 96, 0.1)',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
});

function UserHistory() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tu historial</Text>

        <View style={styles.showAllContainer}>
          <Text style={{ color: '#FF4760', fontWeight: 'bold' }}>Ver todo</Text>
        </View>
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            overflow: 'visible',
          }}
        >
          {dataExample.businesses.slice(0, 4).map(businness => (
            <HistoryRecordCard
              key={businness.id}
              image={businness.image_url}
              location={businness.location.address1}
              title={businness.name}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default UserHistory;
