import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// types
import { TabNavigatorProps } from '../../../navigation/TabNavigator';

const styles = StyleSheet.create({
  container: {
    width: 74,
    flexDirection: 'column',
    alignItems: 'center',
  },

  iconContainer: {
    width: 74,
    height: 74,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 71, 96, 0.1)',
    padding: 16,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

function TransportTypeItem({
  iconName,
  title,
  screen,
}: {
  iconName: string;
  title: string;
  screen: string;
}) {
  const { navigate } = useNavigation<TabNavigatorProps>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Transport', { screen })}
    >
      <View style={styles.iconContainer}>
        <View>
          <FontAwesome5 name={iconName} size={32} color="#FF4760" />
        </View>
      </View>

      <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default TransportTypeItem;
