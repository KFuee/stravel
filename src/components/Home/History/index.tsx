import { StyleSheet, Text, View, ScrollView } from 'react-native';

// components
import HistoryRecordCard from './HistoryRecordCard';
import NoRecordsFound from './NoRecordsFound';

// types
import HistoryRecord from '../../../types/historyRecord';

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

function UserHistory({ records }: { records: HistoryRecord[] }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tu historial</Text>

        <View style={styles.showAllContainer}>
          <Text style={{ color: '#FF4760', fontWeight: 'bold' }}>Ver todo</Text>
        </View>
      </View>

      {records.length > 0 ? (
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              overflow: 'visible',
            }}
          >
            {records.map((record, index) => (
              <HistoryRecordCard
                key={record.item.id}
                image={record.item.image_url}
                location={record.item.location.address1}
                title={record.item.name}
                isLast={index === records.length - 1}
              />
            ))}
          </ScrollView>
        </View>
      ) : (
        <NoRecordsFound />
      )}
    </View>
  );
}

export default UserHistory;
