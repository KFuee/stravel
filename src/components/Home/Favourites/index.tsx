import { StyleSheet, Text, View } from 'react-native';

// data
import { dataExample } from '../../../data/homeData';

// components
import SuggestedAttractionCard from '../../Explore/SuggestedAttractions/SuggestedAttractionCard';

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

function UserFavourites() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tus favoritos</Text>

        <View style={styles.showAllContainer}>
          <Text style={{ color: '#FF4760', fontWeight: 'bold' }}>Ver todo</Text>
        </View>
      </View>

      {dataExample.businesses.map(business => (
        <SuggestedAttractionCard
          key={business.id}
          id={business.id}
          category={business.categories[0].title}
          title={business.name}
          rating={business.rating}
          image={business.image_url}
        />
      ))}
    </View>
  );
}

export default UserFavourites;
