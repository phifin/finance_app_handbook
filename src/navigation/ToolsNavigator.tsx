import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tools from '../screens/Tool/Tools';
import ConversionCalculator from '../screens/Tool/ConversionCalculator'; // Đổi lại thành ConversionCalculator

const Stack = createNativeStackNavigator();

function ToolsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AllTools">
      <Stack.Screen name="AllTools" component={Tools} />
      <Stack.Screen
        name="ConversionCalculator"
        component={ConversionCalculator} // Đổi lại thành ConversionCalculator
      />
    </Stack.Navigator>
  );
}

export default ToolsStackNavigator;
