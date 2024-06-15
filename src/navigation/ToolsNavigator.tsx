import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tools from '../screens/Tool/Tools';
import ConversionCalculator from '../screens/Tool/ConversionCalculator'; // Đổi lại thành ConversionCalculator
import TaxCalculator from '../screens/Tool/TaxCalc';
import SocialInsuaranceCalculator from '../screens/Tool/InsuranceCalc';
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
      <Stack.Screen name="TaxCalculator" component={TaxCalculator} />
      <Stack.Screen
        name="SocialInsuaranceCalculator"
        component={SocialInsuaranceCalculator}
      />
    </Stack.Navigator>
  );
}

export default ToolsStackNavigator;
