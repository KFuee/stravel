export const categories = [
  {
    id: 1,
    title: 'Hoteles',
    image: require('../assets/images/hotels-category.jpg'),
  },
  {
    id: 2,
    title: 'Restaurantes',
    image: require('../assets/images/restaurants-category.jpg'),
  },
  {
    id: 3,
    title: 'Museos',
    image: require('../assets/images/museums-category.jpg'),
  },
  {
    id: 4,
    title: 'Monumetos',
    image: require('../assets/images/monuments-category.jpg'),
  },
  {
    id: 5,
    title: 'Parques',
    image: require('../assets/images/parks-category.jpg'),
  },
];

export const nearbyAttractions = [
  {
    id: 1,
    category: 'Hoteles',
    mainCategory: 'Hoteles',
    title: 'Hotel de la plaza',
    rating: 4.5,
    image: require('../assets/images/hotels-category.jpg'),
    coordinates: {
      latitude: 41.6573302141852,
      longitude: -0.8888,
    },
  },
  {
    id: 2,
    category: 'Museo',
    mainCategory: 'Arte',
    title: 'Museo de arte',
    rating: 3.4,
    image: require('../assets/images/museums-category.jpg'),
    coordinates: {
      latitude: 41.6573302141852,
      longitude: -0.8782084695231732,
    },
  },
  {
    id: 3,
    category: 'Monumento',
    mainCategory: 'Arte',
    title: 'Monumento de la catedral',
    rating: 4.5,
    image: require('../assets/images/monuments-category.jpg'),
    coordinates: {
      latitude: 41.646491844087684,
      longitude: -0.8877356758675421,
    },
  },
  {
    id: 4,
    category: 'Restaurante',
    mainCategory: 'Hostelería',
    title: 'Restaurante de la plaza',
    rating: 4.5,
    image: require('../assets/images/restaurants-category.jpg'),
    coordinates: {
      latitude: 41.652546888229686,
      longitude: -0.8961606686675342,
    },
  },
];

export const getCategoryAttractions = (category: string) => {
  if (category === 'Todo') {
    return nearbyAttractions;
  }

  const attractions: any = [];
  nearbyAttractions.forEach(attraction => {
    if (attraction.mainCategory === category) {
      attractions.push(attraction);
    }
  });

  return attractions;
};
