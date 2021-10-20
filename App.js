import { View, Image, StyleSheet } from 'react-native';
import logo from './assets/greenpayLogo.PNG';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <text>Greenpay is real pain</text>

      <text>🅶🆁🅴🅴🅽 🅿🅰🆈</text>
      <Image source={logo} style={{ width: 1200, height: 900 }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
