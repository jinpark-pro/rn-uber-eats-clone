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
