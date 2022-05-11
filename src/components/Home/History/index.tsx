import { StyleSheet, Text, View, ScrollView } from 'react-native';

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

      <View style={{ paddingTop: 16 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            overflow: 'visible',
          }}
        >
          <HistoryRecordCard
            image={require('../../../assets/images/home-banner.jpg')}
            title="Café con amigos"
            location="Calle de la paz, 1"
          />

          <HistoryRecordCard
            image={require('../../../assets/images/restaurants-category.jpg')}
            title="Café con amigos"
            location="Calle de la paz, 1"
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default UserHistory;
