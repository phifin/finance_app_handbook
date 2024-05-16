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

function Money() {
  return (
    <View style={styles.container}>
      <Text>money!</Text>
    </View>
  );
}

export default Money;
