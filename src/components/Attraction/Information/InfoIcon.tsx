import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../navigation/StackNavigator';

type AttractionInfoProps = NativeStackNavigationProp<
  RootStackParamList,
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

function InfoIcon() {
  const { navigate } = useNavigation<AttractionInfoProps>();

  return (
    <Pressable onPress={() => navigate('AttractionInfo')}>
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
