import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, {
  localRestaurants,
} from '../components/RestaurantItems';

const YELP_API_KEY =
  'Wo1lWWoA_GpiN3NgeVtJkD2NZWkEfaHa7PImdYcQjDqKtj6cpmhA_YJThcMaFXRIh-IR2NUxOrwZKjg4kid9ip-aY5FDb5ZSxx7heK1IzdCRuDgS3kfOre37_gO9YnYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Victoria');
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      });
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
