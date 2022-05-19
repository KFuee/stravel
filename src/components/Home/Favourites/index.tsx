import { StyleSheet, Text, View } from 'react-native';

// components
import SuggestedAttractionCard from '../../Explore/SuggestedAttractions/SuggestedAttractionCard';
import NoRecordsFound from '../History/NoRecordsFound';

// types
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
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tus favoritos</Text>

        <View style={styles.showAllContainer}>
          <Text style={{ color: '#FF4760', fontWeight: 'bold' }}>Ver todo</Text>
        </View>
      </View>

      {favourites.length > 0 ? (
        <View>
          {favourites.map(business => {
            const { item } = business;

            return (
              <SuggestedAttractionCard
                key={item.id}
                id={item.id}
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
          <NoRecordsFound icon="bookmark" title="No tienes favoritos" />
        </View>
      )}
    </View>
  );
}

export default UserFavourites;
