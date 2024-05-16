// src/screens/News.tsx
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Market() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

export default Market;
