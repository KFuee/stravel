import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// types
import type { AttractionStackParamList } from '../../../navigation/AttractionNavigator';

type AttractionInfoProps = NativeStackNavigationProp<
  AttractionStackParamList,
  'AttractionInfo'
>;

const styles = StyleSheet.create({
  infoIconContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#FF4760',
  },

  infoIcon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

function InfoIcon({ attraction }: any) {
  const { navigate } = useNavigation<AttractionInfoProps>();

  return (
    <Pressable onPress={() => navigate('AttractionInfo', { attraction })}>
      <View style={styles.infoIconContainer}>
        <FontAwesome
          name="info"
          size={24}
          color="#FFF"
          style={styles.infoIcon}
        />
      </View>
    </Pressable>
  );
}

export default InfoIcon;
