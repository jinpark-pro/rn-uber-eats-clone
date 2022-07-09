# Uber Eats Clone

- ```bash
  npx create-react-native-app rn-uber-eats-clone
  > How would you like to start: Template from expo/examples: https://github.com/expo/examples
  > Pick an example: blank
  cd rn-uber-eats-clone
  ```

## Header Tab

- Create `/screens/Home.js`, and type `rnf` on it. It will create `reactNativeFunctionalComponent`

  - `reactNativeFunctionalComponent`

    - ```js
      import { View, Text } from 'react-native';
      import React from 'react';

      export default function Home() {
        return (
          <View>
            <Text>Home</Text>
          </View>
        );
      }
      ```

- On `/App.js`

  - ```js
    import { View, Text } from 'react-native';
    import Home from './screens/Home';

    export default function App() {
      return <Home />;
    }
    ```

- On `/screens/Home.js`

  - ```js
    import { ..., SafeAreaView } from 'react-native';
    ...
      return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
          <View style={{ backgroundColor: 'white', padding: 15 }}>
            <HeaderTabs />
          </View>
        </SafeAreaView>
      ...
    ```

- Create `/components/HeaderTabs.js`, and type `rnf` on it.

  - ```js
    import { View, Text, TouchableOpacity } from 'react-native';
    import React, { useState } from 'react';

    export default function HeaderTabs() {
      const [activeTab, setActiveTab] = useState('Delivery');
      return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <HeaderButton
            text='Delivery'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <HeaderButton
            text='Pickup'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
      );
    }

    const HeaderButton = (props) => (
      <TouchableOpacity
        style={{
          backgroundColor: props.activeTab === props.text ? 'black' : 'white',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
      >
        <Text
          style={{
            color: props.activeTab === props.text ? 'white' : 'black',
            fontSize: 15,
            fontWeight: '900',
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    );
    ```

## Search Bar

- ```bash
  yarn add react-native-vector-icons
  yarn add react-native-google-places-autocomplete
  ```

- Create `/components/SearchBar.js`

  - ```js
    import { View, Text } from 'react-native';
    import React from 'react';
    import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
    import Ionicons from 'react-native-vector-icons/Ionicons';
    import AntDesign from 'react-native-vector-icons/AntDesign';

    export default function SearchBar() {
      return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
          <GooglePlacesAutocomplete
            placeholder='Search'
            styles={{
              textInput: {
                backgroundColor: '#eee',
                borderRadius: 20,
                fontWeight: '700',
                marginTop: 7,
              },
              textInputContainer: {
                backgroundColor: '#eee',
                borderRadius: 50,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              },
            }}
            renderLeftButton={() => (
              <View style={{ marginLeft: 10 }}>
                <Ionicons name='location-sharp' size={24} />
              </View>
            )}
            renderRightButton={() => (
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 8,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 10,
                  alignItems: 'center',
                }}
              >
                <AntDesign
                  name='clockcircle'
                  style={{ marginRight: 6 }}
                  size={11}
                />
                <Text>Search</Text>
              </View>
            )}
          />
        </View>
      );
    }
    ```

- On `/screens/Home.js`, add `SearchBar`

## Categories

- Create `/components/Categories.js`

  - ```js
    import { View, Text, Image, ScrollView } from 'react-native';
    import React from 'react';

    const items = [
      {
        image: require('../assets/images/shopping-bag.png'),
        text: 'Pick-up',
      },
      {
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks',
      },
      {
        image: require('../assets/images/bread.png'),
        text: 'Bakery Items',
      },
      {
        image: require('../assets/images/fast-food.png'),
        text: 'Fast Foods',
      },
      {
        image: require('../assets/images/deals.png'),
        text: 'Deals',
      },
      {
        image: require('../assets/images/coffee.png'),
        text: 'Coffee & Tea',
      },
      {
        image: require('../assets/images/desserts.png'),
        text: 'Desserts',
      },
    ];

    export default function Categories() {
      return (
        <View
          style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
              <View
                key={index}
                style={{ alignItems: 'center', marginHorizontal: 15 }}
              >
                <Image
                  source={item.image}
                  style={{ width: 50, height: 40, resizeMode: 'contain' }}
                />
                <Text style={{ fontSize: 13, fontWeight: '900' }}>
                  {item.text}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }
    ```

- On `/screens/Home.js`, add `Categories`

  - ```js
    ...
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
    ```

## Restaurant Items

- Create `/components/RestaurantItems.js`

  - ```js
    import { View, Text, Image, TouchableOpacity } from 'react-native';
    import React from 'react';
    import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

    const localRestaurants = [
      {
        name: 'Beachside Bar',
        image_url:
          'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5,
      },
      {
        name: 'Benihana',
        image_url:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 3.7,
      },
      {
        name: "India's Grill",
        image_url:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        categories: ['Indian', 'Bar'],
        price: '$$',
        reviews: 700,
        rating: 4.9,
      },
    ];

    export default function RestaurantItems() {
      return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
          {localRestaurants.map((restaurant, index) => (
            <View
              key={index}
              style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
            >
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </View>
          ))}
        </TouchableOpacity>
      );
    }

    const RestaurantImage = ({ image }) => (
      <>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
          <MaterialCommunityIcons
            name='heart-outline'
            size={25}
            color='white'
          />
        </TouchableOpacity>
      </>
    );

    const RestaurantInfo = ({ name, rating }) => (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ fontSize: 13, color: 'grey' }}>30-35 min</Text>
        </View>
        <View
          style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
        >
          <Text>{rating}</Text>
        </View>
      </View>
    );
    ```

- Add `RestaurantItems` to `/screens/Home.js`

## Dynamic Restaurant Items

- Access `localRestaurants` from `/screens/Home.js`

  - On `/components/RestaurantItems.js`, add `export` to `localRestaurants`

    - `export const localRestaurants = [`

- On `/screens/Home.js`

  - ```js
    ...
    import React, { useState } from 'react';
    import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
    export default function Home() {
      const [restaurantData, setRestaurantData] = useState(localRestaurants);

      return (
        ...
            <RestaurantItems restaurantData={restaurantData} />
            ...
    ```

- On `/components/RestaurantItems.js`

  - ```js
    ...
    export default function RestaurantItems({ restaurantData }) {
      return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
          {restaurantData.map((restaurant, index) => (
            ...
    ```

## Get Restaurant Data by using Yelp API

- Login [Yelp Fusion](https://fusion.yelp.com/) and create App

  - Copy API Key from Manage App

- [Yelp Businesses Search API](https://www.yelp.com/developers/documentation/v3/business_search)

  - Request: `GET https://api.yelp.com/v3/businesses/search`

  - Parameters:

    - `term`: Optional. Search term, for example "food" or "restaurants". The term may also be business names, such as "Starbucks". If term is not included the endpoint will default to searching across businesses from a small number of popular categories.

    - `location`: Required if either latitude or longitude is not provided. This string indicates the geographic area to be used when searching for businesses. Examples: "New York City", "NYC", "350 5th Ave, New York, NY 10118". Businesses returned in the response may not be strictly within the specified location.

    - `limit`: Optional. Number of business results to return. By default, it will return 20. Maximum is 50.

    - `sort_by`: Optional. Suggestion to the search algorithm that the results be sorted by one of the these modes: best_match, rating, review_count or distance. The default is best_match. Note that specifying the sort_by is a suggestion (not strictly enforced) to Yelp's search, which considers multiple input parameters to return the most relevant results. For example, the rating sort is not strictly sorted by the rating value, but by an adjusted rating value that takes into account the number of ratings, similar to a Bayesian average. This is to prevent skewing results to businesses with a single review.

    - `price`: Optional. Pricing levels to filter the search result with: 1 = $, 2 = $$, 3 = $$$, 4 = $$$$. The price filter can be a list of comma delimited pricing levels. For example, "1, 2, 3" will filter the results to show the ones that are $, $$, or $$$.

  - Response Body

    - ```json
      Object {
        "businesses": Array [
          Object {
            "alias": "the-noble-lion-victoria",
            "categories": Array [
              Object {
                "alias": "bars",
                "title": "Bars",
              },
              Object {
                "alias": "modern_european",
                "title": "Modern European",
              },
            ],
            "coordinates": Object {
              "latitude": 44.85956608282057,
              "longitude": -93.66213900674693,
            },
            "display_phone": "(952) 855-1008",
            "distance": 493.91605461274867,
            "id": "BceBO94D8LuaWXh4dIix8Q",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/b35ernBwh-epbMyEM1OCWA/o.jpg",
            "is_closed": false,
            "location": Object {
              "address1": "7940 Victoria Dr",
              "address2": null,
              "address3": "",
              "city": "Victoria",
              "country": "US",
              "display_address": Array [
                "7940 Victoria Dr",
                "Victoria, MN 55386",
              ],
              "state": "MN",
              "zip_code": "55386",
            },
            "name": "The Noble Lion",
            "phone": "+19528551008",
            "price": "$$$",
            "rating": 4.5,
            "review_count": 97,
            "transactions": Array [],
            "url": "https://www.yelp.com/biz/the-noble-lion-victoria?adjust_creative=fcRa7SKs-dld0zb14Rv0vw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fcRa7SKs-dld0zb14Rv0vw",
          },
      ```

- On `/screens/Home.js`

  - ```js
    ...
    const YELP_API_KEY = 'apikey';

    export default function Home() {
      const [restaurantData, setRestaurantData] = useStatelocalRestaurants);
      const getRestaurantFromYelp = () => {
        const yelpUrl =
          'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Victoria';

        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };

        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) => {
            setRestaurantData(json.businesses);
            console.log(json);
          });
      };

      useEffect(() => {
        getRestaurantFromYelp();
      }, []);
      ...
    ```

## Search Places Autocomplete

- Google Cloud Platform

  1. Create new account
  2. APIs & Services
  3. Enable APIs and Services
  4. Search `places` and Click `Places API`
  5. Click Enable button
  6. Click `Places API`
  7. Click `Credentials`
  8. Click `Create Credentials` and Click `API Key`
  9. Copy API key and Click `Edit API key`
  10. Check `Restrict key`
  11. Type `places` and Click `Places API` on `Select APIs`
  12. Click `Save` button

- Add the API key to `components/SearchBar.js`

  - ```js
    const PLACES_API_KEY = 'apikey';
    ...
      <GooglePlacesAutocomplete
        query={{ key: PLACES_API_KEY }}
        ...
    ```

  - When the places won't be autocompleted, set the project to billing account.

- On `/screens/Home.js`

  - ```js
    ...
    export default function Home() {
      ...
      const [city, setCity] = useState('Victoria');
      const getRestaurantFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        ...
      };

      useEffect(() => {
        getRestaurantFromYelp();
      }, [city]);
      return (
        ...
            <SearchBar cityHandler={setCity} />
          ...
    ```

- On `/components/SearchBar.js`

  - ```js
    export default function SearchBar({ cityHandler }) {
      ...
          <GooglePlacesAutocomplete
            ...
            onPress={(data, details = null) => {
              const city = data.description.split(',')[0];
              cityHandler(city);
            }}
            ...
    ```

## Search Pickup or Delivery

- On `/screens/Home.js`

  - ```js
      ...
      const [activeTab, setActiveTab] = useState('Delivery');
      ...
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) => {
            setRestaurantData(
              json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
              ...
      useEffect(() => {
        getRestaurantFromYelp();
      }, [city, activeTab]);

      return (
        ...
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            ...
    ```

- On `/components/HeaderTab.js`, set `activeTab, setActiveTab` as props of `HeaderTabs`

## No Pickup or Delivery

- On `/screens/Home.js`

  - ```js
    json.businesses.filter(
      (business) =>
        business.transactions.includes(activeTab.toLowerCase()) ||
        business.transactions.length == 0
    );
    ```

- On `/components/RestaurantItems.js`

  - ```js
    ...
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
                transactions={
                  restaurant.transactions === undefined ||
                  restaurant.transactions.length === 0
                    ? 'No Pickup or Delivery'
                    : restaurant.transactions.join(', ')
                }
              />
              ...
        <Image
          source={{
            uri:
              image != ''
                ? image
                : 'https://stock.adobe.com/search/images?k=no%20image%20available',
          }}
          ...
    const RestaurantInfo = ({ name, rating, transactions }) => (
      ...
        <View>
        ...
          <Text style={{ fontSize: 13, color: 'grey' }}>{transactions}</Text>
        </View>
        ...
    ```

## Bottom Tabs Component

- Create `/components/BottomTabs.js`

  - ```js
    import { View, Text } from 'react-native';
    import React from 'react';

    export default function BottomTabs() {
      return (
        <View>
          <Text>BottomTabs</Text>
        </View>
      );
    }
    ```

- `yarn add react-native-elements`

- On `/screens/Home.js`

  - ```js
    import { Divider } from 'react-native-elements';
    import BottomTabs from '../components/BottomTabs';
    ...
          <Divider width={1} />
          <BottomTabs />
        </SafeAreaView>
      ...
    ```

- Error: Unable to resolve module react-native-safe-area-context

  - `expo install react-native-safe-area-context`

  - On `/App.js`, add `SafeAreaProvide`

    - ```js
      import { SafeAreaProvider } from 'react-native-safe-area-context';
      import Home from './screens/Home';

      export default function App() {
        return (
          <SafeAreaProvider>
            <Home />
          </SafeAreaProvider>
        );
      }
      ```

  - On `/screens/Home.js`, import `SafeAreaView`

    - ```js
      import { View, ScrollView } from 'react-native';
      import { SafeAreaView } from 'react-native-safe-area-context';
      ...
      ```

- On `/components/BottomTabs.js`

  - ```js
    import { View, Text, TouchableOpacity } from 'react-native';
    import React from 'react';
    import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

    export default function BottomTabs() {
      return (
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30,
            justifyContent: 'space-between',
          }}
        >
          <Icon icon='home' text='Home' />
          <Icon icon='search' text='Browse' />
          <Icon icon='shopping-bag' text='Grocery' />
          <Icon icon='receipt' text='Orders' />
          <Icon icon='user' text='Account' />
        </View>
      );
    }

    const Icon = (props) => (
      <TouchableOpacity>
        <View>
          <FontAwesome5
            name={props.icon}
            size={25}
            style={{ marginBottom: 3, alignSelf: 'center' }}
          />
          <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>
    );
    ```

- Error: undefined Unable to resolve module @expo/vector-icons/FortAwesome5

  - `yarn cache clean`

## About Component

- Move components from `/components/` to `/components/home/`, and change the locations on `Categories.js` and `Home.js`

- Create `/components/restaurantDetail/About.js`

  - ```js
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
      <Image
        source={{ uri: props.image }}
        style={{ width: '100%', height: 180 }}
      />
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
    ```

- Create `/screens/RestaurantDetail.js`

  - ```js
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
    ```

- On `App.js`

  - ```js
    import RestaurantDetail from './screens/RestaurantDetail';

    export default function App() {
      return <RestaurantDetail />;
    }
    ```

## Menu Item Component

- Create `/components/restaurantDetail/MenuItem.js`

  - ```js
    import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
    import React from 'react';
    import { Divider } from 'react-native-elements';

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: '52%' }}
        >
          {foods.map((food, index) => (
            <View key={index}>
              <View style={styles.menuItemStyle}>
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
      <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
      </View>
    );

    const FoodImage = (props) => (
      <View>
        <Image
          source={{ uri: props.food.image }}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
      </View>
    );
    ```

- On `/screens/RestaurantDetail.js`, add `MenuItems`

## Use .env

- `yarn add react-native-dotenv`

- Create `.prettierignore` and add `.env`

- Create `.env`

  - ```
    YELP_API_KEY="apikey"
    PLACES_API_KEY="apikey"
    ```

- Add `.env` and `.prettierignore` to `.gitignore`

- On `babel.config.js`, add the plugin

  - ```js
    module.exports = function (api) {
      api.cache(true);
      return {
        presets: ['babel-preset-expo'],
        plugins: [
          [
            'module:react-native-dotenv',
            {
              moduleName: '@env',
              path: '.env',
              blacklist: null,
              whitelist: null,
              safe: false,
              allowUndefined: true,
            },
          ],
        ],
      };
    };
    ```

- On `/components/home/SearchBar.js`

  - ```js
    ...
    import { PLACES_API_KEY } from '@env';

    export default function SearchBar({ cityHandler }) {
      ...
          <GooglePlacesAutocomplete
            query={{ key: String(PLACES_API_KEY) }}
            ...
    ```

- On `/screens/Home.js`

  - ```js
    import { YELP_API_KEY } from '@env';
    ...
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${String(YELP_API_KEY)}`,
            ...
    ```

## Modify Restaurant Input Data on About Component

- On `/components/restaurantDetail/About.js`

  - ```js
    ...
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
    ...
    ```

## Navigation

- ```bash
  yarn add @react-navigation/native
  yarn add @react-navigation/stack
  yarn add react-native-gesture-handler
  ```

- Create `navigation.js`

  - ```js
    import React from 'react';
    import { createStackNavigator } from '@react-navigation/stack';
    import { NavigationContainer } from '@react-navigation/native';
    import Home from './screens/Home';
    import RestaurantDetail from './screens/RestaurantDetail';

    export default function RootNavigation() {
      const Stack = createStackNavigator();

      const screenOptions = {
        headerShown: false,
      };

      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={screenOptions}
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen
              name='RestaurantDetail'
              component={RestaurantDetail}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    ```

- On `App.js`

  - ```js
    import RootNavigation from './navigation';

    export default function App() {
      return <RootNavigation />;
    }
    ```

- On `/screens/Home.js`

  - ```js
    ...
    export default function Home({ navigation }) {
      ...
            <RestaurantItems
              restaurantData={restaurantData}
              navigation={navigation}
            />
          ...
    ```

- On `/components/home/RestaurantItems.js`

  - ```js
    ...
    export default function RestaurantItems({ navigation, ...props }) {
      return (
        <>
          {props.restaurantData.map((restaurant, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  name: restaurant.name,
                  image: restaurant.image_url,
                  price: restaurant.price,
                  reviews: restaurant.review_count,
                  rating: restaurant.rating,
                  categories: restaurant.categories,
                })
              }
            >
              <View
                style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
              >
                ...
                />
              </View>
            </TouchableOpacity>
          ...
    ```

- On `/screens/RestaurantDetail.js`

  - ```js
    ...
    export default function RestaurantDetail({ route }) {
      return (
        <View>
          <About route={route} />
          ...
    ```

- On `/components/RestaurantDetail/About.js`

  - ```js
    import { View, Text, Image } from 'react-native';
    import React from 'react';

    export default function About(props) {
      const { name, image, price, reviews, rating, categories } =
        props.route.params;
      const formattedCategories = categories.map((cat) => cat.title).join(' - ');
      const description = `${formattedCategories} ${
        price ? ' - ' + price : ''
      } - ${rating} (${reviews}+)`;
      ...
    ```

## Add Checkboxes to Menu Items

- ```bash
  yarn add react-native-bouncy-checkbox
  yarn add tslib
  ```

- On `/components/restaurantDetail/MenuItems.js`

  - ```js
    import BouncyCheckbox from 'react-native-bouncy-checkbox';
    ...
                 <View style={styles.menuItemStyle}>
                  <BouncyCheckbox
                    iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                    fillColor='green'
                  />
                  ...
    ```

---

# Errors

## no such file or directory react-is

- React native throws error: no such file or directory

  1. Close all the open terminal windows. Even of other projects.
  2. Restart the Metro bundler.

## Unable to resolve module react-native-safe-area-context

- `expo install react-native-safe-area-context`

- Import the `SafeAreaView` component from the `react-native-safe-area-content` library and replace it with he one from React Native.

## undefined Unable to resolve module @expo/vector-icons/FortAwesome5

- Clear the cache of react native project

  - `yarn cache clean`
