import { View, Text, Image } from 'react-native';
import React from 'react';

const yelpRestaurantInfo = {
  name: 'Korean Cuisine',
  image:
    'http://cdn.cnn.com/cnnnext/dam/assets/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [{ title: 'Korean' }, { title: 'Comfort Food' }],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(' - ');

const description = `${formattedCategories} ${
  price ? ' - ' + price : ''
} - ${rating} (${reviews}+)`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15,
      fontWeight: '400',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
