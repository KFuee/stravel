import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
  },
});

function FavouriteButton({ backgroundColor, iconColor }: any) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FontAwesome name="bookmark-o" size={20} color={iconColor} />
    </View>
  );
}

export default FavouriteButton;
