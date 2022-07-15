import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from '../firebase';
import MenuItems from '../components/restaurantDetail/MenuItems';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Bulgogi',
        description:
          'A juicy, savory dish of grilled marinated beef, bulgogi is Korean meat dishes.',
        price: '$30.00',
        image:
          'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/07/hfnnc1.jpg',
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '95%',
        }}
      >
        <LottieView
          style={{ height: 50, alignSelf: 'center', marginBottom: 18 }}
          source={require('../assets/animations/check-mark-done.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Your order at {restaurantName} has been placed for {totalUSD}
          </Text>
        </View>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{ height: 200, alignSelf: 'center' }}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
