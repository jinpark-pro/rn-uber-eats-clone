import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ height: '56%' }}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
              fillColor='green'
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation='vertical'
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: '70%', justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View style={{ width: '20%' }}>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: '100%',
        resizeMode: 'cover',
        height: 60,
        borderRadius: 8,
      }}
    />
  </View>
);
