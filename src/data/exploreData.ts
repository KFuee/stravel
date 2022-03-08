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

export const attractions = [
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
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
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
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
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
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
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
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
  },
];

export const getAttraction = (id: number) =>
  attractions.find(attraction => attraction.id === id);

export const getCategoryAttractions = (category: string) => {
  if (category === 'Todo') {
    return attractions;
  }

  const categoryAttractions: any = [];
  attractions.forEach(attraction => {
    if (attraction.mainCategory === category) {
      categoryAttractions.push(attraction);
    }
  });

  return categoryAttractions;
};
