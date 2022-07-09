import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ViewCart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 16,
        zIndex: 999,
        opacity: 0.7,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}
        >
          <Text style={{ color: 'white' }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
