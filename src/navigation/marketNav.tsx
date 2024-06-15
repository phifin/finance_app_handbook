import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Market from '../screens/Market/cryptoMarket';
import StockMarket from '../screens/Market/stockMarket';
const Tab = createMaterialTopTabNavigator();

function MarketTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 15, color: 'white', fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: '#952d82'},
      }}>
      <Tab.Screen name="Crypto" component={Market} />
      <Tab.Screen name="Stock" component={StockMarket} />
      <Tab.Screen name="Commodity" component={Market} />
    </Tab.Navigator>
  );
}

export default MarketTabs;
