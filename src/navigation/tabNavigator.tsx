import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import News from '../screens/News';
import Learn from '../screens/Learn';
import Invest from '../screens/Invest';
import Money from '../screens/Money';
import Market from '../screens/Market';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="News"
      screenOptions={() => ({
        tabBarActiveTintColor: '#81088f',
        tabBarStyle: {height: 65},
        tabBarLabelStyle: {fontSize: 14},
      })}>
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
          tabBarLabel: 'News',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'newspaper'} color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          headerShown: false,
          tabBarLabel: 'Market',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'chart-line'} color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          headerShown: false,
          tabBarLabel: 'Money',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'money-bill'} color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          headerShown: false,
          tabBarLabel: 'Invest',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'bitcoin'} color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          headerShown: false,
          tabBarLabel: 'Learn',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'book'} color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;