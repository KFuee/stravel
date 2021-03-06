import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// types
import type { TransportStackParamList } from '../../../../navigation/TransportNavigator';

type BusLineItemProps = NativeStackNavigationProp<TransportStackParamList>;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 16,
  },

  icon: {
    marginRight: 8,
  },
});

export default function LineItem({ line }: any) {
  const { navigate } = useNavigation<BusLineItemProps>();

  return (
    <TouchableOpacity
      onPress={() => navigate('TransportBusLine', { line })}
      activeOpacity={0.8}
    >
      <View style={[styles.item]}>
        <Text style={styles.text}>Línea {line}</Text>

        <View style={styles.icon}>
          <FontAwesome5 name="chevron-right" size={18} color="#FF4760" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
