import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import StopItemLines from './StopItemLines';

// types
import type { TransportStackParamList } from '../../../../../navigation/TransportNavigator';

type BusStopItemProps = NativeStackNavigationProp<TransportStackParamList>;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    marginBottom: 8,
  },

  icon: {
    marginRight: 8,
  },
});

export default function BusStopItem({ stop }: any) {
  const { navigate } = useNavigation<BusStopItemProps>();

  return (
    <TouchableOpacity
      onPress={() => navigate('TransportBusStop', { stop })}
      activeOpacity={0.8}
    >
      <View style={[styles.item]}>
        <View style={{ width: '85%' }}>
          <Text style={styles.title}>{stop.title}</Text>

          <StopItemLines lines={stop.lines} />
        </View>

        <View style={styles.icon}>
          <FontAwesome5 name="chevron-right" size={18} color="#FF4760" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
