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
