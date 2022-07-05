import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
    </View>
  );
}
