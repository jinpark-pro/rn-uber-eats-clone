import { View, Text, Image } from 'react-native';
import React from 'react';

const image =
  'http://cdn.cnn.com/cnnnext/dam/assets/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg';
const title = 'Korean Cuisine';
const description = 'Korean - Comfort Food - $$ - (2900+)';

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
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
