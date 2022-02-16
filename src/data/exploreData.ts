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
  },
  {
    id: 2,
    category: 'Museo',
    mainCategory: 'Arte',
    title: 'Museo de arte',
    rating: 3.4,
    image: require('../assets/images/museums-category.jpg'),
  },
  {
    id: 3,
    category: 'Monumento',
    mainCategory: 'Arte',
    title: 'Monumento de la catedral',
    rating: 4.5,
    image: require('../assets/images/monuments-category.jpg'),
  },
  {
    id: 4,
    category: 'Restaurante',
    mainCategory: 'Hostelería',
    title: 'Restaurante de la plaza',
    rating: 4.5,
    image: require('../assets/images/restaurants-category.jpg'),
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
