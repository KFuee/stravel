import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import SuggestedAttractionCard from '../../Explore/SuggestedAttractions/SuggestedAttractionCard';
import NoRecordsFound from '../History/NoRecordsFound';

// types
import { HomeStackProps } from '../../../navigation/HomeNavigator';
import type Favourite from '../../../types/favourite';

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

function UserFavourites({ favourites }: { favourites: Favourite[] }) {
  const { navigate } = useNavigation<HomeStackProps>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tus favoritos</Text>

        <TouchableOpacity
          style={styles.showAllContainer}
          onPress={() =>
            navigate('HomeShowAllHistoryRecords', {
              title: 'Todos los favoritos',
              type: 'favourites',
            })
          }
          activeOpacity={0.8}
        >
          <Text style={{ color: '#FF4760', fontWeight: 'bold' }}>Ver todo</Text>
        </TouchableOpacity>
      </View>

      {favourites.length > 0 ? (
        <View>
          {favourites.map(business => {
            const { item } = business;

            return (
              <SuggestedAttractionCard
                key={item.id}
                itemId={item.id}
                category={item.categories[0].title}
                title={item.name}
                rating={item.rating}
                image={item.image_url}
              />
            );
          })}
        </View>
      ) : (
        <View style={{ paddingBottom: 16 }}>
          <NoRecordsFound
            icon="bookmark"
            title="Aún no has añadido lugares a favoritos"
          />
        </View>
      )}
    </View>
  );
}

export default UserFavourites;
