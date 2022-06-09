import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// contexts
// import { useAuth } from '../../contexts/AuthContext';

// services
// import { checkIfFavourite } from '../../services/favouritesService';

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
  },
});

function FavouriteButton({
  // itemId,
  backgroundColor,
  iconColor,
}: {
  // itemId: string;
  backgroundColor: string;
  iconColor: string;
}) {
  // hooks
  // const { authData } = useAuth();
  // const userId = authData!.user.id;

  // states
  const [isFavourite, setIsFavourite] = useState(false);

  // callbacks
  // const checkFavouriteApiCall = useCallback(async () => {
  //   try {
  //     const checkFavourite = await checkIfFavourite(itemId, userId);
  //     setIsFavourite(checkFavourite === 'Elemento encontrado en favoritos');
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // }, [userId, itemId]);

  // effects
  // useEffect(() => {
  //   checkFavouriteApiCall();
  // }, [checkFavouriteApiCall]);

  const handlePress = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, { backgroundColor }]}
      activeOpacity={0.8}
    >
      <FontAwesome
        name={isFavourite ? 'bookmark' : 'bookmark-o'}
        size={24}
        color={iconColor}
      />
    </TouchableOpacity>
  );
}

export default FavouriteButton;
