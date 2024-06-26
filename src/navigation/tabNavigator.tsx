import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NewsStackNavigator from './NewsNavigator';
import Learn from '../screens/Learn';
import PortfolioManager from '../screens/Invest';
import ToolsStackNavigator from './ToolsNavigator';
import MarketTabs from './marketNav';

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
        component={NewsStackNavigator}
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
        component={MarketTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'Market',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'chart-line'} color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        component={ToolsStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Tools',
          headerStyle: {height: 100},
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 40},
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'tools'} color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={PortfolioManager}
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
