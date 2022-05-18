import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import HistoryRecordCard from './HistoryRecordCard';
import NoRecordsFound from './NoRecordsFound';

// types
import type HistoryRecord from '../../../types/historyRecord';
import type { HomeStackProps } from '../../../navigation/HomeNavigator';

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
  const { navigate } = useNavigation<HomeStackProps>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tu historial</Text>

        <TouchableOpacity
          style={styles.showAllContainer}
          onPress={() => navigate('HomeShowAllHistoryRecords')}
          activeOpacity={0.8}
        >
          <Text style={{ color: '#FF4760', fontWeight: 'bold' }}>Ver todo</Text>
        </TouchableOpacity>
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
