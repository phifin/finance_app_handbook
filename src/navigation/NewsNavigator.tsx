import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '../screens/News';
import NewsDetail from '../components/NewsDetails';
const Stack = createNativeStackNavigator();
function NewsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsDetails" component={NewsDetail} />
    </Stack.Navigator>
  );
}

export default NewsStackNavigator;
