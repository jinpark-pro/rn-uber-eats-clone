import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PLACES_API_KEY = 'AIzaSyCiNj8qUm4kyuRuTxCJcb8Z-NpjYbn9kis';
export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        query={{ key: PLACES_API_KEY }}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
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
