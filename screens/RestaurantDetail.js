import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
    title: 'Bulgogi',
    description:
      'A juicy, savory dish of grilled marinated beef, bulgogi is Korean meat dishes.',
    price: '$30.00',
    image:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/07/hfnnc1.jpg',
  },
  {
    title: 'Bibimbap',
    description:
      'Bibimbap is a bowl of mixed ingredients including rice, beef, vegetables, chili pepper paste, and a fried egg.',
    price: '$10.00',
    image:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/07/pnkyx3.jpg',
  },
  {
    title: 'Samgyetang',
    description:
      'Samgyetang is a traditional soup made of chicken, garlic, rice, Korean ginseng, and spices.',
    price: '$20.00',
    image:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/07/epy79n.jpg',
  },
  {
    title: 'Kimchi',
    description:
      'kimchi is a spicy and sour dish made up of fermented vegetables.',
    price: '$4.00',
    image:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/07/hy0wey.jpg',
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
