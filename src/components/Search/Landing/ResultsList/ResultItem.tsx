import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

// types
import type { ExploreStackParamList } from '../../../../navigation/ExploreNavigator';

type AttractionScreenProps = NativeStackNavigationProp<
  ExploreStackParamList,
  'ExploreAttraction'
>;

const styles = StyleSheet.create({
  item: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemText: {
    fontSize: 16,
  },

  icon: {
    marginRight: 8,
  },
});

function SearchResultItem({ item, type }: any) {
  // hooks
  const navigation = useNavigation<AttractionScreenProps>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ExploreAttraction', {
          screen: 'AttractionLanding',
          params: { id: type === 'category' ? item.alias : item.id },
        });
      }}
      activeOpacity={0.8}
    >
      <View style={styles.item}>
        <View style={{ width: '75%', paddingVertical: 8 }}>
          <Text style={styles.itemText} numberOfLines={1}>
            {type === 'category' ? item.title : item.name || item.text}
          </Text>
        </View>

        <View style={styles.icon}>
          <FontAwesome5 name="chevron-right" size={18} color="#FF4760" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SearchResultItem;
