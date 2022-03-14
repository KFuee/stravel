import { View, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rightIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(61, 65, 92, 0.5)',
    borderRadius: 80,
  },

  icon: {
    width: 26,
    height: 26,
    textAlign: 'center',
  },
});

function TopIcons() {
  // hook para obtener el padding de la barra de estado
  const { top: topInset } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? topInset : topInset + 8,
      }}
    >
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={26} color="#FFF" style={styles.icon} />
        </View>

        <View style={styles.rightIconsContainer}>
          <View style={[styles.iconContainer, { marginRight: 8 }]}>
            <FontAwesome
              name="qrcode"
              size={28}
              color="#FFF"
              style={styles.icon}
            />
          </View>

          <View style={styles.iconContainer}>
            <FontAwesome
              name="bell"
              size={26}
              color="#FFF"
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default TopIcons;
